import { delay } from "./utils";

export interface Reports {
  topDomains: Array<{
    domain: string;
    count: number;
  }>;
  chart: {
    removedFromSourceAndGoogle: number;
    removedFromGoogleImages: number;
    removedFromGoogleWeb: number;
    manuallySubmitted: number;
    totalRemoval: number;
  };
  general: {
    views: number;
    media: number;
    value: number;
  };
  joinDate: string;
}

const reportsMock = {
  topDomains: [
    {
      domain: "www.checkmate.com",
      count: 154,
    },
    {
      domain: "test.ai",
      count: 126,
    },
    {
      domain: "speed.io",
      count: 106,
    },
  ],
  chart: {
    removedFromSourceAndGoogle: 21333,
    removedFromGoogleImages: 1,
    removedFromGoogleWeb: 21213,
    manuallySubmitted: 1500,
    totalRemoval: 21334,
  },
  general: {
    views: 14931000,
    media: 36261,
    value: 63457,
  },
  joinDate: "2024-05-21T14:43:47.013Z",
  models: [
    {
      id: "db8bc051-187d-4b84-9bc0-5961e2711f8a",
      username: "Bruce Davis",
      firstName: "Bruce",
      lastName: "Davis",
      title: null,
      manager: null,
      companyId: "d9b51fc1-b563-4fae-80a6-f21bb5e1e2ab",
      company: {
        id: "d9b51fc1-b563-4fae-80a6-f21bb5e1e2ab",
        name: "Bruce Davis",
        type: "contentCreator",
        paymentStatus: "active",
        subscriptionPlan: "vip",
        models: [],
        logo: null,
        assetType: "models",
        lastScanningDate: null,
        transparencyReportLink: null,
      },
      photoUrl: null,
      isRemoved: false,
      socialMedia: [
        {
          id: "98cd80fd-31d8-452d-83e2-014aa893a71c",
          title: "rtgtrgrtgtrg",
          nickname: "rtgtrgrtgtrg",
          redirectLink: "https://chaturbate.com/rtgtrgrtgtrg",
          type: "chaturbate",
          accountType: "subscription",
        },
        {
          id: "a0642b12-d7f5-47b1-9c9d-308b2864224d",
          title: "egtrgtg",
          nickname: "egtrgtg",
          redirectLink: "https://fansly.com/egtrgtg",
          type: "fansly",
          accountType: "subscription",
        },
        {
          id: "52162147-50cf-4338-ba6f-935fcf52df81",
          title: "myaccountinsta",
          nickname: "myaccountinsta",
          redirectLink: "https://instagram.com/jojo123",
          type: "instagram",
          accountType: "nonSubscription",
        },
        {
          id: "183f169c-b995-43cf-b78f-6c5b7303093c",
          title: "weffwrvarv",
          nickname: "weffwrvarv",
          redirectLink: "https://twitter.com/weffwrvarv",
          type: "twitter",
          accountType: "nonSubscription",
        },
        {
          id: "26e4fe35-dca8-4375-85a5-6b33437487d1",
          title: "btbrtbrtbr",
          nickname: "btbrtbrtbr",
          redirectLink: "https://fanvue.com/btbrtbrtbr",
          type: "fanvue",
          accountType: "subscription",
        },
      ],
      whitelistDomains: [],
      transparencyReportLink: null,
      properties: {
        socialMedia: [
          {
            id: "98cd80fd-31d8-452d-83e2-014aa893a71c",
            title: "rtgtrgrtgtrg",
            nickname: "rtgtrgrtgtrg",
            redirectLink: "https://chaturbate.com/rtgtrgrtgtrg",
            type: "chaturbate",
            accountType: "subscription",
          },
          {
            id: "a0642b12-d7f5-47b1-9c9d-308b2864224d",
            title: "egtrgtg",
            nickname: "egtrgtg",
            redirectLink: "https://fansly.com/egtrgtg",
            type: "fansly",
            accountType: "subscription",
          },
          {
            id: "52162147-50cf-4338-ba6f-935fcf52df81",
            title: "myaccountinsta",
            nickname: "myaccountinsta",
            redirectLink: "https://instagram.com/jojo123",
            type: "instagram",
            accountType: "nonSubscription",
          },
          {
            id: "183f169c-b995-43cf-b78f-6c5b7303093c",
            title: "weffwrvarv",
            nickname: "weffwrvarv",
            redirectLink: "https://twitter.com/weffwrvarv",
            type: "twitter",
            accountType: "nonSubscription",
          },
          {
            id: "26e4fe35-dca8-4375-85a5-6b33437487d1",
            title: "btbrtbrtbr",
            nickname: "btbrtbrtbr",
            redirectLink: "https://fanvue.com/btbrtbrtbr",
            type: "fanvue",
            accountType: "subscription",
          },
        ],
      },
      joinDate: "2024-05-21T14:43:47.057Z",
      plan: null,
    },
  ],
  assetsTotalCount: 1,
};

export const getReportsApi = async (): Promise<Partial<Reports>> => {
  await delay();
  return new Promise((resolve) => {
    resolve(reportsMock);
  });
};
