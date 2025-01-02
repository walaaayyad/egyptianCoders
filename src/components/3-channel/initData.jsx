// Initialize channels (first 12 manually)
  const initialChannels = [
    {
      id: 'UCSNkfKl4cU-55Nm-ovsvOHQ',
      snippet: {
        title: 'Elzero Web School',
        description: "Life Is Short, Start Learning",
        thumbnails: { default: { url: 'https://yt3.ggpht.com/-qCvx3y42iXp9cMNe5Yx3aoR2lL8TFxsrLShyBLuXOE4tY56kt_bPceyvPw95rpUqgKqI8zDBe4=s176-c-k-c0x00ffffff-no-rj' } },
      },
    },
    {
      id: 'UCWX_0VvMxl0_XosvYOZ7O0g',
      snippet: {
        title: 'محمد الدسوقى (Mohamed El Desouki)',
        description: "تعلم علوم الحاسب باللغة العربية - لغات البرمجة و أوراكل - و أدرس مقررات قواعد البيانات الجامعية .",
        thumbnails: { default: { url: 'https://yt3.ggpht.com/ytc/AIdro_ku9zBi6Y8-rZaRo3udRMt8zSvLrL_JAED1mz2S9ELaOA=s176-c-k-c0x00ffffff-no-rj' } },
      },
    },
    {
      id: 'UCveX_0uBOHVHbpV838OGXVA',
      snippet: {
        title: 'Codezilla',
        description: "ان شاء الله تهدف قناة لتعليم البرمجة باللغة العربية، مقدمة اليكم من خبراء مجال التعليم و البرمجة، مجانا، و تناسب جميع الاعمار. تهدف القناة لتمكين شباب الوطن العربي و اعلاء مستواهم التقني البرمجي و ادراجهم في مجال التكنولوجيا حتى يتمكنوا من مواكبة سرعة التطور التكنولوجي بالعالم و نصبح وطن عربي قوي. تمكنك البرمجة من العمل من اي مكان و برواتب ممتازة نظرا لكثرة الطلب في سوق العمل و سرعة نموه.",
        thumbnails: { default: { url: 'https://yt3.ggpht.com/ytc/AIdro_nYbuEqGSXjzmOSI465CIJYU8wilmDifFYUxNR9zWELClg=s176-c-k-c0x00ffffff-no-rj' } },
      },
    },
    {
      id: 'UCvqYqoAu_Yp2v3hOBhi6qiQ',
      snippet: {
        title: 'OctuCode',
        description: "تعلم البرمجة من الصفر حتى الإحتراف بأبسط أسلوب. هدفنا هو تبسيط البرمجة وتوصيلها للمتلقي بأفضل طريقة لتشجيعه على اخذ مسار أفضل في الحياة والإرتقاء بظروفه والاعتماد على نفسه في البحث والتنقيب و توسيع المدارك المعرفية. ستجد على القناة وعلى التطبيق المجاني لدينا العديد من المسارات البرمجية التى تؤهلك لوظائف مختلفة. يمكنك اختيار ما يناسبك من تطوير المواقع, تطوير الألعاب, تطبيقات الموبايل وكذلك علوم البيانات. نسعى لأن نكون مصدر متكامل من شروحات وتطبيقات ومشاريع حقيقية وبإذن الله معا نصل إلى ما يفيد كل المتعلمين. شكرا لثقتك بنا ونسأل الله ان يوفقنا وأن نكون عند حسن ظنك",
        thumbnails: { default: { url: 'https://yt3.ggpht.com/x0189BQA-DnIT3bvF-kekK3M1lVhloq2J1fni4cr0W6YHxjKTFAMjivjVjl3ki50YAwZx2PaUQ=s176-c-k-c0x00ffffff-no-rj' } },
      },
    },
    {
      id: 'UCq_xgufsy1KrGsmJq7mFH-g',
      snippet: {
        title: 'Unique Coderz Academy',
        description: "قنـاة باللـغة العربيـة تهدف لوضع كورسات وتطبيقات فى مجال البرمجة والويب أخوكم : حمزة",
        thumbnails: { default: { url: 'https://yt3.ggpht.com/ytc/AIdro_lhycX8cPW9YpVM4s9vZ4WGDFtG1uK6AM7MAVWdmpUfVPo=s176-c-k-c0x00ffffff-no-rj' } },
      },
    },
    {
      id: 'UCGP8LgaWO1lLfFQUQ2BA7rA',
      snippet: {
        title: 'Yehia Tech يحيى تك',
        description: "🌟 تعلم أساسيات البرمجة 🌟 معلومات مهمة عن الوظائف وسوق العمل 🥸 خبرة 10 سنوات في تخصص تطبيقات الويب",
        thumbnails: { default: { url: 'https://yt3.ggpht.com/oPncxCUdxJTXL4p6Lbmn21AFMTGGPPXbRFSd_zSk_gNE3hpmtoHFLlcKLw-sL7xYg72v_6bGjQ=s176-c-k-c0x00ffffff-no-rj' } },
      },
    },
    {
      id: 'UCJu5uNExWKx1Vrv6Ah5SHfA',
      snippet: {
        title: 'Fathy & Abusrea - فتحي و أبوسريع',
        description: "نحاول تقديم محتوي يساعد المهتمين بمجال البرمجة فى التعرف علي المجال بشكل أفضل ومشاركة الكثير من النصائح والادوات المفيدة لزيادة إنتاجيتك وتسهيل عملك كمبرمج 👨‍💻",
        thumbnails: { default: { url: 'https://yt3.ggpht.com/bxhX3oLcM383vPoAfZj4y1-M-ShZ4d8F088vKOTinceVUHpd71Yl2_GD6io_SYRSBxb127HH=s176-c-k-c0x00ffffff-no-rj' } },
      },
    },
    {
      id: 'UC0bLYqDH3v-4LgqqzJp9e2Q',
      snippet: {
        title: 'Mazen',
        description: 'An Egyptian living in Canada, But he never forgot he is Egyptian. I would like to show you more about living abroad. You will see Canada and the rest of the world.Instagram link : https://www.instagram.com/egyptianmeetsworld/',
        thumbnails: { default: { url: 'https://yt3.ggpht.com/1tjYoDFm2vAIfWBnBVOsrhVZ3hLJ8D_FNX57qbBjOEhKI8mxuwoYFqKFOKRwCEq4dWr-P7Fx=s176-c-k-c0x00ffffff-no-rj'} },
      },
    },
    {
      id: 'UC4Y8dVfo_-aydzENDmE7wTw',
      snippet: {
        title: 'Ali Shahin',
        description: "المهندس علي شاهين -تخرج من كلية حاسبات و معلومات جامعة حلوان 2010 -هو أحد أكبر Youtubers في مجال البرمجة. -عمل في أكثر من شركة برمجة منها المتوسط و العالمي. -قام بتنفيذ العديد من المشاريع على مستوى الوطن العربي في مجالات مثل : 1-نظم التعليم الإلكتروني. 2-نظم إدارة المدارس المتطورة. 3-نظم إدارة الشركات ERP System. 4-نظم إدارة نقاط البيع و التي تعمل في المحلات الكبرى مثل : لابوار و جاد. 5-نظم إدارة الإنتاج في المصانع. -كما برمج المهندس علي شاهين العديد من تطبيقات الهواتف الذكية بتقنيات مختلفة فكان له خبرة في مجالات مختلفة مثل : مجال الويب و الموبيل و الديسك توب. -عمل كقائد فريق في أكثر من شركة لأكثر من 3 سنوات ثم تطور فأصبح يقدم الاستشارات التقنية للكثير من الشركات في مصر و الوطن العربي. -ساهم في تعيين العديد من الموظفين و تنظيم فرق عمل على مستوى عالي. -قرر بعد ذلك ترك المسار المهني و اتجه لمسار التجارة و العمل الحر و أسس شركته الخاصة لصناعة البرامج المتطورة -لديه موقعه الخاص يقدم من خلاله الكورسات التي تؤهلك لسوق العمل. -استفاد من دوراته أكثر من عشرين الف طالبا.",
        thumbnails: { default: { url: 'https://yt3.ggpht.com/57CP2C8YLfs4WVdA3qMjjtYoXGXH0SMlh9zCY9v4u-mNu67P3J6_n144kp02VMCHE7hZZc8icw=s176-c-k-c0x00ffffff-no-rj' } },
      },
    },
    {
      id: 'UC5COvx1Z8fnfvVkafqL_UZg',
      snippet: {
        title: 'اتعلم ببساطة',
        description: "متقلقش من اى حاجة For business inquiries ONLY please use this Email contact@learrnsimply.com",
        thumbnails: { default: { url: 'https://yt3.ggpht.com/vA_oygdd-yDyj239D8hM-QZns-mUzX1_nNmeoU30jEwPPuWA70xs7qDsfOczTsLgOV4afg_lSQ=s176-c-k-c0x00ffffff-no-rj' } },
      },
    },
    {
      id: 'UCbQh1yxBPVhyjB-G_blFFEQ',
      snippet: {
        title: 'Abdelrahman Gamal',
        description: "الهدف الأول و الأوحد من انشاء تلك القناة هو الارتقاء بالمجتمع العربي مهم جداً عشان المجتمع يتقدم ان كل واحد يبدأ بنفسه و انا قررت أبدأ بنفسي و اعمل كورسات مجانية لوجه الله لعل حد يستفاد",
        thumbnails: { default: { url: 'https://yt3.ggpht.com/ytc/AIdro_l5AYO9yPcxvzu3zybDvEIRc2n39ZqEfvz0eS_II0iPPVo=s176-c-k-c0x00ffffff-no-rj' } },
      },
    },
    {
      id: 'UCnGblT_CyMwswTIH9QmJ3YQ',
      snippet: {
        title: 'غريب الشيخ || Ghareeb Elshaikh',
        description: 'مبرمج و صانع محتوى مصري شغوف بنشر المعرفة التقنية باللغة العربية. أساعد المبتدئين في تعلم أساسيات البرمجة من خلال دورات تعليمية مبسطة ونصائح عملية على قناتي على يوتيوب. بالإضافة لذلك، أسعى لتعزيز مهارات البرمجة لدى الشباب في العالم العربي.للتواصل : contact@ghareeb.website',
        thumbnails: { default: { url: 'https://yt3.ggpht.com/rztdG4ptYGkgGWbECUHP5BPU_dr6YdV6c7nxecrXeecDJGVCbbJHkyy4Myd0Erqg5WCTWA9_lw=s176-c-k-c0x00ffffff-no-rj'} },
      },
    }
  ];

  export default initialChannels;