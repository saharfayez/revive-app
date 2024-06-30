import React, { useState } from "react";
import "../Styles/api_styles.css";

const Resources = () => {
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
            {
              method: "POST",
              path: "localhost:8000/api/rev/revive/usersimage",
            },
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
            { method: "POST", path: "localhost:8000/api/rev/python/tranining" },
          ],
        },
        {
          name: "logout & profile",
          routes: [
            {
              method: "GET",
              path: "localhost:8000/api/rev/users/profile",
            },
            {
              method: "POST",
              path: "localhost:8000/api/rev/users/logout",
            },
          ],
        },
        {
          name: "Tourist Areas",
          routes: [
            {
              method: "GET",
              path: "localhost:8000/api/rev/tourist/areas",
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
            { method: "POST", path: "http://127.0.0.1:8000/api/rev/users" },
            { method: "GET", path: "localhost:8000/api/rev/users/shows" },
            { method: "GET", path: "localhost:8000/api/rev/users/edit/10" },
            {
              method: "GET",
              path: "localhost:8000/api/rev/users/autocolmpletesearch",
            },
            {
              method: "PUT",
              path: "localhost:8000/api/rev/users/updatepass/37",
            },
            {
              method: "PUT",
              path: "localhost:8000/api/rev/users/modifyrole/37",
            },
            { method: "DEL", path: "localhost:8000/api/rev/users/destroy/37" },
            {
              method: "GET",
              path: "localhost:8000/api/rev/users/restore/index",
            },
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
            {
              method: "GET",
              path: "localhost:8000/api/rev/BarterProcess/edit",
            },
            {
              method: "PUT",
              path: "localhost:8000/api/rev/BarterProcess/update",
            },
          ],
        },
      ],
    },
    {
      name: "Owner",
      subfolders: [
        {
          name: "Barter Process",
          routes: [
            {
              method: "GET",
              path: "localhost:8000/api/rev/BarterProcess/mine",
            },
            {
              method: "POST",
              path: "localhost:8000/api/rev/BarterProcess/Store",
            },
            {
              method: "DEL",
              path: "localhost:8000/api/rev/BarterProcess/delete",
            },
          ],
        },
      ],
    },
    {
      name: "Customer",
      routes: [
        {
          method: "DEL",
          path: "localhost:8000/api/rev/users/delete/myaccounts",
        },
      ],
    },
    {
      name: "Auth Client / Owner",
      subfolders: [
        {
          name: "Follow",
          routes: [
            {
              method: "POST",
              path: "localhost:8000/api/rev/users/follow",
            },
            {
              method: "GET",
              path: "localhost:8000/api/rev/users/following",
            },
            {
              method: "GET",
              path: "localhost:8000/api/rev/users/followers",
            },
            {
              method: "DEL",
              path: "localhost:8000/api/rev/users/follow",
            },
            {
              method: "GET",
              path: "localhost:8000/api/rev/follow/autocolmpletesearch",
            },
          ],
        },
        {
          name: "Edit info user",
          routes: [
            {
              method: "GET",
              path: "localhost:8000/api/rev/users/edits/myaccount",
            },
            {
              method: "GET",
              path: "localhost:8000/api/rev/users/checkvalidate/password",
            },
            {
              method: "GET",
              path: "localhost:8000/api/rev/users/edits/pasword",
            },
            {
              method: "PUT",
              path: "localhost:8000/api/rev/users/updates/myaccount",
            },
            {
              method: "PUT",
              path: "localhost:8000/api/rev/users/updates/password",
            },
          ],
        },
        {
          name: "Favourite",
          routes: [
            {
              method: "POST",
              path: "localhost:8000/api/rev/posts/favourite",
            },
            {
              method: "GET",
              path: "localhost:8000/api/rev/posts/favourite",
            },

            {
              method: "DEL",
              path: "localhost:8000/api/rev/posts/favourite",
            },
          ],
        },
        {
          name: "Comment",
          routes: [
            {
              method: "POST",
              path: "localhost:8000/api/rev/posts/comment",
            },
            {
              method: "GET",
              path: "localhost:8000/api/rev/posts/comment",
            },
            {
              method: "GET",
              path: "localhost:8000/api/rev/posts/comment/edit",
            },
            {
              method: "PUT",
              path: "localhost:8000/api/rev/posts/comment/update",
            },

            {
              method: "DEL",
              path: "localhost:8000/api/rev/posts/comment/destroy",
            },
          ],
        },
        {
          name: "post",
          routes: [
            {
              method: "POST",
              path: "localhost:8000/api/rev/posts",
            },
            {
              method: "GET",
              path: "localhost:8000/api/rev/posts",
            },
            {
              method: "GET",
              path: "localhost:8000/api/rev/posts/show/10",
            },
            {
              method: "GET",
              path: "localhost:8000/api/rev/posts/showmyposts",
            },
            {
              method: "GET",
              path: "localhost:8000/api/rev/posts/edit/11",
            },

            {
              method: "PUT",
              path: "localhost:8000/api/rev/posts/update/10",
            },

            {
              method: "DEL",
              path: "localhost:8000/api/rev/posts/destroy/11",
            },
            {
              method: "GET",
              path: "localhost:8000/api/rev/posts/restore/index",
            },
            {
              method: "POST",
              path: "localhost:8000/api/rev/posts/restore",
            },
          ],
        },
        {
          name: "Report",
          routes: [
            {
              method: "POST",
              path: "localhost:8000/api/rev/add/report/posts",
            },
          ],
        },
        {
          name: "Saved Posts",
          routes: [
            {
              method: "POST",
              path: "localhost:8000/api/rev/saved/post",
            },
            {
              method: "GET",
              path: "localhost:8000/api/rev/show/posts/saved",
            },
            {
              method: "DEL",
              path: "localhost:8000/api/rev/unsaved/posts",
            },
          ],
        },
      ],
    },

    {
      name: "Hard Machine",
      subfolders:[
        {name:"Hard Machine",

      routes: [
        { method: "POST", path: "localhost:8000/api/rev/hard/revive/data" },
        { method: "POST", path: "localhost:8000/api/rev/hard/tourism/data" },
      ],
    }],
    },
    {
      name: "Auth Admin / Owner",
      subfolders: [
        {
          name: "Revive",
          routes: [
            {
              method: "GET",
              path: "localhost:8000/api/rev/revive/data",
            },
            {
              method: "GET",
              path: "localhost:8000/api/rev/revive/data/date/revive",
            },
          ],
        },
        {
          name: "Tourism",
          routes: [
            { method: "GET", path: "localhost:8000/api/rev/tourism/data" },
            {
              method: "GET",
              path: "localhost:8000/api/rev/tourism/data/date/machines",
            },
          ],
        },
        {
          name: "TO/RV",
          routes: [
            {
              method: "GET",
              path: "localhost:8000/api/rev/revive/machine/data",
            },
            {
              method: "GET",
              path: "localhost:8000/api/rev/posts/show/10",
            },
          ],
        },
        {
          name: "Barter",
          routes: [
            {
              method: "GET",
              path: "localhost:8000/api/rev/BarterProcess/autocolmpletesearch",
            },
            {
              method: "GET",
              path: "localhost:8000/api/rev/BarterProcess/mine/show",
            },
            {
              method: "GET",
              path: "localhost:8000/api/rev/BarterProcess/restoreindex/barter",
            },
            {
              method: "POST",
              path: "localhost:8000/api/rev/BarterProcess/restore/barter",
            },
          ],
        },
      ],
    },
    {
      name: "Mail",
      subfolders:[{
        name:"Mail",

      routes: [
        { method: "GET", path: "http://127.0.0.1:8000/api/rev/send/mail" },
        {
          method: "GET",
          path: "http://127.0.0.1:8000/api/rev/send/mail/error/machine",
        },
        {
          method: "POST",
          path: "http://127.0.0.1:8000/api/rev/send/mail/users",
        },
      ],
    }],
    },
    {
      name: "SMS",
      subfolders:[{
        name:"SMS",

      routes: [
        { method: "GET", path: "http://127.0.0.1:8000/api/rev/send/sms" },
      ],
    }],
    },
  ];

  const [selectedFolder, setSelectedFolder] = useState(null);
  const [selectedSubfolder, setSelectedSubfolder] = useState(null);
  const [previousState, setPreviousState] = useState(null);

  const handleFolderClick = (folderName) => {
    setPreviousState({ folder: selectedFolder, subfolder: selectedSubfolder });
    setSelectedFolder(folderName);
    setSelectedSubfolder(null);
  };

  const handleSubfolderClick = (subfolderName) => {
    setPreviousState({ folder: selectedFolder, subfolder: selectedSubfolder });
    setSelectedSubfolder(subfolderName);
  };

  const handleBackClick = () => {
    if (selectedSubfolder) {
      setSelectedSubfolder(null);
    } else {
      setSelectedFolder(null);
    }
    setPreviousState(null);
  };

  return (
    <footer className="footer section bd-container">
      <div className="footer__container">
        <div className="footer__content">
          <h2 className="footer__logo">Resources</h2>
          <span className="footer__description">
            There are {folderData.length} main resources in Revive API Store
          </span>

        
          <button onClick={handleBackClick} class="round">
            &#8249;
          </button>
        </div>
        <div className="footer__content">
          {selectedFolder ? (
            <>
              <ul className="list">
                {folderData
                  .find((folder) => folder.name === selectedFolder)
                  ?.subfolders?.map((subfolder, subIndex) => (
                    <li key={subIndex}>
                      <a
                        href="javascript:void(0)"
                        className="footer__link"
                        onClick={() => handleSubfolderClick(subfolder.name)}
                      >
                        {subfolder.name}
                      </a>
                    </li>
                  ))}
              </ul>
            </>
          ) : (
            <ul className="list">
              {folderData.map((folder, index) => (
                <li key={index}>
                  <a
                    href="javascript:void(0)"
                    className={`footer__link ${
                      selectedFolder === folder.name ? "active" : ""
                    }`}
                    onClick={() => handleFolderClick(folder.name)}
                  >
                    {folder.name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
        <hr />
        <div className="footer__content">
          <h2 className="footer__logo">Routes</h2>
          <span className="footer__description">
            All HTTP methods are supported
          </span>
          <ul className="list">
            {selectedSubfolder &&
              folderData
                .flatMap((folder) => folder.subfolders || [])
                .find((subfolder) => subfolder.name === selectedSubfolder)
                ?.routes?.map((route, routeIndex) => (
                  <li key={routeIndex} className="footer__link">
                    <span>{route.method}</span>
                    <a href={route.path} className="footer__link">
                      {route.path}
                    </a>
                  </li>
                ))}
            {selectedFolder &&
              !selectedSubfolder &&
              folderData
                .find((folder) => folder.name === selectedFolder)
                ?.routes?.map((route, routeIndex) => (
                  <li key={routeIndex} className="footer__link">
                    <span>{route.method}</span>
                    <a href={route.path} className="footer__link">
                      {route.path}
                    </a>
                  </li>
                ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Resources;
