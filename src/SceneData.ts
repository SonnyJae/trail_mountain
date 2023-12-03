export interface HitZone {
    x: string;
    y: string;
    goto: number;
}

export interface Scene {
    id: number;
    background_url: string;
    hitzones: HitZone[];
    imageUrl: string;
}

interface SceneData {
    scenes: Scene[];
}

const scenesData: SceneData = {
    scenes: [
        {
            id: 0,
            background_url: "mountain0.png",
            hitzones: [
                { x: "90%", y: "50%", goto: 1 },

            ],
            imageUrl: "https://lh3.googleusercontent.com/pw/ADCreHdLE5MlDDVJDXlSLt-cqZFB8iI9J7qo7Y5jbiNB6dKcxHtfChf1HUdkiR298-ZUV90vXK2SiawvJsmSplBUMx4nwDSQgQK9R2ce1UQVmrJskeCfMEHM87iQaCyDcFFNlHRJuWI_M7Z9_u42a_QSllNT=w2160-h346-s-no-gm?authuser=0",
        },
        {
            id: 1,
            background_url: "mountain1.png",
            hitzones: [
                { x: "10%", y: "50%", goto: 0 },
                { x: "90%", y: "50%", goto: 2 },
                // Define more hit zones as needed
            ],
            imageUrl: "https://lh3.googleusercontent.com/pw/ADCreHdgOg7LGgeFTFUAOWh4v8HRWDc9mvT0WqRsA-wwxyfSogUlU1kwnnkhYNTWH-zx0mHXj_t09UFvWxGzLxrptpOKIwY5mUlYMn8fJyHnYbxA21s2tPIY7SA4_Yz3fmZovLu0xLrgFvOTFWa_UOWQqX-u=w2160-h338-s-no-gm?authuser=0",
        },
        {
            id: 2,
            background_url: "mountain2.png",
            hitzones: [
                { x: "10%", y: "50%", goto: 1 },
                { x: "90%", y: "50%", goto: 3 },
                // Define more hit zones as needed
            ],
            imageUrl: "https://lh3.googleusercontent.com/pw/ADCreHdOispqkSqAtEZjOlFZTnIMcvpFbwCAUzD6ebfLhW2eRPHBCFypPUr-R6K-vrgtrZo50raGtDjx0857qYl3bsEe4U9bLoeYD-fJg5Z7hZn3BX0T9dXUxmGLxYE0_hjxH7737R6bOziD3CxN3bFTqPD7=w2160-h321-s-no-gm?authuser=0",
        },
        {
            id: 3,
            background_url: "mountain3.png",
            hitzones: [
                { x: "10%", y: "50%", goto: 2 },
                { x: "90%", y: "50%", goto: 4 },
                // Define more hit zones as needed
            ],
            imageUrl: "https://lh3.googleusercontent.com/pw/ADCreHfWew_K2SJcK55ZMTJ87e4P7K0aw3XFlf0HWydm22qUB6Df5pBdFJcvKk2lFPkEQaNc_MJsF-KvKdJfWYK0qXitW49MQCCUPRgl5Cf9qNzAcbEDNgFElKSzQ2Fyruf_oD0NE2Om-Ub7jM3TheO7je2M=w958-h142-s-no-gm?authuser=0",
        },
        {
            id: 4,
            background_url: "mountain4.png",
            hitzones: [
                { x: "10%", y: "50%", goto: 3 },
                { x: "90%", y: "50%", goto: 5 },
                // Define more hit zones as needed
            ],
            imageUrl: "https://lh3.googleusercontent.com/pw/ADCreHfhmmGseSr0O7gqMjau_eBE2vr9Cf8m9unkf72oMVsohJUP1JhpXF5YlIwvePQewwbajMomYhHJ5XuJaKYRr2Q0M6WVq_jGRowBn4lNAytVzbKanWsEdZOYoin-Awugg9dLKle3PskoH_Su21yPeRXl=w958-h127-s-no-gm?authuser=0",
        },
        {
            id: 5,
            background_url: "mountain5.png",
            hitzones: [
                { x: "10%", y: "50%", goto: 4 },
                { x: "50%", y: "50%", goto: 6 },
                { x: "90%", y: "50%", goto: 7 },
                // Define more hit zones as needed
            ],
            imageUrl: "https://lh3.googleusercontent.com/pw/ADCreHeAdCNMvLzef-mTtJY0I01kGiOLbkhJn2-mUAgDznXrsuC-EwHB_RsjZfEoMX2sJW7eQEvcaC5sKnYlpF0s_YVYO7noO2YsgmdKRDwF-DYKjMwNC2ina3eGmdZekw7r6tQ_4WIjAO3BszB22_xZ-iHt=w958-h160-s-no-gm?authuser=0",
        },
        {
            id: 6,
            background_url: "mountain6.png",
            hitzones: [
                { x: "10%", y: "50%", goto: 5 },
                // Define more hit zones as needed
            ],
            imageUrl: "https://lh3.googleusercontent.com/pw/ADCreHfORQMJrT8LXU-wF3oNUk3GXlJB6E-GkDVPjxH_Hf8d9C0sACxgWXRZB72REhJP9Gy2oeEp09vax3281y_OteSfGHKKKuGudsdfXdLQOknXRcJu9TuSDpA4kGmlpKi-MsqPkLeMEhn8ijE-KYekNWaW=w958-h153-s-no-gm?authuser=0",
        },
    ],
};

export default scenesData;