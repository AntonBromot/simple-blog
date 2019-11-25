import Blogs from "../view/pages/Blogs"
import BlogItem from '../view/pages/BlogItem'
import CreateEditBlog from '../view/pages/CreateBlog'
import AboutUs from '../view/pages/StaticPages/AboutUs'
import Services from '../view/pages/StaticPages/Services'
import Guarantee from '../view/pages/StaticPages/Guarantee'
import Resources from '../view/pages/StaticPages/Resources'
import Forms from '../view/pages/StaticPages/Forms'
import Contact from '../view/pages/StaticPages/Contact'
import PageNotFound from '../view/pages/StaticPages/PageNotFound'

export const ROUTES_MAP = [
    {path: '/aboutUs', component: AboutUs },
    {path: '/services', component: Services },
    {path: '/guarantee', component: Guarantee },
    {path: '/resources', component: Resources },
    {path: '/forms', component: Forms },
    {path: '/contact', component: Contact },
    {path: '/create', component: CreateEditBlog },
    {path: '/:page', component: Blogs },
    {path: '/:page/blog/:_id', component: BlogItem },
    {path: '/:page/edit/:_id', component: CreateEditBlog },
    {path: '*', component: PageNotFound }
]
