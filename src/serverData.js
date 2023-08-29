export const serverData = {
  userDetails: [
    {
      Id: 1,
      Name: "Sandeep",
      EmailId: "sandeep01@",
      CreatedAt: "1 Jan 2023 10:00 A.M",
      ChatIdCollection: [10001, 10002, 10003],
    },
    {
      Id: 2,
      Name: "Anup",
      EmailId: "Anup01@",
      CreatedAt: "2 Jan 2023 12:00 A.M",
      ChatIdCollection: [10001, 20002, 20003],
    },
    {
      Id: 3,
      Name: "Rahul",
      EmailId: "Rahul01@",
      CreatedAt: "3 Jan 2023 01:00 A.M",
      ChatIdCollection: [10002, 20002],
    },
    {
      Id: 4,
      Name: "Aman",
      EmailId: "Aman01@",
      CreatedAt: "4 Jan 2023 02:00 A.M",
      ChatIdCollection: [10003, 20003],
    },
    {
      Id: 5,
      Name: "kajal",
      EmailId: "kajal01@",
      CreatedAt: "5 Aug 2023 02:00 A.M",
      ChatIdCollection: [],
    },
    {
      Id: 6,
      Name: "Renuka",
      EmailId: "Renuka01@",
      CreatedAt: "16 feb 2023 02:00 A.M",
      ChatIdCollection: [],
    },
    {
      Id: 7,
      Name: "Sonam",
      EmailId: "Sonam01@",
      CreatedAt: "20 Mar 2023 02:00 A.M",
      ChatIdCollection: [],
    },
    {
      Id: 8,
      Name: "Rinku",
      EmailId: "Rinku01@",
      CreatedAt: "2 Apr 2023 02:00 A.M",
      ChatIdCollection: [],
    },
    {
      Id: 9,
      Name: "Neha",
      EmailId: "Neha01@",
      CreatedAt: "10 Apr 2023 02:00 A.M",
      ChatIdCollection: [],
    },
  ],
  ChatDetails: [
    {
      ChatId: 10001,
      CreatedAt: "4 Jan 2023 02:00 A.M",
      Users: [
        {
          id: 1,
          chatUser: "Sandeep",
        },
        {
          id: 2,
          chatUser: "Anup",
        },
      ],
      Chats: [
        {
          IndividualChatId: 100001,
          ChatCreatedById: 2,
          ChatCreatedByUserName: "Anup",
          Content: "ChatId:10001,  IndividualChatId: 100001",
          CreatedAt: "2 Jan 2023 11:00 A.M",
        },
        {
          IndividualChatId: 100002,
          ChatCreatedById: 1,
          ChatCreatedByUserName: "Sandeep",
          Content: "ChatId:10001,  IndividualChatId: 100002",
          CreatedAt: "2 Jan 2023 11:00 A.M",
        },
        {
          IndividualChatId: 100003,
          ChatCreatedById: 2,
          ChatCreatedByUserName: "Anup",
          Content: "ChatId:10001,  IndividualChatId: 100003",
          CreatedAt: "2 Jan 2023 11:00 A.M",
        },
      ],
    },
    {
      ChatId: 10002,
      CreatedAt: "4 Jan 2023 02:00 A.M",
      Users: [
        {
          id: 1,
          chatUser: "Sandeep",
        },
        {
          id: 3,
          chatUser: "Rahul",
        },
      ],
      Chats: [
        {
          IndividualChatId: 100004,
          ChatCreatedById: 3,
          ChatCreatedByUserName: "Rahul",
          Content: "ChatId:10002,  IndividualChatId: 100004",
          CreatedAt: "2 Jan 2023 11:00 A.M",
        },
        {
          IndividualChatId: 100005,
          ChatCreatedById: 3,
          ChatCreatedByUserName: "Rahul",
          Content: "ChatId:10002,  IndividualChatId: 100005",
          CreatedAt: "2 Jan 2023 11:00 A.M",
        },
        {
          IndividualChatId: 100006,
          ChatCreatedById: 1,
          ChatCreatedByUserName: "Sandeep",
          Content: "ChatId:10002,  IndividualChatId: 100006",
          CreatedAt: "2 Jan 2023 11:00 A.M",
        },
      ],
    },
    {
      ChatId: 10003,
      CreatedAt: "4 Jan 2023 02:00 A.M",
      Users: [
        {
          id: 1,
          chatUser: "Sandeep",
        },
        {
          id: 4,
          chatUser: "Aman",
        },
      ],
      Chats: [
        {
          IndividualChatId: 100007,
          ChatCreatedById: 1,
          ChatCreatedByUserName: "Sandeep",
          Content: "ChatId:10003,  IndividualChatId: 100007",
          CreatedAt: "2 Jan 2023 11:00 A.M",
        },
        {
          IndividualChatId: 100008,
          ChatCreatedById: 4,
          ChatCreatedByUserName: "Aman",
          Content: "ChatId:10003,  IndividualChatId: 100008",
          CreatedAt: "2 Jan 2023 11:00 A.M",
        },
        {
          IndividualChatId: 100009,
          ChatCreatedById: 4,
          ChatCreatedByUserName: "Aman",
          Content: "ChatId:10003,  IndividualChatId: 100009",
          CreatedAt: "2 Jan 2023 11:00 A.M",
        },
      ],
    },

    {
      ChatId: 20002,
      CreatedAt: "4 Jan 2023 02:00 A.M",
      Users: [
        {
          id: 2,
          chatUser: "Anup",
        },
        {
          id: 3,
          chatUser: "Rahul",
        },
      ],
      Chats: [
        {
          IndividualChatId: 200004,
          ChatCreatedById: 3,
          ChatCreatedByUserName: "Rahul",
          Content: "ChatId:20002,  IndividualChatId: 200004",
          CreatedAt: "2 Jan 2023 11:00 A.M",
        },
        {
          IndividualChatId: 200005,
          ChatCreatedById: 3,
          ChatCreatedByUserName: "Rahul",
          Content: "ChatId:20002,  IndividualChatId: 200005",
          CreatedAt: "2 Jan 2023 11:20 A.M",
        },
        {
          IndividualChatId: 200006,
          ChatCreatedById: 2,
          ChatCreatedByUserName: "Anup",
          Content: "ChatId:20002,  IndividualChatId: 200006",
          CreatedAt: "2 Jan 2023 11:00 A.M",
        },
      ],
    },
    {
      ChatId: 20003,
      CreatedAt: "4 Jan 2023 02:00 A.M",
      Users: [
        {
          id: 2,
          chatUser: "Anup",
        },
        {
          id: 4,
          chatUser: "Aman",
        },
      ],
      Chats: [
        {
          IndividualChatId: 200007,
          ChatCreatedById: 2,
          ChatCreatedByUserName: "Anup",
          Content: "ChatId:20003,  IndividualChatId: 200007",
          CreatedAt: "2 Jan 2023 11:00 A.M",
        },
        {
          IndividualChatId: 200008,
          ChatCreatedById: 4,
          ChatCreatedByUserName: "Aman",
          Content: "ChatId:20003,  IndividualChatId: 200008",
          CreatedAt: "2 Jan 2023 11:00 A.M",
        },
        {
          IndividualChatId: 200009,
          ChatCreatedById: 2,
          ChatCreatedByUserName: "Anup",
          Content: "ChatId:20003,  IndividualChatId: 200009",
          CreatedAt: "2 Jan 2023 11:00 A.M",
        },
      ],
    },
    {
      ChatId: 30002,
      CreatedAt: "4 Jan 2023 02:00 A.M",
      Users: [
        {
          id: 3,
          chatUser: "Rahul",
        },
        {
          id: 2,
          chatUser: "Anup",
        },
      ],
      Chats: [
        {
          IndividualChatId: 300004,
          ChatCreatedById: 2,
          ChatCreatedByUserName: "Anup",
          Content: "ChatId:30002,  IndividualChatId: 300004",
          CreatedAt: "2 Jan 2023 11:00 A.M",
        },
        {
          IndividualChatId: 300005,
          ChatCreatedById: 3,
          ChatCreatedByUserName: "Rahul",
          Content: "ChatId:30002,  IndividualChatId: 300005",
          CreatedAt: "2 Jan 2023 11:00 A.M",
        },
        {
          IndividualChatId: 300006,
          ChatCreatedById: 2,
          ChatCreatedByUserName: "Anup",
          Content: "ChatId:30002,  IndividualChatId: 300006",
          CreatedAt: "2 Jan 2023 11:00 A.M",
        },
      ],
    },
  ],
};
