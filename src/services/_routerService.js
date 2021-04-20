// routes
import Widgets from 'Routes/widgets';
import Pages from 'Routes/pages';
import AdvanceUIComponents from 'Routes/advance-ui-components';
import CalendarComponents from 'Routes/calendar';
import ChartsComponents from 'Routes/charts';
import FormElements from 'Routes/forms';
import Users from 'Routes/users';
import Components from 'Routes/components';
import Tables from 'Routes/tables';
import Icons from 'Routes/icons';
import Maps from 'Routes/maps';
import DragAndDrop from 'Routes/drag-drop';
import Editor from 'Routes/editor';
import Ecommerce from 'Routes/ecommerce';
import Dashboard from 'Routes/dashboard';
import Crm from 'Routes/crm';
import ImageCropper from 'Routes/image-cropper';
import VideoPlayer from 'Routes/video-player';
import Dropzone from 'Routes/dropzone';

import Welcome from 'Routes/welcome';
import News from 'Routes/news';
import Blogs from 'Routes/blogs';
import ContactUs from 'Routes/contactUs';
import AboutUs from 'Routes/aboutUs';
import Resources from 'Routes/resources';
import ForexTradingPart1 from 'Routes/resources/tabs/ForexTradingPart1';
import ForexTradingPart2 from 'Routes/resources/tabs/ForexTradingPart2';
import Compliance from 'Routes/compliance';
import Faq from 'Routes/faq';
import Affiliate from 'Routes/affiliate';
import Exchange from 'Routes/exchange';
import Login from 'Routes/login';
import Signup from 'Routes/signup';
import UserDashboard from 'Routes/userDashboard';
import UserExchange from 'Routes/userExchange';
import UserProfile from 'Routes/userProfile';
import Logout from 'Routes/logout';

// async component
import {
   AsyncAboutUsComponent,
   AsyncChatComponent,
   AsyncMailComponent,
   AsyncTodoComponent,
} from 'Components/AsyncComponent/AsyncComponent';

export default [
   // {
   //    path: 'dashboard',
   //    component: Dashboard
   // },
   // {
   //    path: 'crm',
   //    component: Crm
   // },
   // {
   //    path: 'widgets',
   //    component: Widgets
   // },
   // {
   //    path: 'ecommerce',
   //    component: Ecommerce
   // },
   // {
   //    path: 'icons',
   //    component: Icons
   // },
   // {
   //    path: 'about-us',
   //    component: AsyncAboutUsComponent
   // },
   // {
   //    path: 'pages',
   //    component: Pages
   // },
   // {
   //    path: 'chat',
   //    component: AsyncChatComponent
   // },
   // {
   //    path: 'mail',
   //    component: AsyncMailComponent
   // },
   // {
   //    path: 'todo',
   //    component: AsyncTodoComponent
   // },
   // {
   //    path: 'charts',
   //    component: ChartsComponents
   // },
   // {
   //    path: 'tables',
   //    component: Tables
   // },
   // {
   //    path: 'maps',
   //    component: Maps
   // },
   // {
   //    path: 'users',
   //    component: Users
   // },
   // {
   //    path: 'ui-components',
   //    component: Components
   // },
   // {
   //    path: 'advanced-component',
   //    component: AdvanceUIComponents
   // },
   // {
   //    path: 'drag-andDrop',
   //    component: DragAndDrop
   // },
   // {
   //    path: 'forms',
   //    component: FormElements
   // },
   // {
   //    path: 'editor',
   //    component: Editor
   // },
   // {
   //    path: 'calendar',
   //    component: CalendarComponents
   // },
   // {
   //    path: 'image-cropper',
   //    component: ImageCropper
   // },
   // {
   //    path: 'video-player',
   //    component: VideoPlayer
   // },
   // {
   //    path: 'dropzone',
   //    component: Dropzone
   // },

   {
      path: 'welcome',
      component: Welcome
   },
   {
      path: 'news',
      component: News
   },
   {
      path: 'blogs',
      component: Blogs
   },
   {
      path: 'contactUs',
      component: ContactUs
   },
   {
      path: 'aboutUs',
      component: AboutUs
   },
   {
      path: 'resources',
      component: Resources
   },
   {
      path: 'forexTradingPart1',
      component: ForexTradingPart1
   },
   {
      path: 'forexTradingPart2',
      component: ForexTradingPart2
   },
   {
      path: 'compliance',
      component: Compliance
   },
   {
      path: 'faq',
      component: Faq
   },
   {
      path: 'affiliate',
      component: Affiliate
   },
   {
      path: 'exchange',
      component: Exchange
   },
   {
      path: 'login',
      component: Login
   },
   {
      path: 'signup',
      component: Signup
   },
   {
      path: 'userDashboard',
      component: UserDashboard
   },
   {
      path: 'userExchange',
      component: UserExchange
   },
   {
      path: 'userProfile',
      component: UserProfile
   },
   {
      path: 'userLogout',
      component: Logout
   }
]