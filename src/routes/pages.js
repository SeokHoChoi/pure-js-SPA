export default (container) => {
  const home = () => {
    container.textContent = '메인 페이지';
  };

  const design = () => {
    container.textContent = '디자인 리스트 페이지';
  };

  const tech = () => {
    container.textContent = '기술 리스트 페이지 (메인 페이지)';
  };

  const detail = (params) => {
    const { id } = params;
    container.textContent = `디테일 페이지의 Id ${id}`;
  };

  return {
    home,
    design,
    tech,
    detail,
  };
};
