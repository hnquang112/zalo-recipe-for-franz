// Zalo recipr integration
module.exports = Franz => {
  getMessages = () => {
    const convList = document.querySelector("#conversationListId");

    const unreadCount = convList
      ? convList.querySelectorAll("i.func-unread").length
      : 0;

    Franz.setBadge(unreadCount);
  };

  Franz.loop(getMessages);

  Franz.onNotify(notification => {
    if (typeof notification.title !== "string") {
      notification.title =
        ((notification.title.props || {}).content || [])[0] || "Zalo";
    }

    return notification;
  });
};
