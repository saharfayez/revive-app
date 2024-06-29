const folderData = [
  {
    name: "Authentication",
    subfolders: [
      {
        name: "upload image",
        routes: [
          {
            method: "POST",
            path: "localhost:8000/api/rev/images/evive/filesmachineimage",
          },
          { method: "POST", path: "localhost:8000/api/rev/revive/usersimage" },
        ],
      },
      {
        name: "Dioxide Python",
        routes: [
          { method: "POST", path: "localhost:8000/api/rev/python/test" },
          {
            method: "POST",
            path: "localhost:8000/api/rev/python/trainng/footprint/person",
          },
          {
            method: "POST",
            path: "localhost:8000/api/rev/python/trainng/footprint/product",
          },
          { method: "POST", path: "localhost:8000/api/rev/python/chat" },
          {
            method: "POST",
            path: "localhost:8000/api/rev/python/carbon/footprint/factory",
          },
          {
            method: "POST",
            path: "localhost:8000/api/rev/python/dioxide/ratio",
          },
          {
            method: "POST",
            path: "localhost:8000/api/rev/python/tranining",
          },
        ],
      },
    ],
  },
  {
    name: "Login & Register",
    subfolders: [
      {
        name: "Forget",
        routes: [
          { method: "POST", path: "localhost:8000/api/rev/check/code" },
          { method: "POST", path: "localhost:8000/api/rev/forget/pass" },
        ],
      },
      {
        name: "Service",
        routes: [
          {
            method: "GET",
            path: "http://127.0.0.1:8000/api/rev/redirect/google",
          },
          { method: "GET", path: "localhost:8000/api/rev/posts/show/10" },
          { method: "GET", path: "localhost:8000/api/rev/posts/edit/11" },
        ],
      },
    ],
    routes: [
      { method: "POST", path: "localhost:8000/api/rev/users/regist" },
      { method: "POST", path: "localhost:8000/api/rev/users/login" },
    ],
  },

  {
    name: "Admin",
    subfolders: [
      {
        name: "TCR MACHINE",
        routes: [
          { method: "POST", path: "localhost:8000/api/rev/tcr/new_machine" },
          { method: "DEL", path: "localhost:8000/api/rev/tcr/20" },
          { method: "PUT", path: "localhost:8000/api/rev/tcr/update/20" },

          {
            method: "GET",
            path: "localhost:8000/api/rev/tcr/autocolmpletesearch",
          },

          {
            method: "GET",
            path: "localhost:8000/api/rev/tcr/autocolmpletesearch",
          },

          { method: "GET", path: "localhost:8000/api/rev/tcr/restoreindex" },

          { method: "POST", path: "localhost:8000/api/rev/tcr/restore" },
        ],
      },
      {
        name: "Users",
        routes: [
          {
            method: "POST",
            path: "http://127.0.0.1:8000/api/rev/users",
          },
          { method: "GET", path: "localhost:8000/api/rev/users/shows" },
          { method: "GET", path: "localhost:8000/api/rev/users/edit/10" },

          {
            method: "GET",
            path: "localhost:8000/api/rev/users/autocolmpletesearch",
          },

          { method: "PUT", path: "localhost:8000/api/rev/users/updatepass/37" },
          { method: "PUT", path: "localhost:8000/api/rev/users/modifyrole/37" },

          { method: "DEL", path: "localhost:8000/api/rev/users/destroy/37" },

          { method: "GET", path: "localhost:8000/api/rev/users/restore/index" },

          { method: "POST", path: "localhost:8000/api/rev/users/restore" },
        ],
      },

      {
        name: "posts",
        routes: [
          { method: "GET", path: "localhost:8000/api/rev/reports/posts" },
          { method: "PUT", path: "localhost:8000/api/rev/skip/report/posts" },
          { method: "Del", path: "localhost:8000/api/rev/posts/destroy" },
        ],
      },

      {
        name: "Barter process",
        routes: [
          {
            method: "POST",
            path: "localhost:8000/api/rev/BarterProcess/CarbonFootprint",
          },
          { method: "GET", path: "localhost:8000/api/rev/BarterProcess/edit" },
          {
            method: "PUT",
            path: "localhost:8000/api/rev/BarterProcess/update",
          },
        ],
      },
    ],
  },
];



export default folderData;