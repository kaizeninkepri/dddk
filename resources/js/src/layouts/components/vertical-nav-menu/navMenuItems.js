/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/
import url from "@/url";
let data = []
const axios = require("axios");
// var a = axios.get(url.web + '/menu')
//   .then((response) => {
//     // handle success
//     data.push(response.data)
//     data = response.data
//     return response.data;
    
//   });

  const sendGetRequest = async () => {
    let a = []
    try {
        const resp = await axios.get(url.web + '/menu');
        for(let i = 0; i < resp.data.length; i++){
          data.push(resp.data[i])
        }
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
    return a;
};
console.log(sendGetRequest());
export default data;

// export default [
  
//   {
//     url: "/",
//     name: "Dashboard",
//     slug: "home",
//     icon: "HomeIcon",
//   },
//   {
//     url: "page2",
//     name: "Badan pengusahaan",
//     slug: "Badan Pengusahaan",
//     icon: "ListIcon",
//   },
//   {
//     url: "users",
//     name: "Users",
//     slug: "investasi",
//     icon: "UsersIcon",
//   },
//   {
//     url: "page2",
//     name: "Infrastruktur",
//     slug: "investasi",
//     icon: "SlidersIcon",
//   },
//   {
//     url: "page2",
//     name: "Investasi",
//     slug: "investasi",
//     icon: "TrendingUpIcon",
//   },
//   // {
//   //   url: "/page2",
//   //   name: "Page 2",
//   //   slug: "page2",
//   //   icon: "FileIcon",
//   //   submenu: [
// 	// 		{
// 	// 			url: '/dashboard/analytics',
// 	// 			name: "Analytics",
// 	// 			slug: "dashboardAnalytics",
// 	// 			i18n: "Analytics",
//   //     },
//   //   ]
//   // },

// ]
