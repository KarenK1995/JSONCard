import { UserOutlined } from "@ant-design/icons";

export const getRouter = (user) => {
  const adminRouter = [
    {
      label: "Admin",
      type: "group",
      key: "admin",
      mode: "vertical",
      icon: <UserOutlined />,
      children: [{ label: "users", key: "users" }, { type: "divider" }],
    },
  ];

  const loginRoute = {
    label: "Login",
    key: "login",
  };

  const logoutRoute = {
    label: "Logout",
    key: "logout",
  };
  const style = { textTransform: "uppercase", fontWeight: "600" };

  const languages = [
    {
      label: "A1",
      key: "A1",
      style: { textTransform: "uppercase" },
      children: [
        { label: "de", key: "A1/de", style },
        { label: "ua", key: "A1/ua", style },
        { label: "ru", key: "A1/ru", style },
        { label: "en", key: "A1/en", style },
        { label: "hy", key: "A1/hy", style },
        { label: "es", key: "A1/es", style },
        { label: "ar", key: "A1/ar", style },
        { label: "tr", key: "A1/tr", style },
        { label: "fr", key: "A1/fr", style },
        { label: "hr", key: "A1/hr", style },
        { label: "it", key: "A1/it", style },
        { label: "ja", key: "A1/ja", style },
        { label: "ko", key: "A1/ko", style },
        { label: "nl", key: "A1/nl", style },
        { label: "pt", key: "A1/pt", style },
        { label: "ro", key: "A1/ro", style },
        { label: "sv", key: "A1/sv", style },
        { label: "zh", key: "A1/zh", style },
        { label: "fa", key: "A1/fa", style },
      ],
    },
    {
      label: "A2",
      key: "A2",
      children: [
        { label: "de", key: "A2/de", style },
        { label: "ua", key: "A2/ua", style },
        { label: "ru", key: "A2/ru", style },
        { label: "en", key: "A2/en", style },
        { label: "hy", key: "A2/hy", style },
        { label: "es", key: "A2/es", style },
        { label: "ar", key: "A2/ar", style },
        { label: "tr", key: "A2/tr", style },
        { label: "fr", key: "A2/fr", style },
        { label: "hr", key: "A2/hr", style },
        { label: "it", key: "A2/it", style },
        { label: "ja", key: "A2/ja", style },
        { label: "ko", key: "A2/ko", style },
        { label: "nl", key: "A2/nl", style },
        { label: "pt", key: "A2/pt", style },
        { label: "ro", key: "A2/ro", style },
        { label: "sv", key: "A2/sv", style },
        { label: "zh", key: "A2/zh", style },
      ],
    },
    {
      label: "B1",
      key: "B1",
      children: [
        { label: "de", key: "B1/de", style },
        { label: "ua", key: "B1/ua", style },
        { label: "ru", key: "B1/ru", style },
        { label: "en", key: "B1/en", style },
        { label: "hy", key: "B1/hy", style },
        { label: "es", key: "B1/es", style },
        { label: "ar", key: "B1/ar", style },
        { label: "tr", key: "B1/tr", style },
        { label: "fr", key: "B1/fr", style },
        { label: "hr", key: "B1/hr", style },
        { label: "it", key: "B1/it", style },
        { label: "ja", key: "B1/ja", style },
        { label: "ko", key: "B1/ko", style },
        { label: "nl", key: "B1/nl", style },
        { label: "pt", key: "B1/pt", style },
        { label: "ro", key: "B1/ro", style },
        { label: "sv", key: "B1/sv", style },
        { label: "zh", key: "B1/zh", style },
      ],
    },
    {
      label: "B2",
      key: "B2",
      children: [
        { label: "de", key: "B2/de", style },
        { label: "ua", key: "B2/ua", style },
        { label: "ru", key: "B2/ru", style },
        { label: "en", key: "B2/en", style },
        { label: "hy", key: "B2/hy", style },
        { label: "es", key: "B2/es", style },
        { label: "ar", key: "B2/ar", style },
        { label: "tr", key: "B2/tr", style },
        { label: "fr", key: "B2/fr", style },
        { label: "hr", key: "B2/hr", style },
        { label: "it", key: "B2/it", style },
        { label: "ja", key: "B2/ja", style },
        { label: "ko", key: "B2/ko", style },
        { label: "nl", key: "B2/nl", style },
        { label: "pt", key: "B2/pt", style },
        { label: "ro", key: "B2/ro", style },
        { label: "sv", key: "B2/sv", style },
        { label: "zh", key: "B2/zh", style },
      ],
    },

    {
      label: "C1",
      key: "C1",
      children: [
        { label: "de", key: "C1/de", style },
        { label: "ua", key: "C1/ua", style },
        { label: "ru", key: "C1/ru", style },
        { label: "en", key: "C1/en", style },
        { label: "hy", key: "C1/hy", style },
        { label: "es", key: "C1/es", style },
        { label: "ar", key: "C1/ar", style },
        { label: "tr", key: "C1/tr", style },
        { label: "fr", key: "C1/fr", style },
        { label: "hr", key: "C1/hr", style },
        { label: "it", key: "C1/it", style },
        { label: "ja", key: "C1/ja", style },
        { label: "ko", key: "C1/ko", style },
        { label: "nl", key: "C1/nl", style },
        { label: "pt", key: "C1/pt", style },
        { label: "ro", key: "C1/ro", style },
        { label: "sv", key: "C1/sv", style },
        { label: "zh", key: "C1/zh", style },
      ],
    },
  ];

  let router = [];
  if (user?.rol) {
    router.push(logoutRoute);
  } else {
    router.push(loginRoute);
  }

  if (user?.rol === "admin") {
    router = [...router, ...adminRouter, ...languages];
  } else if (!user) {
    router = [];
  }

  if (user && user.rol !== "admin" && user.rol.length > 0) {
    user.rol.forEach((lang) => {
      const currentRout = router.find((rout) => rout.key === lang.laval);
      if (!currentRout) {
        router.push({
          label: lang.laval,
          key: lang.laval,
          children: [
            { label: lang.language, key: `${lang.laval}/${lang.language}` },
          ],
        });
      } else {
        currentRout.children.push({
          label: lang.language,
          key: `${lang.laval}/${lang.language}`,
        });
      }
    });
  }
  return router;
};
