interface IResponse<T> {
  status: number;
  data: T | undefined;
}

interface IRequestParams {
  method?: string;
  url: string;
  headers?: Record<string, string>;
  body?: Record<string, unknown>;
}

const parseResponse = async <T>(response: Response): Promise<IResponse<T>> => {
  const { status } = response;
  let data;
  // 클라이언트의 요청은 정상적이나 컨텐츠를 제공하지 않는경우(HTTP Response body가 존재하지 않습니다)
  if (status !== 204 && status >= 200 && status < 300) {
    data = await response.json();
  }

  return {
    status,
    data,
  };
};

const request = async ({
  method = 'GET',
  url,
  headers = {},
  body,
}: IRequestParams): Promise<IResponse<unknown>> => {
  const config: RequestInit = {
    method,
    headers: new Headers(headers),
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  const response = await fetch(url, config);

  return parseResponse(response);
};

export const get = async (
  url: string,
  headers: Record<string, string>
): Promise<unknown> => {
  const response = await request({
    url,
    headers,
    method: 'GET',
  });

  return response.data;
};
