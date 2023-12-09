export default {
    base: "/instream-docs/",
    siteTitle: "In-Stream",
    title: "In-Stream",
    themeConfig: {
        sidebar: [
            {
                text: "How To Use",
                collapsed: false,
                items: [
                    {
                        text: "용어 정의",
                        link: "docs/terminology-organization",
                    },
                    {
                        text: "요금 정책",
                        link: "docs/billing-organization",
                    },
                    {
                        text: "SDK Docs",
                        link: "docs/sdk-docs",
                    },
                    {
                        text: "API Docs",
                        collapsed: true,
                        items: [
                            {
                                text: "Preapare to use API",
                                link: "docs/api-docs/prepare-to-use-api",
                            },
                            {
                                text: "Application",
                                collapsed: true,
                                items: [
                                    {
                                        text: "개요",
                                        link: "docs/api-docs/application/overview",
                                    },
                                    {
                                        text: "API 상세정보",
                                        link: "docs/api-docs/application/api",
                                    },
                                ],
                            },
                            {
                                text: "Chat",
                                collapsed: true,
                                items: [
                                    {
                                        text: "개요",
                                        link: "docs/api-docs/chat/overview",
                                    },
                                    {
                                        text: "API 상세정보",
                                        link: "docs/api-docs/chat/api",
                                    },
                                ],
                            },
                            {
                                text: "Participant",
                                collapsed: true,
                                items: [
                                    {
                                        text: "개요",
                                        link: "docs/api-docs/participant/overview",
                                    },
                                    {
                                        text: "API 상세정보",
                                        link: "docs/api-docs/participant/api",
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        text: "OBS Guide",
                        collapsed: true,
                        items: [
                            {
                                text: "Prepare to OBS",
                                link: "docs/obs-guide/prepare-to-obs",
                            },
                            {
                                text: "Setting",
                                collapsed: true,
                                items: [
                                    {
                                        text: "Mac",
                                        link: "docs/obs-guide/setting/mac",
                                    },
                                    {
                                        text: "Window",
                                        link: "",
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
};
