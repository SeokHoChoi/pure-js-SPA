import TechBlogPage from './tech-blog-page.js';
import TechDetailPage from './tech-detail-page.js';

export default (app) => {
  const home = () => new TechBlogPage(app);
  const list = () => new TechBlogPage(app);
  const detail = () => new TechDetailPage(app);

  return {
    home,
    list,
    detail,
  };
};
