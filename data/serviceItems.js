const serviceItems = [
    {
        id:0,
        featuredID:1,
        type:"speaker",
        subtype:"opening_keynote",
        number:"01",
        featured:"true",
        featuredHREF:"/speaker",
        featuredURL:"/ conference speaker",
        featuredHeader:"opening keynote",
        featuredButtonLabel:"See All Offerings",
        date:"2021-08-10",
        title: "How to improve patient satisfaction metrics by making the first patient YOU!",
        description: "In this keynote, Dr. Sundar addresses how self care can create a positive impact on patient care. She discusses how spending time to take care of your needs impacts all of your interactions throughout the day.",
        src: '/image/services-01.jpg',
        isButtonActive:'false',
        buttonText:'Download Abstract',
        buttonHref:'',
    },
    {
        id:1,
        type:"speaker",
        subtype:"opening_keynote",
        number:"02",
        featured:"false",
        header:"Featured opening keynote",
        title: "Beware of Presenteeism in Your Life - Be More Mindful and Engaged",
        description: "In the workplace just like in life, presenteeism isn’t very obvious.  Many of us are guilty of presenteeism in our own life. Being more mindful and engaged in your daily interactions will increase the joy in your life. In this keynote, Dr. Sundar will inspire you to live each day in a way that brings you satisfaction.",
        src: '/image/services-04.jpg',
        isButtonActive:'false',
        buttonText:'Download Abstract',
        buttonHref:'',
    },
    {
        id:2,
        type:"speaker",
        subtype:"breakout_session",
        number:"01",
        featured:"false",
        header:"Featured opening keynote",
        title: "The Self Care Instruction guide",
        description: "Self care is a popular buzz phrase right now, but self care is more than a bubble bath and some time with your friends.  In this breakout session, Dr. Sundar will show you how to take your self care to a whole new level so that you feel invigorated and energized each day.",
        src: '/image/services-08.jpg',
        isButtonActive:'false',
        buttonText:'Download Abstract',
        buttonHref:'',
    },
    {
        id:3,
        type:"speaker",
        subtype:"breakout_session",
        number:"02",
        featured:"false",
        header:"Featured opening keynote",
        title: "The Juggling Act: Entrepreneurship, Medicine and Family",
        description: "A career in medicine is challenging enough but add entrepreneurship and a family to the equation and life feels like a juggling act that can spiral out of control at a moment's notice. Learn the key elements in gracefully and successfully juggling these aspects of your life.",
        src: '/image/services-07.jpg',
        isButtonActive:'false',
        buttonText:'Download Abstract',
        buttonHref:'',
    },
/*    {
        id:4,
        type:"speaker",
        subtype:"breakout_session",
        number:"03",
        featured:"false",
        header:"Featured opening keynote",
        title: "How to Communicate with Authority",
        description: "Women are often thought of as exceptional communicators who, unfortunately, lack authority. This keynote points out strengths in female communication styles and shows women how to increase their use of authority to benefit themselves and their organizations.",
        src: '/image/services-05.jpg',
        buttonText:'Download Biography',
        buttonHref:'/pdf/drsundar-introduction.pdf',
    },*/
{
        id:4,
        type:"speaker",
        subtype:"breakout_session",
        number:"03",
        featured:"false",
        header:"Featured opening keynote",
        title: "Compassionate Authority",
        description: "All leaders find themselves in situations where they must use authority with compassion when dealing with employees and organizational decisions. Dr. Sundar addresses this issue with insights for women in leadership.",
        src: '/image/services-09.jpg',
    isButtonActive:'false',
        buttonText:'Download Abstract',
        buttonHref:'',
    },
/*    {
        id:6,
        type:"speaker",
        subtype:"breakout_session",
        number:"05",
        featured:"false",
        header:"Featured opening keynote",
        title: "Nonverbal ways to Communicate Confidence",
        description: "Effective communication includes more than just the words of the message. This keynote demonstrates the importance of nonverbal communication techniques that inspire confidence.",
        src: '/image/AdobeStock_295212734_Preview.jpeg',
    },*/
/*    {
        id:7,
        type:"speaker",
        subtype:"breakout_session",
        number:"06",
        featured:"false",
        header:"Featured opening keynote",
        title: "Boundary Setting for Women in Medicine",
        description: "As women in medicine, we may have learned to be great at creating boundaries but we are equally great at repeatedly ignoring them. From this keynote, women will appreciate how setting and keeping boundaries is of paramount importance in life satisfaction.",
        src: '/image/AdobeStock_417474375_Preview.jpeg',
    },*/
    {
        id:8,
        type:"speaker",
        subtype:"closing_keynote",
        number:"01",
        featured:"false",
        featuredHREF:"/speaker",
        featuredURL:"/ conference speaker",
        featuredHeader:"Featured Closing Keynote",
        featuredButtonLabel:"See All Offerings",
        header:"Featured opening keynote",
        title: "What to know before you say “I DO” to Medicine",
        description: "There are a few things everyone should know before saying “I DO” to medicine.  Because most of us will stay in a medical career longer than our marriages, it is important to make the decision with as much knowledge as possible. ",
        src: '/image/services-06.jpg',
        isButtonActive:'false',
        buttonText:'Download Abstract',
        buttonHref:'',
    },
/*    {
        id:9,
        type:"speaker",
        subtype:"closing_keynote",
        number:"02",
        featured:"false",
        header:"Featured opening keynote",
        title: "Life is a Journey: No Decision is forever",
        description: "We are often faced with shame if we want to change our minds about something. Especially when it comes to our career.  As human beings we need to understand that we change as life changes.  Not all decisions were meant to last a lifetime.",
        src: '/image/graphic-lifeIsAJourney.png',
                buttonActive:'no',
        buttonText:'Download Abstract',
        buttonHref:'',
    },*/
    {
        id:10,
        featuredID:12,
        type:"workshop",
        subtype:"in-person",
        number:"01",
        featured:"true",
        featuredHREF:"/workshops",
        featuredURL:"/ workshops",
        featuredHeader:"workshop",
        featuredButtonLabel:"See All Workshops",
        date:"2021-08-10",
        title: "Women in Medicine: Reclaiming Career Satisfaction and Life Balance Workshop",
        description: "In this 90 minute workshop Dr. Sundar will take the audience on a journey to determine what career satisfaction looks like for each participant and the dynamic role this plays in other aspects of their lives.",
        src: '/image/services-02.jpg',
        isButtonActive:'true',
        buttonText:'Download Abstract',
        buttonHref:'/pdf/workshop01-abstract.pdf',
    },
    {
        id:11,
        type:"workshop",
        subtype:"virtual",
        number:"01",
        featured:"false",
        featuredHREF:"/workshops",
        featuredURL:"/ workshops",
        featuredHeader:"Featured workshop",
        featuredButtonLabel:"See All Workshops",
        date:"2021-08-10",
        title: "Women in Medicine: Reclaiming Career Satisfaction and Life Balance Workshop",
        description: "In this 90 minute workshop Dr. Sundar will take the audience on a journey to determine what career satisfaction looks like for each participant and the dynamic role this plays in other aspects of their lives.",
        src: '/image/services-02.jpg',
        isButtonActive:'true',
        buttonText:'Download Abstract',
        buttonHref:'/pdf/workshop01-abstract.pdf',
    },
/*    {
        id:12,
        featuredID:0,
        type:"speaker",
        subtype:"opening_keynote",
        number:"03",
        featured:"false",
        featuredHREF:"/speaker",
        featuredURL:"/conference speaker",
        featuredHeader:"Featured opening keynote",
        date:"2021-08-10",
        title: "When the Healer Faces a Medical Illness",
        description: "Women in medicine may have to face an illness during their career.  This journey is often different for us because we are used to being the healer.  These times can be challenging and each journey is unique.  Dr Sundar will inspire women who face personal health problems with her own experience as a cancer survivor.",
        src: '/image/AdobeStock_362060722_Preview.jpeg',
                buttonActive:'no',
        buttonText:'Download Abstract',
        buttonHref:'',
    },*/
    {
        id:13,
        featuredID:12,
        type:"workshop",
        subtype:"in-person",
        number:"02",
        featured:"false",
        featuredHREF:"/workshops",
        featuredURL:"/ workshops",
        featuredHeader:"Featured workshop",
        featuredButtonLabel:"See All Workshops",
        date:"2021-08-10",
        title: "Nonverbal ways to Communicate Confidence",
        description: "Whether you have a great idea to improve patient care, need time off or want a raise, you must learn to communicate with confidence.  In this 60 minute workshop, Dr. Sundar will take the audience through the key ways to non-verbally communicate confidence.  Workshop attendees will also deal with real life scenarios and have the opportunity to practice their newly learned skills to apply in the workplace.",
        src: '/image/services-03.jpg',
        isButtonActive:'false',
        buttonText:'Download Abstract',
        buttonHref:'/pdf/workshop01-abstract.pdf',
    },
    {
        id:14,
        featuredID:11,
        type:"about",
        number:"02",
        featured:"true",
        featuredHREF:"/about",
        featuredURL:"/ about",
        featuredButtonLabel:"Continue Reading",
        featuredHeader:"About",
        date:"2021-08-10",
        title: "Her passion is to see women in medicine find successes of their own with clarity, authenticity and courage.",
        description: "Dr. Sundar is passionate about empowering women, specifically women in medicine, to live their most authentic lives. Her goal is to help women in medicine deal with the ever changing landscape of medicine with clarity. Clarity to embrace their gifts, clarity to use their voices authentically and clarity to make changes as necessary. Empowering all women to live authentic lives is at the heart of Dr. Sundar&apos;s own view of personal success. Her passion is to see women in medicine, in particular, find successes of their own with clarity, authenticity and courage.",
        src: '/image/about-02.jpg',
        isButtonActive:'false',
        buttonText:'Download Abstract',
        buttonHref:'/pdf/workshop01-abstract.pdf',
    },
    {
        id:15,
        featuredID:2,
        type:"media",
        number:"01",
        featured:"true",
        featuredOnPage:"true",
        featuredHREF:"/in-the-media",
        featuredURL:"/ In The Media",
        featuredButtonLabel:"See All Media",
        featuredHeader:"In The Media",
        date:"2017-12-05",
        title: "Doctor Google",
        description: "Do you reach for the nearest Google search when you aren't feeling well? Watch Dr. Sundar's TV appearance where she discusses \"Doctor Google\" and the advantages and disadvantages of a self-diagnosis.",
        src: '/image/media-01.jpg',
        isButtonActive:'true',
        buttonText:'Watch Video',
        buttonHref:'https://youtu.be/S08zfmi9yIk',
    },
    {
        id:16,
        featuredID:1,
        type:"media",
        number:"02",
        featured:"false",
        featuredOnPage:"true",
        featuredHREF:"/in-the-media",
        featuredURL:"/ In The Media",
        featuredButtonLabel:"See All Media",
        featuredHeader:"In The Media",
        date:"2017-01-12",
        title: "What Skincare products should you ditch?",
        description: "Ever wonder what skincare products to ditch? The biggest thing? SOAP!!! Check out our TV appearance for more info!",
        src: '/image/media-02.jpg',
        isButtonActive:'true',
        buttonText:'Watch Video',
        buttonHref:'https://youtu.be/O20jLxjqGhY',
    },
];

export default serviceItems