// ============================================================
// NURSING THEORY CONTENT DATABASE — أساسيات التمريض النظري 1
// ============================================================

const DB = {

  chapters: [

    // ════════════════════════════════════
    // CHAPTER 1 — ASEPSIS
    // ════════════════════════════════════
    {
      id: 1, title: "التعقيم", titleEn: "Asepsis", icon: "🦠", accent: "#38bdf8", dark: "#0c2a40",
      slides: [
        { id: "1-intro", heading: "مقدمة — Introduction", body: [
          { type: "bilingual", en: "Preventing infections is one of the most important priorities in nursing.", ar: "الوقاية من العدوى من أهم الأولويات في التمريض.", en_ph_ar: "بريفينتينج إنفيكشنز" },
          { type: "term", en: "Microorganisms", ar: "الكائنات الدقيقة", phonetic: "ˌmaɪkrəʊˈɔːɡənɪzəmz", def_en: "Living animals or plants visible only with a microscope; commonly called germs.", def_ar: "كائنات حية لا ترى إلا بالمجهر، تُسمى عادةً الجراثيم." }
        ]},
        { id: "1-types", heading: "أنواع الميكروبات — Types of Microorganisms", body: [
          { type: "numbered-bilingual", items: [
            { en: "Bacteria — single-celled microorganisms", ar: "البكتيريا — كائنات أحادية الخلية", en_ph_ar: "باكتيريا" },
            { en: "Viruses — the smallest microorganisms", ar: "الفيروسات — أصغر الكائنات الدقيقة", en_ph_ar: "فايرسيز" },
            { en: "Fungi — include yeasts and molds", ar: "الفطريات — تشمل الخمائر والعفن", en_ph_ar: "فانجاي" },
            { en: "Rickettsiae — resemble bacteria; found in fleas and lice", ar: "الريكيتسيا — تشبه البكتيريا، توجد في البراغيث", en_ph_ar: "ريكيتسيا" },
            { en: "Protozoans — single-celled animals like amoeba", ar: "البروتوزوا — حيوانات أحادية الخلية كالأميبا", en_ph_ar: "بروتوزوانز" },
            { en: "Mycoplasmas — lack a cell wall; pleomorphic", ar: "الميكوبلازما — تفتقر إلى جدار خلوي، متعددة الأشكال", en_ph_ar: "مايكوبلازماز" },
            { en: "Helminths — infectious worms", ar: "الديدان الطفيلية", en_ph_ar: "هيلمينثس" }
          ]}
        ]},
        { id: "1-chain", heading: "سلسلة العدوى — Chain of Infection", body: [
          { type: "bilingual", en: "Six essential components must be in place for pathogen transmission.", ar: "ستة مكونات أساسية يجب أن تتوفر لانتقال الميكروبات الممرضة.", en_ph_ar: "سيكس إيسينشال كومبوننتس أوف ذا تشين أوف إنفيكشن" },
          { type: "numbered-bilingual", items: [
            { en: "An infectious agent", ar: "عامل معدٍ (الميكروب)" },
            { en: "A reservoir for growth and reproduction", ar: "خزان للنمو والتكاثر" },
            { en: "An exit route from the reservoir", ar: "منفذ الخروج من الخزان" },
            { en: "A mode of transmission", ar: "طريقة الانتقال" },
            { en: "A port of entry", ar: "منفذ الدخول" },
            { en: "A susceptible host", ar: "مضيف قابل للإصابة" }
          ]}
        ]},
        { id: "1-reservoir", heading: "الخزان — Reservoir", body: [
          { type: "term", en: "Reservoir", ar: "الخزان", phonetic: "ˈrezəvwɑːr", def_en: "A place where microbes grow and reproduce, providing a haven for survival.", def_ar: "مكان تنمو فيه الميكروبات وتتكاثر مما يوفر لها بيئة للبقاء." },
          { type: "checkmarks", items: [
            { en: "Skin", ar: "الجلد" }, { en: "Shafts of hair", ar: "شعيرات الشعر" },
            { en: "Open wounds", ar: "الجروح المفتوحة" }, { en: "Blood", ar: "الدم" },
            { en: "Lower digestive tract", ar: "الجهاز الهضمي السفلي" },
            { en: "Nasal passages", ar: "الممرات الأنفية" }
          ]}
        ]},
        { id: "1-susceptible", heading: "المضيف القابل للإصابة — Susceptible Host", body: [
          { type: "checkmarks", items: [
            { en: "Older adults or premature infants", ar: "كبار السن أو الأطفال الخدج" },
            { en: "Burn victims", ar: "ضحايا الحروق" },
            { en: "Major trauma victims", ar: "ضحايا الصدمات الكبيرة" },
            { en: "Clients with indwelling catheters", ar: "مرضى بقساطر داخلية كالقسطرة البولية" },
            { en: "HIV-infected clients", ar: "مصابون بفيروس الإيدز" },
            { en: "Receiving anticancer drugs suppressing immunity", ar: "يتلقون أدوية مضادة للسرطان تثبط المناعة" }
          ]}
        ]},
        { id: "1-asepsis", heading: "التعقيم — Asepsis", body: [
          { type: "term", en: "Asepsis", ar: "التعقيم", phonetic: "eɪˈsepsɪs", def_en: "Practices that decrease or eliminate infectious agents, their reservoirs, and transmission vehicles.", def_ar: "ممارسات تُقلل أو تُزيل العوامل المعدية وخزاناتها وطرق انتقالها." },
          { type: "compare", label_a: "Medical Asepsis — التعقيم الطبي", label_b: "Surgical Asepsis — التعقيم الجراحي", rows: [
            { a: "Reduces/confines microorganisms", b: "Eliminates ALL microorganisms" },
            { a: "تقليل الميكروبات — التقنية النظيفة", b: "القضاء التام — التقنية المعقمة" }
          ]}
        ]},
        { id: "1-antimicrobial", heading: "العوامل المضادة للميكروبات — Antimicrobial Agents", body: [
          { type: "term", en: "Antiseptics", ar: "مطهرات", phonetic: "ˌæntɪˈseptɪks", def_en: "Inhibit the growth of, but do NOT kill, microorganisms. Example: alcohol.", def_ar: "تُثبط نمو الميكروبات ولكنها لا تقتلها. مثال: الكحول." },
          { type: "term", en: "Disinfectants", ar: "مطهرات قاتلة", phonetic: "ˌdɪsɪnˈfektənts", def_en: "Destroy active microorganisms but NOT spores. Examples: phenol, bleach, formaldehyde.", def_ar: "تقتل الميكروبات النشطة ولكن ليس الأبواغ. أمثلة: الفينول، المبيض، الفورمالديهايد." },
          { type: "term", en: "Antibiotics", ar: "المضادات الحيوية", phonetic: "ˌæntɪbaɪˈɒtɪks", def_en: "Alter the metabolic processes of bacteria but not viruses.", def_ar: "تؤثر على العمليات الأيضية للبكتيريا وليس الفيروسات." }
        ]},
        { id: "1-sterilization", heading: "طرق التعقيم الكامل — Sterilization Methods", body: [
          { type: "term", en: "Sterilization", ar: "التعقيم الكامل", phonetic: "ˌsterɪlaɪˈzeɪʃən", def_en: "Physical and chemical techniques that destroy ALL microorganisms including spores.", def_ar: "تقنيات تُتلف جميع الميكروبات بما فيها الأبواغ." },
          { type: "numbered-bilingual", items: [
            { en: "Radiation — UV kills bacteria especially TB", ar: "الإشعاع — فوق البنفسجية تقتل البكتيريا خاصةً السل" },
            { en: "Boiling Water — 15 min at 212°F (100°C)", ar: "الماء المغلي — 15 دقيقة عند 100°C" },
            { en: "Free-Flowing Steam — heated vapor from boiling water", ar: "البخار الحر — بخار الماء المغلي" },
            { en: "Dry Heat — 165°–170°C for at least 3 hours", ar: "الحرارة الجافة — 165–170°C لمدة 3 ساعات على الأقل" },
            { en: "Autoclave (Steam Under Pressure) — MOST dependable method", ar: "الأوتوكلاف (البخار تحت الضغط) — الأكثر موثوقية" }
          ]}
        ]},
        { id: "1-surgical-principles", heading: "مبادئ التعقيم الجراحي — Principles of Surgical Asepsis", body: [
          { type: "checkmarks", items: [
            { en: "Touch one sterile item only with another sterile item", ar: "لا تلمس الأشياء المعقمة إلا بأشياء معقمة" },
            { en: "Once a sterile item touches non-sterile, it is contaminated", ar: "أي تلامس للمعقم مع غير المعقم = تلوث فوري" },
            { en: "Partially unwrapped sterile package = contaminated", ar: "أي عبوة معقمة نُزع جزء من غلافها = ملوثة" },
            { en: "If in doubt about sterility = consider unsterile", ar: "عند الشك في التعقيم = غير معقم" },
            { en: "Outer 1-inch margin of sterile area = contamination zone", ar: "هامش بوصة واحدة من حافة المنطقة المعقمة = منطقة تلوث" },
            { en: "Wet sterile wrapper wicks microorganisms = contaminated", ar: "الغلاف المعقم المبلل يسحب الميكروبات = ملوث" },
            { en: "Coughing/sneezing over sterile field = contamination", ar: "السعال أو العطس فوق المنطقة المعقمة = تلوث" },
            { en: "Sterile items below waist level = contaminated", ar: "أشياء معقمة أسفل مستوى الخصر = ملوثة" }
          ]}
        ]}
      ],
      vocab: [
        { en: "Microorganism", ar: "الكائن الدقيق / الميكروب", ph: "ˌmaɪkrəʊˈɔːɡənɪzəm", ph_ar: "مايكروأورغانيزم" },
        { en: "Pathogen", ar: "الميكروب الممرض", ph: "ˈpæθədʒən", ph_ar: "باثوجين" },
        { en: "Bacteria", ar: "البكتيريا", ph: "bækˈtɪərɪə", ph_ar: "باكتيريا" },
        { en: "Virus", ar: "الفيروس", ph: "ˈvaɪrəs", ph_ar: "فايرس" },
        { en: "Fungi", ar: "الفطريات", ph: "ˈfʌŋɡaɪ", ph_ar: "فانجاي" },
        { en: "Spore", ar: "البوغ", ph: "spɔːr", ph_ar: "سبور" },
        { en: "Reservoir", ar: "الخزان", ph: "ˈrezəvwɑːr", ph_ar: "ريزيرفوار" },
        { en: "Asepsis", ar: "التعقيم", ph: "eɪˈsepsɪs", ph_ar: "أسيبسيس" },
        { en: "Medical asepsis", ar: "التعقيم الطبي", ph: "ˈmedɪkəl eɪˈsepsɪs", ph_ar: "ميديكال أسيبسيس" },
        { en: "Surgical asepsis", ar: "التعقيم الجراحي", ph: "ˈsɜːdʒɪkəl eɪˈsepsɪs", ph_ar: "سيرجيكال أسيبسيس" },
        { en: "Sterilization", ar: "التعقيم الكامل", ph: "ˌsterɪlaɪˈzeɪʃən", ph_ar: "ستيريلايزيشن" },
        { en: "Antiseptic", ar: "مطهر (يثبط ولا يقتل)", ph: "ˌæntɪˈseptɪk", ph_ar: "أنتيسيبتيك" },
        { en: "Disinfectant", ar: "مطهر قاتل للميكروبات النشطة", ph: "ˌdɪsɪnˈfektənt", ph_ar: "ديسإنفيكتنت" },
        { en: "Autoclave", ar: "الأوتوكلاف", ph: "ˈɔːtəkleɪv", ph_ar: "أوتوكليف" },
        { en: "Contamination", ar: "التلوث", ph: "kənˌtæmɪˈneɪʃən", ph_ar: "كونتاميشن" },
        { en: "Nosocomial infection", ar: "عدوى المستشفيات", ph: "ˌnɒsəˈkəʊmɪəl", ph_ar: "نوزوكوميال إنفيكشن" },
        { en: "Chain of infection", ar: "سلسلة العدوى", ph: "tʃeɪn əv ɪnˈfekʃən", ph_ar: "تشين أوف إنفيكشن" },
        { en: "Susceptible host", ar: "مضيف قابل للإصابة", ph: "səˈseptɪbəl həʊst", ph_ar: "سيسيبتيبل هوست" }
      ],
      quiz: [
        { q: "ما هي الطريقة الأكثر فعالية للوقاية من انتقال العدوى؟", o: ["ارتداء القفازات","غسل اليدين","ارتداء الكمامة","تعقيم الأدوات"], c: 1, ex: "غسل اليدين هو الطريقة المفردة الأكثر فعالية للوقاية من العدوى." },
        { q: "كم عدد مكونات سلسلة العدوى؟", o: ["4","5","6","7"], c: 2, ex: "سلسلة العدوى تتكون من 6 مكونات: عامل معدٍ، خزان، منفذ خروج، طريقة انتقال، منفذ دخول، مضيف قابل للإصابة." },
        { q: "الفرق بين المطهر (Antiseptic) والمطهر القاتل (Disinfectant):", o: ["لا فرق","المطهر يقتل والمطهر القاتل يثبط","المطهر يثبط ولا يقتل؛ المطهر القاتل يقتل الميكروبات النشطة","كلاهما يقتل الأبواغ"], c: 2, ex: "Antiseptic يُثبط النمو ولا يقتل. Disinfectant يقتل الميكروبات النشطة لكن ليس الأبواغ." },
        { q: "ما أكثر طرق التعقيم موثوقية للقضاء على جميع الميكروبات؟", o: ["الغلي بالماء","الأشعة فوق البنفسجية","الأوتوكلاف (البخار تحت الضغط)","الحرارة الجافة"], c: 2, ex: "الأوتوكلاف أكثر الطرق موثوقية لتدمير جميع الكائنات الدقيقة بما فيها الأبواغ." },
        { q: "هامش منطقة التلوث في المنطقة المعقمة:", o: ["نصف بوصة","بوصة واحدة","بوصتان","ثلاث بوصات"], c: 1, ex: "الهامش الخارجي بمقدار بوصة واحدة (2.5 سم) من حافة المنطقة المعقمة يُعدّ منطقة تلوث." },
        { q: "إذا لامس الشيء المعقم شيئاً غير معقم فهو:", o: ["لا يزال معقماً","يحتاج إعادة تعقيم","ملوثاً فوراً","نظيفاً"], c: 2, ex: "بمجرد ملامسة المعقم لغير المعقم يُعدّ ملوثاً فوراً." },
        { q: "الطريقة المثلى للتعقيم في المنزل:", o: ["الكحول فقط","الغلي في الماء 15 دقيقة عند 100°C","التجفيف في الشمس","المبيض المخفف"], c: 1, ex: "الغلي في الماء لمدة 15 دقيقة عند 100°C طريقة عملية مناسبة للتعقيم في المنزل." },
        { q: "ما تعريف البوغ (Spore)؟", o: ["نوع من الفطريات","شكل حياة ميكروبي خامد مقاوم للظروف القاسية","نوع من الفيروسات","طريقة التكاثر البكتيري"], c: 1, ex: "البوغ شكل حياة ميكروبي خامد يستطيع مقاومة الحرارة والمواد الكيميائية والبقاء دون رطوبة." }
      ]
    },

    // ════════════════════════════════════
    // CHAPTER 2 — INFECTION CONTROL
    // ════════════════════════════════════
    {
      id: 2, title: "مكافحة العدوى", titleEn: "Infection Control", icon: "🛡️", accent: "#f97316", dark: "#2a0f00",
      slides: [
        { id: "2-intro", heading: "مفاهيم أساسية — Key Concepts", body: [
          { type: "term", en: "Colonization", ar: "الاستعمار الجرثومي", phonetic: "ˌkɒlənɪˈzeɪʃən", def_en: "Microbes present but host shows NO signs or symptoms of infection.", def_ar: "وجود ميكروبات في الجسم دون ظهور أي أعراض عدوى." },
          { type: "term", en: "Incubation period", ar: "فترة الحضانة", phonetic: "ˌɪŋkjʊˈbeɪʃən ˈpɪərɪəd", def_en: "Infectious agent reproduces but there are no recognized symptoms. Agent may exit and infect others.", def_ar: "فترة تكاثر العامل المُعدي دون ظهور أعراض — قد ينتقل للآخرين." },
          { type: "term", en: "Infection", ar: "العدوى", phonetic: "ɪnˈfekʃən", def_en: "Condition that results when microorganisms cause injury to a host.", def_ar: "حالة تحدث عندما تُلحق الميكروبات ضرراً بالمضيف." }
        ]},
        { id: "2-standard", heading: "الاحتياطات القياسية — Standard Precautions", body: [
          { type: "highlight", en: "Standard precautions apply to ALL clients regardless of diagnosis. Apply whenever there is potential contact with blood, body fluids (except sweat), non-intact skin, or mucous membranes.", ar: "الاحتياطات القياسية تُطبّق على جميع المرضى بغض النظر عن تشخيصهم. تُطبّق عند احتمال التعرض لـ: الدم، سوائل الجسم (ما عدا العرق)، الجلد غير السليم، الأغشية المخاطية." },
          { type: "checkmarks", items: [
            { en: "Wash hands after touching blood/body fluids whether or not gloves worn", ar: "اغسل يديك بعد ملامسة الدم/سوائل الجسم سواء ارتديت قفازات أم لا" },
            { en: "Wear clean nonsterile gloves when touching blood/body fluids", ar: "ارتدِ قفازات نظيفة غير معقمة عند لمس الدم وسوائل الجسم" },
            { en: "Wear mask and eye protection when splashes likely", ar: "ارتدِ كمامة وحماية للعين عند احتمال التناثر" },
            { en: "Wear gown when splashes of blood/body fluids likely", ar: "ارتدِ ثوباً عند احتمال تناثر الدم أو سوائل الجسم" },
            { en: "Never recap used needles", ar: "لا تُغطِّ الإبر المستخدمة أبداً" }
          ]}
        ]},
        { id: "2-transmission", heading: "الاحتياطات القائمة على طريقة الانتقال", body: [
          { type: "numbered-bilingual", items: [
            { en: "Airborne precautions — pathogens ≤5 microns, remain suspended in air. Example: Tuberculosis (TB)", ar: "احتياطات هوائية — جسيمات ≤5 ميكرون تبقى معلقة بالهواء. مثال: السل" },
            { en: "Droplet precautions — pathogens >5 microns within 3 feet. Examples: influenza, mumps", ar: "احتياطات القطيرات — جسيمات >5 ميكرون ضمن 3 أقدام. أمثلة: الإنفلونزا، النكاف" },
            { en: "Contact precautions — direct skin-to-skin or indirect object contact", ar: "احتياطات التلامس — تلامس جلدي مباشر أو غير مباشر عبر أشياء ملوثة" }
          ]}
        ]},
        { id: "2-ppe", heading: "معدات الحماية الشخصية — PPE", body: [
          { type: "term", en: "Personal Protective Equipment (PPE)", ar: "معدات الحماية الشخصية", phonetic: "ˈpɜːsənəl prəˈtektɪv ɪˈkwɪpmənt", def_en: "Garments that block transfer of pathogens from one person/place/object to oneself or others.", def_ar: "ملابس تحجب انتقال مسببات الأمراض من شخص أو مكان أو شيء إلى شخص آخر." },
          { type: "highlight", en: "Order of PPE Removal (most contaminated FIRST): 1-Gloves → 2-Goggles → 3-Gown → 4-Mask", ar: "ترتيب خلع معدات الحماية (الأكثر تلوثاً أولاً): 1-القفازات ← 2-النظارات ← 3-الثوب ← 4-الكمامة" }
        ]},
        { id: "2-room", heading: "غرفة مكافحة العدوى — Infection Control Room", body: [
          { type: "checkmarks", items: [
            { en: "Assign infectious clients to private rooms", ar: "خصص غرف خاصة للمرضى المعديين" },
            { en: "Keep door CLOSED to control air currents and dust particles", ar: "أبقِ الباب مغلقاً للسيطرة على التيارات الهوائية وجزيئات الغبار" },
            { en: "Private bathroom for contaminated liquids", ar: "حمام خاص للتخلص من السوائل الملوثة" },
            { en: "Post instruction card on door stating isolation precautions required", ar: "ضع بطاقة تعليمية على الباب تُبيّن الحاجة لاحتياطات العزل" }
          ]}
        ]},
        { id: "2-double-bag", heading: "الكيسان المزدوجان — Double-Bagging", body: [
          { type: "term", en: "Double-bagging", ar: "الكيسان المزدوجان", phonetic: "ˈdʌbəl ˈbæɡɪŋ", def_en: "Infection control measure: one bag of contaminated items placed within another bag.", def_ar: "إجراء لمكافحة العدوى: وضع كيس يحتوي على مواد ملوثة داخل كيس آخر." }
        ]},
        { id: "2-psychological", heading: "الآثار النفسية — Psychological Implications", body: [
          { type: "bilingual", en: "Infection control measures often leave clients feeling shunned or abandoned. They continue to need human contact.", ar: "إجراءات مكافحة العدوى كثيراً ما تجعل المرضى يشعرون بالنبذ والوحدة. المرضى لا يزالون بحاجة للتواصل الإنساني.", en_ph_ar: "إنفيكشن كونترول ميجرز أوفتن ليف كلاينتس فيلينج شاند" },
          { type: "checkmarks", items: [
            { en: "Social Isolation", ar: "العزلة الاجتماعية" },
            { en: "Powerlessness", ar: "الشعور بالعجز" },
            { en: "Fear", ar: "الخوف" },
            { en: "Sensory Deprivation", ar: "الحرمان الحسي" }
          ]}
        ]}
      ],
      vocab: [
        { en: "Infection control", ar: "مكافحة العدوى", ph: "ɪnˈfekʃən kənˈtrəʊl", ph_ar: "إنفيكشن كونترول" },
        { en: "Standard precautions", ar: "الاحتياطات القياسية", ph: "ˈstændərd prɪˈkɔːʃənz", ph_ar: "ستاندرد بريكوشنز" },
        { en: "Airborne precautions", ar: "احتياطات انتقال هوائي", ph: "ˈeəbɔːn prɪˈkɔːʃənz", ph_ar: "إيربورن بريكوشنز" },
        { en: "Droplet precautions", ar: "احتياطات القطيرات", ph: "ˈdrɒplɪt prɪˈkɔːʃənz", ph_ar: "دروبليت بريكوشنز" },
        { en: "Contact precautions", ar: "احتياطات التلامس", ph: "ˈkɒntækt prɪˈkɔːʃənz", ph_ar: "كونتاكت بريكوشنز" },
        { en: "PPE", ar: "معدات الحماية الشخصية", ph: "piː piː iː", ph_ar: "بيبيبي" },
        { en: "Colonization", ar: "الاستعمار الجرثومي", ph: "ˌkɒlənɪˈzeɪʃən", ph_ar: "كولونايزيشن" },
        { en: "Incubation period", ar: "فترة الحضانة", ph: "ˌɪŋkjʊˈbeɪʃən ˈpɪərɪəd", ph_ar: "إنكيوبيشن بيريود" },
        { en: "Double-bagging", ar: "الكيسان المزدوجان", ph: "ˈdʌbəl ˈbæɡɪŋ", ph_ar: "دابل باجينج" },
        { en: "Tuberculosis (TB)", ar: "السل الرئوي", ph: "tjuːˌbɜːkjʊˈləʊsɪs", ph_ar: "تيوبيركيولوسيس" },
        { en: "Terminal disinfection", ar: "التطهير النهائي للغرفة", ph: "ˈtɜːmɪnəl ˌdɪsɪnˈfekʃən", ph_ar: "ترمينال ديسإنفيكشن" }
      ],
      quiz: [
        { q: "ما هي الاحتياطات التي تُطبّق على جميع المرضى بغض النظر عن تشخيصهم؟", o: ["احتياطات التلامس","الاحتياطات القياسية","احتياطات العزل","احتياطات الهواء"], c: 1, ex: "الاحتياطات القياسية تُطبّق على جميع المرضى لأنها تغطي المصادر المعروفة وغير المعروفة للعدوى." },
        { q: "السل مثال على أي نوع من احتياطات الانتقال؟", o: ["احتياطات التلامس","احتياطات القطيرات","احتياطات الانتقال الهوائي","الاحتياطات القياسية فقط"], c: 2, ex: "السل ينتقل عبر جسيمات هوائية ≤5 ميكرون تبقى معلقة في الهواء، لذا يستلزم احتياطات الانتقال الهوائي." },
        { q: "ما ترتيب خلع معدات الحماية الشخصية (من الأكثر تلوثاً)؟", o: ["قفازات ← نظارات ← ثوب ← كمامة","كمامة ← ثوب ← نظارات ← قفازات","ثوب ← قفازات ← كمامة ← نظارات","نظارات ← كمامة ← قفازات ← ثوب"], c: 0, ex: "الترتيب الصحيح: قفازات (الأكثر تلوثاً) ← نظارات ← ثوب ← كمامة (الأقل تلوثاً)." },
        { q: "ما تعريف الاستعمار الجرثومي (Colonization)؟", o: ["وجود ميكروبات مع ظهور أعراض","وجود ميكروبات دون ظهور أعراض","انتقال العدوى من الحيوانات","تلوث الدم"], c: 1, ex: "الاستعمار الجرثومي هو وجود الميكروبات في الجسم دون ظهور أعراض مرضية واضحة." },
        { q: "الغرض من تقنية الكيسين المزدوجين:", o: ["تحسين عملية الغسيل","منع تلوث الممرات والموظفين من المواد الملوثة","توفير مساحة تخزين","تسريع التخلص من النفايات"], c: 1, ex: "الكيسان المزدوجان يُستخدمان لمنع انتقال الملوثات إلى الخارج من خلال وضع الكيس الملوث داخل كيس آخر نظيف." }
      ]
    },

    // ════════════════════════════════════
    // CHAPTER 3 — ADMISSION, DISCHARGE & TRANSFER
    // ════════════════════════════════════
    {
      id: 3, title: "القبول والخروج والنقل", titleEn: "Admission, Discharge & Transfer", icon: "🏥", accent: "#a78bfa", dark: "#1a0a40",
      slides: [
        { id: "3-admission", heading: "القبول — Admission", body: [
          { type: "term", en: "Admission", ar: "القبول", phonetic: "ədˈmɪʃən", def_en: "Entering a health care agency for nursing care and medical or surgical treatment.", def_ar: "دخول مريض إلى مؤسسة رعاية صحية لتلقي التمريض أو العلاج الطبي أو الجراحي." },
          { type: "numbered-bilingual", items: [
            { en: "Authorization from a physician", ar: "إذن من الطبيب المعالج" },
            { en: "Collection of billing information by admitting department", ar: "جمع معلومات الفواتير من قسم القبول" },
            { en: "Completion of admission database by nursing personnel", ar: "تعبئة قاعدة بيانات القبول من قِبَل الكوادر التمريضية" },
            { en: "Documentation of medical history and physical examination", ar: "توثيق التاريخ الطبي ونتائج الفحص الجسدي" },
            { en: "Development of an initial nursing care plan", ar: "وضع الخطة التمريضية الأولية" },
            { en: "Initial medical orders for treatment", ar: "الأوامر الطبية الأولية للعلاج" }
          ]}
        ]},
        { id: "3-nursing-activities", heading: "الإجراءات التمريضية — Nursing Admission Activities", body: [
          { type: "numbered-bilingual", items: [
            { en: "Preparing the client's room (clean, stocked with basic equipment)", ar: "تحضير غرفة المريض (نظيفة ومجهزة بالمعدات الأساسية)" },
            { en: "Welcoming the client — MOST IMPORTANT step", ar: "استقبال المريض بحفاوة وترحيب — أهم الخطوات" },
            { en: "Orienting the client (nursing station, toilet, call system, daily routine)", ar: "تعريف المريض بالبيئة (محطة التمريض، الحمام، نظام الاستدعاء، الروتين اليومي)" },
            { en: "Safeguarding valuables and clothing", ar: "الحفاظ على المقتنيات الثمينة والملابس" },
            { en: "Helping the client undress (provides privacy)", ar: "مساعدة المريض على خلع ملابسه مع توفير الخصوصية" },
            { en: "Compiling nursing database and initial care plan (within 24 hours)", ar: "تجميع قاعدة البيانات التمريضية ووضع الخطة الأولية (خلال 24 ساعة)" }
          ]}
        ]},
        { id: "3-psychosocial", heading: "الاستجابات النفسية عند القبول", body: [
          { type: "checkmarks", items: [
            { en: "Anxiety and fear", ar: "القلق والخوف" },
            { en: "Decisional conflict", ar: "صراع القرار" },
            { en: "Situational low self-esteem", ar: "تدني احترام الذات الظرفي" },
            { en: "Powerlessness", ar: "الشعور بالعجز" },
            { en: "Social isolation", ar: "العزلة الاجتماعية" },
            { en: "Loss of identity — decrease in privacy", ar: "فقدان الهوية — انخفاض الخصوصية" }
          ]}
        ]},
        { id: "3-discharge", heading: "الخروج — Discharge", body: [
          { type: "term", en: "Discharge", ar: "الخروج / التسريح", phonetic: "ˈdɪstʃɑːdʒ", def_en: "Termination of care from a health care agency.", def_ar: "إنهاء الرعاية الصحية في المؤسسة وإعادة المريض إلى منزله." },
          { type: "numbered-bilingual", items: [
            { en: "Discharge planning", ar: "تخطيط الخروج" },
            { en: "Obtaining a written medical order", ar: "الحصول على أمر طبي مكتوب للخروج" },
            { en: "Completing discharge instructions", ar: "إتمام تعليمات الخروج للمريض" },
            { en: "Notifying business office (insurance arrangements)", ar: "إشعار القسم المالي (ترتيبات التأمين)" },
            { en: "Helping the client leave", ar: "مساعدة المريض على المغادرة" },
            { en: "Writing a discharge summary", ar: "كتابة ملخص الخروج" },
            { en: "Terminal cleaning of the room", ar: "التنظيف النهائي للغرفة" }
          ]}
        ]},
        { id: "3-method", heading: "نموذج METHOD لتخطيط الخروج", body: [
          { type: "highlight", en: "METHOD acronym guides discharge planning:", ar: "الحروف الأولى من METHOD توجّه تخطيط الخروج:" },
          { type: "numbered-bilingual", items: [
            { en: "M — Medication instructions", ar: "M — تعليمات الأدوية" },
            { en: "E — Environment (home needs)", ar: "E — البيئة (احتياجات المنزل)" },
            { en: "T — Treatment (wound care, procedures)", ar: "T — العلاج (رعاية الجروح، الإجراءات)" },
            { en: "H — Health teaching (what client needs to know)", ar: "H — التثقيف الصحي" },
            { en: "O — Outpatient referral (follow-up)", ar: "O — الإحالة الخارجية (المتابعة)" },
            { en: "D — Diet modifications", ar: "D — التعديلات الغذائية" }
          ]}
        ]},
        { id: "3-transfer-referral", heading: "النقل والإحالة — Transfer & Referral", body: [
          { type: "term", en: "Transfer", ar: "النقل", phonetic: "trænsˈfɜːr", def_en: "Discharging client from one unit/agency and admitting to another without going home.", def_ar: "تحويل المريض من وحدة أو مؤسسة إلى أخرى دون العودة إلى المنزل." },
          { type: "term", en: "Referral", ar: "الإحالة", phonetic: "rɪˈfɜːrəl", def_en: "Process of sending someone to another person or agency for special services.", def_ar: "عملية إرسال شخص إلى شخص آخر أو جهة متخصصة لتقديم خدمات متخصصة." },
          { type: "checkmarks", items: [
            { en: "Transfers used for: specialized care, reducing costs, less intensive nursing", ar: "النقل يُستخدم لـ: رعاية متخصصة، تخفيض التكاليف، رعاية أقل حدة" },
            { en: "Home health care: shortens hospital stay, prevents extended care admissions", ar: "الرعاية المنزلية: تُقصّر الإقامة في المستشفى وتمنع الدخول لمرافق الرعاية الممتدة" }
          ]}
        ]}
      ],
      vocab: [
        { en: "Admission", ar: "القبول", ph: "ədˈmɪʃən", ph_ar: "أدميشن" },
        { en: "Discharge", ar: "الخروج / التسريح", ph: "ˈdɪstʃɑːdʒ", ph_ar: "ديسشارج" },
        { en: "Transfer", ar: "النقل", ph: "trænsˈfɜːr", ph_ar: "ترانسفير" },
        { en: "Referral", ar: "الإحالة", ph: "rɪˈfɜːrəl", ph_ar: "ريفيرال" },
        { en: "Discharge planning", ar: "تخطيط الخروج", ph: "ˈdɪstʃɑːdʒ ˈplænɪŋ", ph_ar: "ديسشارج بلانينج" },
        { en: "Home health care", ar: "الرعاية الصحية المنزلية", ph: "həʊm helθ keər", ph_ar: "هوم هيلث كير" },
        { en: "Orientation", ar: "التوجيه / التعريف بالبيئة", ph: "ˌɔːrɪenˈteɪʃən", ph_ar: "أورينتيشن" },
        { en: "Anxiety", ar: "القلق", ph: "æŋˈzaɪəti", ph_ar: "أنغزايتي" },
        { en: "Powerlessness", ar: "الشعور بالعجز", ph: "ˈpaʊərləsnɪs", ph_ar: "باورليسنيس" },
        { en: "Terminal cleaning", ar: "التنظيف النهائي للغرفة", ph: "ˈtɜːmɪnəl ˈkliːnɪŋ", ph_ar: "ترمينال كليننج" }
      ],
      quiz: [
        { q: "ما هي أهم خطوة في عملية قبول المريض؟", o: ["تعبئة الأوراق","استقبال المريض بحفاوة وترحيب","قياس العلامات الحيوية","فحص التأمين الصحي"], c: 1, ex: "استقبال المريض بحفاوة من أهم خطوات القبول لأنه يُرسّخ العلاقة العلاجية ويُخفف القلق." },
        { q: "ما المقصود بنقل المريض (Transfer)؟", o: ["إعادة المريض إلى المنزل","نقل المريض من وحدة أو مؤسسة إلى أخرى دون العودة للمنزل","إحالة المريض لطبيب خاص","إخراج المريض لتحاليل خارجية"], c: 1, ex: "النقل هو تحويل المريض من وحدة أو مؤسسة إلى أخرى دون العودة إلى المنزل." },
        { q: "ماذا يعني H في نموذج METHOD؟", o: ["Hospital","Hydration","Health teaching","History"], c: 2, ex: "H تعني Health teaching — التثقيف الصحي: ما يحتاج المريض تعلمه بعد الخروج." },
        { q: "أي من التالي استجابة نفسية شائعة عند القبول؟", o: ["الفرح والبهجة","القلق والخوف والشعور بالعجز","الرغبة في البقاء أطول","التحسن الفوري النفسي"], c: 1, ex: "القلق والخوف والشعور بالعجز وفقدان الهوية من أكثر الاستجابات النفسية شيوعاً عند القبول." },
        { q: "ما الفرق بين النقل (Transfer) والإحالة (Referral)؟", o: ["لا فرق","النقل للمؤسسة؛ الإحالة لمتخصص أو جهة لخدمات خاصة","الإحالة للمستشفى؛ النقل لطبيب خاص","كلاهما يعني الخروج من المستشفى"], c: 1, ex: "النقل: انتقال بين الوحدات/المؤسسات دون المرور بالمنزل. الإحالة: إرسال لمتخصص أو جهة لخدمات معينة." }
      ]
    },

    // ════════════════════════════════════
    // CHAPTER 4 — RECORDING & REPORTING
    // ════════════════════════════════════
    {
      id: 4, title: "التوثيق والتقرير", titleEn: "Recording & Reporting", icon: "📋", accent: "#10b981", dark: "#022c1a",
      slides: [
        { id: "4-records", heading: "السجلات الطبية — Medical Records", body: [
          { type: "term", en: "Medical records", ar: "السجلات الطبية", phonetic: "ˈmedɪkəl ˈrekɔːdz", def_en: "Written collections of information about a person's health, care provided, and client's progress.", def_ar: "مجموعات مكتوبة من المعلومات حول صحة الشخص والرعاية المقدمة وتقدم المريض." },
          { type: "checkmarks", items: [
            { en: "Permanent account — requested during subsequent admissions", ar: "سجل دائم — يُطلب عند الدخول مجدداً" },
            { en: "Sharing information — prevents duplication, reduces errors", ar: "تبادل المعلومات — يمنع التكرار ويقلل الأخطاء" },
            { en: "Quality assurance", ar: "ضمان الجودة" },
            { en: "Accreditation — examined during inspection", ar: "الاعتماد — يُفحص أثناء التفتيش" },
            { en: "Reimbursement — payment guided by records", ar: "السداد المالي — يُحدَّد وفق السجلات" },
            { en: "Education and research", ar: "التعليم والبحث العلمي" },
            { en: "Legal evidence — each entry writer can be summoned as witness", ar: "دليل قانوني — كاتب كل ملاحظة يمكن استدعاؤه كشاهد" }
          ]}
        ]},
        { id: "4-charting", heading: "معايير التوثيق القانوني — Legally Defensible Charting", body: [
          { type: "checkmarks", items: [
            { en: "Ensure client's name appears on each page", ar: "تأكد من ظهور اسم المريض في كل صفحة" },
            { en: "Never chart for someone else", ar: "لا توثّق نيابةً عن شخص آخر أبداً" },
            { en: "Date and time each entry as it is made", ar: "أرّخ ووقّت كل ملاحظة عند تسجيلها" },
            { en: "Make entries in chronologic order", ar: "سجّل الملاحظات بترتيب زمني" },
            { en: "Write legibly; use only approved abbreviations", ar: "اكتب بوضوح؛ استخدم الاختصارات المعتمدة فقط" },
            { en: "NEVER use correction fluid — draw single line through errors + add date & initials", ar: "لا تستخدم سائل التصحيح أبداً — ارسم خطاً واحداً على الخطأ + أضف التاريخ والأحرف الأولى" },
            { en: "Record FACTS, not subjective interpretations", ar: "سجّل الحقائق لا التفسيرات الشخصية" },
            { en: "Sign each entry by name and title", ar: "وقّع كل ملاحظة باسمك ولقبك" },
            { en: "Leave no empty spaces between entries and signature", ar: "لا تترك مسافات فارغة بين الملاحظات والتوقيع" }
          ]}
        ]},
        { id: "4-types-records", heading: "أنواع السجلات — Types of Records", body: [
          { type: "compare", label_a: "Source-Oriented Records — موجهة بالمصدر", label_b: "Problem-Oriented Records — موجهة بالمشكلة", rows: [
            { a: "Organized by source (physician, nurse, dietitian)", b: "Organized by client's health problems" },
            { a: "منظمة حسب المصدر", b: "منظمة حسب مشاكل صحة المريض" },
            { a: "Fragmented documentation", b: "Goal-directed care emphasis" },
            { a: "توثيق مجزأ", b: "تركيز على الرعاية الهادفة" }
          ]}
        ]},
        { id: "4-charting-methods", heading: "طرق التوثيق — Methods of Charting", body: [
          { type: "term", en: "Narrative charting", ar: "التوثيق السردي", phonetic: "ˈnærətɪv", def_en: "No established format; time-consuming to write and read; may omit pertinent documentation.", def_ar: "لا يوجد تنسيق محدد؛ يستغرق وقتاً طويلاً؛ قد يُغفل معلومات مهمة." },
          { type: "term", en: "SOAP charting", ar: "التوثيق بطريقة SOAP", phonetic: "səʊp", def_en: "S=Subjective, O=Objective, A=Analysis, P=Plan. May be expanded to SOAPIE or SOAPIER.", def_ar: "S=ذاتي، O=موضوعي، A=تحليل، P=خطة. قد يُوسَّع لـ SOAPIE أو SOAPIER." },
          { type: "term", en: "Focus charting (DAR)", ar: "التوثيق المحوري (DAR)", phonetic: "ˈfəʊkəs", def_en: "D=Data, A=Action, R=Response. Uses 'focus' instead of 'problem'.", def_ar: "D=بيانات، A=إجراء، R=استجابة. يستخدم كلمة 'محور' بدلاً من 'مشكلة'." },
          { type: "term", en: "PIE charting", ar: "التوثيق PIE", phonetic: "paɪ", def_en: "P=Problem, I=Intervention, E=Evaluation.", def_ar: "P=المشكلة، I=التدخل، E=التقييم." },
          { type: "term", en: "Charting by exception", ar: "التوثيق بالاستثناء", phonetic: "ˈtʃɑːtɪŋ baɪ ɪkˈsepʃən", def_en: "Chart ONLY abnormal findings or care deviating from standard. Quick access to abnormal findings.", def_ar: "يُوثَّق فقط النتائج غير الطبيعية أو الرعاية المنحرفة عن المعيار." },
          { type: "term", en: "Computerized charting", ar: "التوثيق الإلكتروني", phonetic: "kəmˈpjuːtəraɪzd", def_en: "Always legible; auto-records date/time; consistent abbreviations; fewer omissions; saves time.", def_ar: "دائماً مقروء؛ يُسجّل التاريخ/الوقت تلقائياً؛ اختصارات ثابتة؛ حذف أقل؛ يوفر الوقت." }
        ]},
        { id: "4-hipaa", heading: "HIPAA — حماية المعلومات الصحية", body: [
          { type: "term", en: "HIPAA", ar: "قانون HIPAA", phonetic: "ˈhɪpə", def_en: "Health Insurance Portability and Accountability Act — protects written, spoken, and electronic health information.", def_ar: "قانون إمكانية نقل التأمين الصحي والمساءلة — يحمي المعلومات الصحية المكتوبة والمنطوقة والإلكترونية." },
          { type: "checkmarks", items: [
            { en: "Client names on charts not visible to public", ar: "أسماء المرضى على الملفات غير مرئية للعامة" },
            { en: "Computer screens not visible to public", ar: "شاشات الحاسوب غير مرئية للعامة" },
            { en: "Conversations regarding clients in private places only", ar: "محادثات المرضى في أماكن خاصة فقط" },
            { en: "Cover sheet on all faxes; warnings on emails", ar: "غلاف على جميع الفاكسات؛ تحذير على الإيميلات" }
          ]}
        ]},
        { id: "4-sbar", heading: "نموذج SBAR للتواصل الفعّال", body: [
          { type: "highlight", en: "SBAR is recommended as a model for effective communication between health care providers.", ar: "نموذج SBAR مُوصى به للتواصل الفعّال بين مقدمي الرعاية الصحية." },
          { type: "numbered-bilingual", items: [
            { en: "S — Situation: What is the situation you are calling about?", ar: "S — الوضع: ما الوضع الذي تتصل بشأنه؟" },
            { en: "B — Background: Pertinent background information", ar: "B — الخلفية: المعلومات الخلفية المتعلقة بالوضع" },
            { en: "A — Assessment: What is your assessment of the situation?", ar: "A — التقييم: ما تقييمك للوضع؟" },
            { en: "R — Recommendation: Explain what is needed or wanted", ar: "R — التوصية: اشرح ما هو مطلوب أو مرغوب" }
          ]}
        ]}
      ],
      vocab: [
        { en: "Medical records", ar: "السجلات الطبية", ph: "ˈmedɪkəl ˈrekɔːdz", ph_ar: "ميديكال ريكوردز" },
        { en: "Documentation", ar: "التوثيق", ph: "ˌdɒkjʊmenˈteɪʃən", ph_ar: "دوكيومينتيشن" },
        { en: "Charting", ar: "التسجيل في الملف", ph: "ˈtʃɑːtɪŋ", ph_ar: "شارتينج" },
        { en: "SOAP charting", ar: "التوثيق SOAP", ph: "səʊp ˈtʃɑːtɪŋ", ph_ar: "سوب شارتينج" },
        { en: "PIE charting", ar: "التوثيق PIE", ph: "paɪ ˈtʃɑːtɪŋ", ph_ar: "باي شارتينج" },
        { en: "SBAR", ar: "نموذج التواصل SBAR", ph: "ˌes biː eɪ ˈɑːr", ph_ar: "إس بي إيه آر" },
        { en: "HIPAA", ar: "قانون حماية المعلومات الصحية", ph: "ˈhɪpə", ph_ar: "هيبا" },
        { en: "JCAHO", ar: "لجنة الاعتماد المشترك", ph: "ˌdʒeɪ keɪ eɪ ˈeɪtʃ əʊ", ph_ar: "جيكاهو" },
        { en: "Narrative charting", ar: "التوثيق السردي", ph: "ˈnærətɪv", ph_ar: "ناريتيف شارتينج" },
        { en: "Charting by exception", ar: "التوثيق بالاستثناء", ph: "ˈtʃɑːtɪŋ baɪ ɪkˈsepʃən", ph_ar: "شارتينج باي إكسيبشن" },
        { en: "Military time", ar: "الوقت العسكري (24 ساعة)", ph: "ˈmɪlɪtri taɪm", ph_ar: "ميليتاري تايم" }
      ],
      quiz: [
        { q: "ماذا تعني حروف SOAP في التوثيق؟", o: ["Subjective, Objective, Assessment, Plan","Signs, Observations, Actions, Plan","Status, Output, Assessment, Protocol","Situation, Overview, Analysis, Procedure"], c: 0, ex: "SOAP = S(بيانات ذاتية)، O(بيانات موضوعية)، A(التحليل)، P(خطة الرعاية)." },
        { q: "كيف يُصحَّح خطأ في الملف الطبي؟", o: ["شطب الخطأ كلياً بسائل التصحيح","خط واحد على الخطأ + التاريخ والأحرف الأولى + المعلومة الصحيحة","حذف الصفحة وإعادة كتابتها","ترك المعلومة الخاطئة وإضافة ملاحظة فقط"], c: 1, ex: "يُرسم خط واحد على الخطأ ليبقى مقروءاً، ثم يُضاف التاريخ والأحرف الأولى وتُكتب المعلومة الصحيحة." },
        { q: "ما الغرض الأساسي من قانون HIPAA؟", o: ["تحديد أسعار التأمين الصحي","حماية خصوصية المعلومات الصحية للمرضى","تنظيم مواعيد الأطباء","توحيد نماذج التوثيق الطبي"], c: 1, ex: "HIPAA يحمي خصوصية المعلومات الصحية المكتوبة والمنطوقة والإلكترونية للمرضى." },
        { q: "ما هي طريقة التوثيق التي تُسجّل فيها فقط النتائج غير الطبيعية؟", o: ["SOAP","Narrative","Charting by Exception","PIE"], c: 2, ex: "Charting by Exception يُسجّل فقط النتائج غير الطبيعية أو الرعاية المنحرفة عن المعيار." },
        { q: "ماذا يعني حرف R في نموذج SBAR؟", o: ["Report","Record","Recommendation","Response"], c: 2, ex: "R في SBAR تعني Recommendation — التوصية: ما هو مطلوب أو مرغوب اتخاذه." }
      ]
    },

    // ════════════════════════════════════
    // CHAPTER 5 — VITAL SIGNS
    // ════════════════════════════════════
    {
      id: 5, title: "العلامات الحيوية", titleEn: "Vital Signs", icon: "💓", accent: "#f43f5e", dark: "#300010",
      slides: [
        { id: "5-intro", heading: "العلامات الحيوية — Vital Signs", body: [
          { type: "bilingual", en: "Four (or five) objective assessment data indicating how well or poorly the body is functioning.", ar: "أربع (أو خمس) بيانات تقييم موضوعية تُشير إلى مدى جودة أو ضعف أداء الجسم.", en_ph_ar: "فور أوبجيكتيف أسيسمنت ديتا" },
          { type: "numbered-bilingual", items: [
            { en: "Body temperature", ar: "درجة حرارة الجسم" },
            { en: "Pulse", ar: "النبض" },
            { en: "Respiratory rate", ar: "معدل التنفس" },
            { en: "Blood pressure", ar: "ضغط الدم" },
            { en: "Pain (5th vital sign)", ar: "الألم (العلامة الحيوية الخامسة)" }
          ]}
        ]},
        { id: "5-temperature", heading: "درجة حرارة الجسم — Body Temperature", body: [
          { type: "compare", label_a: "Shell Temperature — حرارة القشرة", label_b: "Core Temperature — الحرارة الجوهرية", rows: [
            { a: "Warmth at skin surface", b: "Warmth in deeper sites (brain, heart)" },
            { a: "حرارة سطح الجلد", b: "حرارة المواقع العميقة (الدماغ، القلب)" },
            { a: "Usually LOWER than core", b: "More clinically significant" },
            { a: "أقل من الجوهرية عادةً", b: "الأكثر أهمية سريرياً" }
          ]},
          { type: "highlight", en: "Normal shell: 96.6–99.3°F (35.8–37.4°C). Core: 97.5–100.4°F (36.4–37.3°C). Regulated by HYPOTHALAMUS.", ar: "الطبيعي للقشرة: 35.8–37.4°C. الجوهرية: 36.4–37.3°C. ينظّمها الهيبوثلامس." }
        ]},
        { id: "5-temp-sites", heading: "مواقع قياس الحرارة — Assessment Sites", body: [
          { type: "numbered-bilingual", items: [
            { en: "Oral — 0.5°C–0.6°C below core. Duration 3–5 min. Contraindicated: unconscious, uncooperative, oral surgery, mouth breathers, seizure-prone, very young.", ar: "الفم — أقل من الجوهرية بـ 0.5–0.6°C. المدة: 3–5 دقائق. موانع: فاقد الوعي، غير متعاون، جراحة فموية، من يتنفس بالفم، عرضة للنوبات، صغار السن." },
            { en: "Rectal — 0.1°C below core. MOST ACCURATE. Duration 1 min. Embarrassing; stool affects accuracy.", ar: "المستقيم — أقل من الجوهرية بـ 0.1°C. الأدق. المدة: 1 دقيقة. محرج؛ البراز يؤثر على الدقة." },
            { en: "Axillary (under arm) — 0.6°C lower than oral. Best for infants/newborns. Duration 3–5 min.", ar: "الإبط — أقل من الفموي بـ 0.6°C. الأفضل للرضع والمواليد. المدة: 3–5 دقائق." },
            { en: "Tympanic (ear) — near hypothalamus. More reliable than oral/axilla. Duration: seconds.", ar: "الأذن (الطبلة) — قريب من الهيبوثلامس. أكثر موثوقية من الفم والإبط. المدة: ثوانٍ." }
          ]},
          { type: "highlight", en: "N.B.: Axilla → Add 0.6°C to get true temp | Rectum → Subtract 0.5°C | Mouth → Document as is", ar: "ملاحظة: الإبط → أضف 0.6°C | المستقيم → اطرح 0.5°C | الفم → سجّله كما هو" }
        ]},
        { id: "5-fever", heading: "الحمى وفرط الحرارة — Fever & Hyperthermia", body: [
          { type: "term", en: "Fever (Pyrexia)", ar: "الحمى (بيركسيا)", phonetic: "ˈfiːvər / paɪˈreksɪə", def_en: "Body temperature exceeds 99.3°F (37.4°C). Febrile = has fever. Afebrile = normal temp.", def_ar: "حرارة الجسم تتجاوز 37.4°C. محموم = لديه حمى. غير محموم = حرارته طبيعية." },
          { type: "term", en: "Hyperthermia", ar: "فرط الحرارة", phonetic: "ˌhaɪpərˈθɜːrmɪə", def_en: "Core temperature excessively high — exceeds 105.8°F (40.6°C).", def_ar: "ارتفاع مفرط في الحرارة الجوهرية — تتجاوز 40.6°C." },
          { type: "term", en: "Hypothermia", ar: "انخفاض حرارة الجسم", phonetic: "ˌhaɪpəʊˈθɜːrmɪə", def_en: "Core body temperature less than 95°F (35°C). Mild: 34–35°C. Moderate: 30–33.8°C. Severe: <30°C.", def_ar: "الحرارة الجوهرية أقل من 35°C. خفيف: 34–35°C. معتدل: 30–33.8°C. شديد: أقل من 30°C." }
        ]},
        { id: "5-fever-phases", heading: "مراحل الحمى — Phases of Fever", body: [
          { type: "numbered-bilingual", items: [
            { en: "1. Prodromal — mild headache, lethargy, reduced appetite, muscle aches", ar: "1. البادرية — صداع خفيف، خمول، نقص شهية، آلام عضلية" },
            { en: "2. Onset/Invasive — pallor, shivering, feels cold", ar: "2. البداية — شحوب، قشعريرة، الشعور بالبرد" },
            { en: "3. Stationary — fever sustained, flushed skin, feels hot", ar: "3. الثابتة — استمرار الحمى، احمرار الجلد، الشعور بالحرارة" },
            { en: "4. Resolution — sweating begins, temperature returns to normal", ar: "4. الشفاء — بدء التعرق، عودة الحرارة للطبيعي" }
          ]},
          { type: "highlight", en: "Nursing management of fever: Increase fluids, rest, antipyretics, cold compresses (forehead/axilla/groin), tepid water on skin, increase ventilation. STOP physical cooling if patient begins to SHIVER!", ar: "تدبير الحمى: زيادة السوائل، الراحة، خافضات الحرارة، كمادات باردة (جبهة/إبط/حوض)، ماء فاتر على الجلد، تهوية الغرفة. أوقف التبريد الجسدي فور بدء الارتجاف!" }
        ]},
        { id: "5-pulse", heading: "النبض — Pulse", body: [
          { type: "term", en: "Pulse", ar: "النبض", phonetic: "pʌls", def_en: "Wave-like sensation produced by blood movement during heart contraction; palpated in peripheral arteries. Normal adult rate: 60–100 bpm.", def_ar: "إحساس موجي ناجم عن حركة الدم أثناء انقباض القلب. المعدل الطبيعي للبالغين: 60–100 نبضة/دقيقة." },
          { type: "compare", label_a: "Tachycardia — سرعة النبض", label_b: "Bradycardia — بطء النبض", rows: [
            { a: "Heart rate > 100 bpm", b: "Heart rate < 60 bpm" },
            { a: "أكثر من 100 نبضة/دقيقة", b: "أقل من 60 نبضة/دقيقة" }
          ]},
          { type: "bilingual", en: "Primary site: Radial artery (thumb side of wrist). Other sites: Temporal, Carotid, Brachial, Femoral, Popliteal, Posterior tibial, Dorsalis pedis, Apical.", ar: "الموقع الأساسي: الشريان الكعبري (الجانب الإبهامي من الرسغ). مواقع أخرى: الصدغي، السباتي، العضدي، الفخذي، البوبليتيال، الظنبوبي الخلفي، ظهر القدم، القمي.", en_ph_ar: "برايمري سايت: ريديال آرتيري" }
        ]},
        { id: "5-respiration", heading: "التنفس — Respiration", body: [
          { type: "bilingual", en: "Normal respiratory rate in adults: 12–20 breaths/minute.", ar: "معدل التنفس الطبيعي عند البالغين: 12–20 نفساً في الدقيقة.", en_ph_ar: "نورمال ريسبيراتوري ريت: 12-20 بريذز بير مينيت" },
          { type: "numbered-bilingual", items: [
            { en: "Tachypnea — rapid rate (fever or cardiac/respiratory disease)", ar: "سرعة التنفس (الحمى أو أمراض القلب/التنفس)" },
            { en: "Bradypnea — slower than normal (medications, neurologic disorders, hypothermia)", ar: "بطء التنفس (أدوية، اضطرابات عصبية، انخفاض الحرارة)" },
            { en: "Dyspnea — difficult or labored breathing", ar: "صعوبة التنفس أو التنفس الشاق" },
            { en: "Orthopnea — breathing facilitated by sitting/standing (difficult lying down)", ar: "التنفس يتحسن بالجلوس أو الوقوف (صعب في الاستلقاء)" },
            { en: "Apnea — absence of breathing", ar: "انقطاع النفس / غياب التنفس" },
            { en: "Cheyne-Stokes — gradual increase then decrease then brief apnea", ar: "تنفس شيْن-ستوكس: تزايد تدريجي ثم تناقص ثم فترة انقطاع" }
          ]}
        ]},
        { id: "5-blood-pressure", heading: "ضغط الدم — Blood Pressure", body: [
          { type: "highlight", en: "Normal BP: Systolic 90–139 mmHg / Diastolic 60–89 mmHg. Hypertension: SBP ≥140 OR DBP ≥90. Hypotension: SBP <90.", ar: "الطبيعي: الانقباضي 90–139 / الانبساطي 60–89 mmHg. ارتفاع الضغط: انقباضي ≥140 أو انبساطي ≥90. انخفاض: انقباضي <90." },
          { type: "term", en: "Korotkoff sounds", ar: "أصوات كوروتكوف", phonetic: "kɒrəˈtɒkɒf saʊndz", def_en: "Sounds from vibrations of blood within the arterial wall when measuring BP. Five phases.", def_ar: "أصوات ناتجة عن اهتزازات الدم داخل جدار الشريان أثناء قياس ضغط الدم. خمسة أطوار." },
          { type: "bilingual", en: "Primary BP site: brachial artery (inner aspect of elbow). Alternative: popliteal artery (behind knee) when arms unavailable.", ar: "الموقع الأساسي: الشريان العضدي (الجانب الداخلي للكوع). البديل: الشريان البوبليتيال (خلف الركبة) عند تعذّر الذراع.", en_ph_ar: "برايمري بيبي سايت: براكيال آرتيري" }
        ]}
      ],
      vocab: [
        { en: "Vital signs", ar: "العلامات الحيوية", ph: "ˈvaɪtəl saɪnz", ph_ar: "فايتال ساينز" },
        { en: "Body temperature", ar: "درجة حرارة الجسم", ph: "ˈbɒdi ˈtemprɪtʃər", ph_ar: "بودي تمبريتشر" },
        { en: "Fever / Pyrexia", ar: "الحمى", ph: "ˈfiːvər / paɪˈreksɪə", ph_ar: "فيفر / بايريكسيا" },
        { en: "Hyperthermia", ar: "فرط الحرارة (>40.6°C)", ph: "ˌhaɪpərˈθɜːrmɪə", ph_ar: "هايبرثيرميا" },
        { en: "Hypothermia", ar: "انخفاض الحرارة (<35°C)", ph: "ˌhaɪpəʊˈθɜːrmɪə", ph_ar: "هايبوثيرميا" },
        { en: "Febrile", ar: "محموم", ph: "ˈfiːbraɪl", ph_ar: "فيبرايل" },
        { en: "Afebrile", ar: "غير محموم", ph: "eɪˈfiːbraɪl", ph_ar: "إيفيبرايل" },
        { en: "Pulse", ar: "النبض", ph: "pʌls", ph_ar: "بالس" },
        { en: "Tachycardia", ar: "سرعة النبض (>100/دقيقة)", ph: "ˌtækɪˈkɑːrdɪə", ph_ar: "تاكيكارديا" },
        { en: "Bradycardia", ar: "بطء النبض (<60/دقيقة)", ph: "ˌbrædɪˈkɑːrdɪə", ph_ar: "براديكارديا" },
        { en: "Palpitation", ar: "الخفقان", ph: "ˌpælpɪˈteɪʃən", ph_ar: "بالبيتيشن" },
        { en: "Radial artery", ar: "الشريان الكعبري", ph: "ˈreɪdɪəl ˈɑːtərɪ", ph_ar: "ريديال آرتيري" },
        { en: "Apical pulse", ar: "النبض القمي", ph: "ˈeɪpɪkəl pʌls", ph_ar: "إيبيكال بالس" },
        { en: "Pulse deficit", ar: "عجز النبض (قمي - كعبري)", ph: "pʌls ˈdefɪsɪt", ph_ar: "بالس ديفيسيت" },
        { en: "Tachypnea", ar: "سرعة التنفس", ph: "ˌtækɪpˈniːə", ph_ar: "تاكيبنيا" },
        { en: "Bradypnea", ar: "بطء التنفس", ph: "ˌbrædɪpˈniːə", ph_ar: "براديبنيا" },
        { en: "Dyspnea", ar: "صعوبة التنفس", ph: "ˈdɪspnɪə", ph_ar: "ديسبنيا" },
        { en: "Apnea", ar: "انقطاع النفس", ph: "ˈæpnɪə", ph_ar: "أبنيا" },
        { en: "Orthopnea", ar: "التنفس الانتصابي", ph: "ˌɔːrθɒpˈniːə", ph_ar: "أورثوبنيا" },
        { en: "Blood pressure", ar: "ضغط الدم", ph: "blʌd ˈpreʃər", ph_ar: "بلاد بريشر" },
        { en: "Systolic pressure", ar: "الضغط الانقباضي", ph: "sɪˈstɒlɪk ˈpreʃər", ph_ar: "سيستوليك بريشر" },
        { en: "Diastolic pressure", ar: "الضغط الانبساطي", ph: "ˌdaɪəˈstɒlɪk ˈpreʃər", ph_ar: "دايستوليك بريشر" },
        { en: "Hypertension", ar: "ارتفاع ضغط الدم", ph: "ˌhaɪpərˈtenʃən", ph_ar: "هايبرتينشن" },
        { en: "Hypotension", ar: "انخفاض ضغط الدم", ph: "ˌhaɪpəʊˈtenʃən", ph_ar: "هايبوتينشن" },
        { en: "Korotkoff sounds", ar: "أصوات كوروتكوف", ph: "kɒrəˈtɒkɒf saʊndz", ph_ar: "كوروتكوف ساوندز" },
        { en: "Sphygmomanometer", ar: "جهاز قياس ضغط الدم", ph: "ˌsfɪɡməʊməˈnɒmɪtər", ph_ar: "سفيغمومانوميتر" },
        { en: "Hypothalamus", ar: "منطقة الهيبوثلامس", ph: "ˌhaɪpəʊˈθæləməs", ph_ar: "هايبوثالاموس" },
        { en: "Antipyretics", ar: "خافضات الحرارة", ph: "ˌæntɪpaɪˈretɪks", ph_ar: "أنتيبايريتيكس" }
      ],
      quiz: [
        { q: "ما هي درجة الحرارة التي تُعدّ حمى (Fever)؟", o: ["أكثر من 36.5°C","أكثر من 37.4°C","أكثر من 38.5°C","أكثر من 40°C"], c: 1, ex: "الحمى = Fever: حرارة الجسم تتجاوز 37.4°C (99.3°F)." },
        { q: "ما هو أدق مواقع قياس الحرارة؟", o: ["الفم","الإبط","المستقيم","الأذن"], c: 2, ex: "المستقيم هو الأدق في قياس درجة الحرارة لأنه أقرب للحرارة الجوهرية." },
        { q: "ما الموقع الأساسي الأكثر استخداماً لقياس النبض؟", o: ["الشريان السباتي","الشريان العضدي","الشريان الكعبري","الشريان الفخذي"], c: 2, ex: "الشريان الكعبري (على الجانب الإبهامي من الرسغ) هو الموقع الأساسي الأكثر استخداماً لقياس النبض." },
        { q: "ما هو المعدل الطبيعي للنبض عند البالغين؟", o: ["40–80/دقيقة","60–100/دقيقة","100–140/دقيقة","50–90/دقيقة"], c: 1, ex: "المعدل الطبيعي للنبض عند البالغين هو 60–100 نبضة في الدقيقة." },
        { q: "ما هو معدل التنفس الطبيعي عند البالغين؟", o: ["8–12/دقيقة","12–20/دقيقة","20–30/دقيقة","15–25/دقيقة"], c: 1, ex: "معدل التنفس الطبيعي عند البالغين 12–20 نفساً في الدقيقة." },
        { q: "ما هي قيم ضغط الدم الطبيعي؟", o: ["SBP: 120–160 / DBP: 70–100","SBP: 90–139 / DBP: 60–89","SBP: 80–120 / DBP: 50–80","SBP: 140–180 / DBP: 90–110"], c: 1, ex: "ضغط الدم الطبيعي: الانقباضي 90–139 والانبساطي 60–89 mmHg." },
        { q: "ما الذي ينظّم درجة حرارة الجسم؟", o: ["القلب","الكبد","الهيبوثلامس","الغدة الدرقية"], c: 2, ex: "الهيبوثلامس هو المركز الرئيسي لتنظيم درجة حرارة الجسم في الدماغ." },
        { q: "متى يجب إيقاف التبريد الجسدي للمريض المُحمّ؟", o: ["عند وصول الحرارة لـ 37°C","عند بدء المريض بالارتجاف","بعد ساعة من بدء العلاج","عند طلب المريض ذلك"], c: 1, ex: "يجب إيقاف التبريد الجسدي فور بدء المريض بالارتجاف لأن الارتجاف نفسه يرفع الحرارة." },
        { q: "ما تعريف Orthopnea؟", o: ["سرعة التنفس","انقطاع النفس","صعوبة التنفس في الاستلقاء تتحسن بالجلوس أو الوقوف","التنفس الصاخب"], c: 2, ex: "Orthopnea: صعوبة التنفس في وضعية الاستلقاء تتحسن مع الجلوس أو الوقوف." }
      ]
    },

    // ════════════════════════════════════
    // CHAPTER 6 — HYGIENE
    // ════════════════════════════════════
    {
      id: 6, title: "النظافة الشخصية", titleEn: "Hygiene", icon: "🧼", accent: "#06b6d4", dark: "#002030",
      slides: [
        { id: "6-intro", heading: "النظافة — Hygiene", body: [
          { type: "term", en: "Hygiene", ar: "النظافة الشخصية", phonetic: "ˈhaɪdʒiːn", def_en: "Practices that promote health through personal cleanliness.", def_ar: "ممارسات تعزّز الصحة من خلال النظافة الشخصية." },
          { type: "checkmarks", items: [
            { en: "Bathing; cleaning and maintaining fingernails and toenails", ar: "الاستحمام وتنظيف الأظافر والمحافظة عليها" },
            { en: "Performing oral care", ar: "العناية بالفم والأسنان" },
            { en: "Shampooing and grooming hair", ar: "غسل وتمشيط الشعر" },
            { en: "Maintaining hearing aids and eyeglasses", ar: "الحفاظ على أجهزة السمع والنظارات" }
          ]}
        ]},
        { id: "6-skin", heading: "الجلد والجهاز الجلدي — Integumentary System", body: [
          { type: "bilingual", en: "Skin layers: 1. Epidermis 2. Dermis 3. Subcutaneous layer", ar: "طبقات الجلد: 1. البشرة  2. الأدمة  3. تحت الجلد", en_ph_ar: "سكين ليرز: إبيديرمس، ديرمس، سبكيوتينيوس" },
          { type: "checkmarks", items: [
            { en: "Protection — primary defense barrier", ar: "الحماية — الحاجز الدفاعي الأول" },
            { en: "Regulate temperature", ar: "تنظيم الحرارة" },
            { en: "Fluids and chemical balance", ar: "توازن السوائل والمواد الكيميائية" },
            { en: "Sensation (touch, pain, temperature)", ar: "الإحساس (اللمس، الألم، الحرارة)" },
            { en: "Assist in vitamin D synthesis", ar: "المساعدة في تركيب فيتامين D" }
          ]}
        ]},
        { id: "6-bathing", heading: "الاستحمام — Bathing", body: [
          { type: "checkmarks", items: [
            { en: "Eliminates body odor", ar: "يُزيل رائحة الجسم" },
            { en: "Reduces potential for infection", ar: "يقلل من احتمالية العدوى" },
            { en: "Stimulates circulation", ar: "يُحفّز الدورة الدموية" },
            { en: "Provides refreshed and relaxed feeling", ar: "يُعطي شعوراً بالانتعاش والاسترخاء" },
            { en: "Improves self-image", ar: "يُحسّن الصورة الذاتية" }
          ]},
          { type: "numbered-bilingual", items: [
            { en: "Tub bath or shower — no contraindication", ar: "الحوض أو الدش — لا موانع" },
            { en: "Partial bath — washing only soiling areas/body odor sources", ar: "الاستحمام الجزئي — المناطق الأكثر اتساخاً أو رائحة فقط" },
            { en: "Bed bath — basin of water at bedside (dependent clients)", ar: "الاستحمام في السرير — حوض ماء بجانب السرير (للعاجزين)" },
            { en: "Towel bath — single large towel covers and washes client", ar: "الاستحمام بالمنشفة — منشفة كبيرة واحدة للتغطية والغسيل" },
            { en: "Bag bath — disposable cloths in plastic bag", ar: "الاستحمام بالأكياس — قطع قماش للاستخدام مرة واحدة" }
          ]}
        ]},
        { id: "6-special-baths", heading: "الاستحمام العلاجي — Therapeutic Bathing", body: [
          { type: "numbered-bilingual", items: [
            { en: "Sitz bath — immersion of buttocks/perineum in circulating water. Purpose: remove blood/stool, reduce swelling, relieve discomfort (hemorrhoids, episiotomy)", ar: "الحمام المقعدي — غمر الأرداف والعجان. الغرض: إزالة الدم والبراز، تقليل الورم، تخفيف الانزعاج (البواسير، خياطة الولادة)" },
            { en: "Sponge bath — tepid water applied to skin. Purpose: reduces fever", ar: "الاستحمام بالإسفنجة — ماء فاتر على الجلد. الغرض: تخفيض الحمى" },
            { en: "Medicated bath — soaking in water with substance (e.g., sodium bicarbonate). Purpose: relieve itching", ar: "الاستحمام الدوائي — ماء مخلوط بمادة (مثل بيكربونات الصوديوم). الغرض: تخفيف الحكة" },
            { en: "Whirlpool bath — warm agitated water. Purpose: improve circulation, joint mobility, remove dead tissue, relieve discomfort", ar: "حمام الدوامة — ماء دافئ متحرك. الغرض: تحسين الدورة الدموية وحركة المفاصل وإزالة الأنسجة الميتة" }
          ]}
        ]},
        { id: "6-shaving", heading: "الحلاقة — Shaving", body: [
          { type: "highlight", en: "Safety razor CONTRAINDICATED for: anticoagulant/thrombolytic users, high-dose aspirin takers, hemophilia, liver disease with impaired clotting, rashes, suicidal clients. USE ELECTRIC RAZOR instead.", ar: "شفرة الأمان ممنوعة لـ: مستخدمي مضادات التخثر، الأسبرين بجرعات عالية، الناعور، أمراض الكبد، الطفح الجلدي، الميول الانتحارية. استخدم ماكينة كهربائية بدلاً منها." }
        ]},
        { id: "6-oral-nail-hair", heading: "العناية بالفم والشعر والأظافر", body: [
          { type: "highlight", en: "Oral care for unconscious clients: Use SPECIAL PRECAUTIONS to avoid aspiration (pneumonia risk). Tooth brushing is preferred but keep client positioned to prevent fluid entering airway.", ar: "عناية الفم للمريض فاقد الوعي: استخدم احتياطات خاصة لمنع الشفط (خطر الالتهاب الرئوي). ضع المريض بوضعية تمنع دخول السائل لمجرى الهواء." },
          { type: "highlight", en: "Nail care with EXTREME CAUTION for: clients with diabetes, impaired circulation, or thick nails.", ar: "رعاية الأظافر بحذر بالغ لـ: مرضى السكري، ضعف الدورة الدموية، الأظافر السميكة." }
        ]}
      ],
      vocab: [
        { en: "Hygiene", ar: "النظافة الشخصية", ph: "ˈhaɪdʒiːn", ph_ar: "هايجين" },
        { en: "Integumentary system", ar: "الجهاز الجلدي", ph: "ɪnˌteɡjʊˈmentri", ph_ar: "إنتيغيومينتاري سيستم" },
        { en: "Epidermis", ar: "البشرة (الطبقة الخارجية)", ph: "ˌepɪˈdɜːmɪs", ph_ar: "إبيديرمس" },
        { en: "Dermis", ar: "الأدمة (الطبقة الوسطى)", ph: "ˈdɜːmɪs", ph_ar: "ديرمس" },
        { en: "Sitz bath", ar: "الحمام المقعدي", ph: "sɪts bɑːθ", ph_ar: "سيتز باث" },
        { en: "Sponge bath", ar: "الاستحمام بالإسفنجة (لتخفيض الحمى)", ph: "spʌndʒ bɑːθ", ph_ar: "سبانج باث" },
        { en: "Bed bath", ar: "الاستحمام في السرير", ph: "bed bɑːθ", ph_ar: "بيد باث" },
        { en: "Oral hygiene", ar: "نظافة الفم", ph: "ˈɔːrəl ˈhaɪdʒiːn", ph_ar: "أورال هايجين" },
        { en: "Aspiration", ar: "الشفط (دخول سائل للرئة)", ph: "ˌæspɪˈreɪʃən", ph_ar: "أسبيريشن" },
        { en: "Sebum", ar: "الزهم (الإفراز الدهني للجلد)", ph: "ˈsiːbəm", ph_ar: "سيبم" },
        { en: "Anticoagulant", ar: "مضاد التخثر", ph: "ˌæntɪkəʊˈæɡjʊlənt", ph_ar: "أنتيكواغيولنت" },
        { en: "Hemophilia", ar: "الناعور / الهيموفيليا", ph: "ˌhiːməʊˈfɪlɪə", ph_ar: "هيموفيليا" }
      ],
      quiz: [
        { q: "ما هي وظائف الجلد الخمس؟", o: ["الحماية والتنفس فقط","الحماية وتنظيم الحرارة وتوازن السوائل والإحساس وتركيب فيتامين D","الحماية والهضم","الإحساس فقط"], c: 1, ex: "وظائف الجلد الخمس: الحماية، تنظيم الحرارة، توازن السوائل والمواد الكيميائية، الإحساس، وتركيب فيتامين D." },
        { q: "ما الغرض من الحمام المقعدي (Sitz bath)؟", o: ["تخفيض الحرارة","إزالة الدم والبراز، تقليل الورم، تخفيف الانزعاج","علاج التهابات الجلد","تحسين الدورة الدموية"], c: 1, ex: "الحمام المقعدي: إزالة الدم/البراز/البول، تقليل الورم المحلي، وتخفيف الانزعاج (كالبواسير والخياطة)." },
        { q: "للأي المرضى يُمنع استخدام شفرة الحلاقة الأمان؟", o: ["كبار السن فقط","مرضى السكري فقط","مستخدمو مضادات التخثر والناعور وأمراض الكبد والطفح والميول الانتحارية","المرضى ذوو الشعر الكثيف"], c: 2, ex: "يُمنع استخدام شفرة الأمان لمتلقي مضادات التخثر، الأسبرين عالي الجرعة، الناعور، أمراض الكبد، الطفح الجلدي، والميول الانتحارية." },
        { q: "ما الخطر الرئيسي عند العناية بفم المريض فاقد الوعي؟", o: ["سقوط الأسنان","الشفط (دخول السوائل للرئة — خطر الالتهاب الرئوي)","نزيف اللثة","تفاعل دوائي"], c: 1, ex: "الشفط (aspiration) هو الخطر الأساسي — يؤدي إلى الالتهاب الرئوي، لذا يجب وضع المريض بوضعية مناسبة ومنع دخول السائل لمجرى الهواء." },
        { q: "لأي الفئات يجب تقديم رعاية الأظافر بحذر بالغ؟", o: ["الأطفال فقط","كبار السن فقط","مرضى السكري وضعف الدورة الدموية وأصحاب الأظافر السميكة","الجميع بنفس الدرجة"], c: 2, ex: "الحذر الشديد في رعاية الأظافر لمرضى السكري (بطء الشفاء)، ضعف الدورة الدموية، والأظافر السميكة لتجنب الجروح والعدوى." }
      ]
    },

    // ════════════════════════════════════
    // CHAPTER 7 — BODY MECHANICS & POSITIONING
    // ════════════════════════════════════
    {
      id: 7, title: "ميكانيكا الجسم والوضعيات", titleEn: "Body Mechanics & Positioning", icon: "🛏️", accent: "#8b5cf6", dark: "#1a0a40",
      slides: [
        { id: "7-intro", heading: "ميكانيكا الجسم — Body Mechanics", body: [
          { type: "term", en: "Disuse syndrome", ar: "متلازمة عدم الاستخدام", phonetic: "dɪsˈjuːs ˈsɪndrəʊm", def_en: "Signs and symptoms that result from inactivity. Inactivity leads to deterioration of health.", def_ar: "علامات وأعراض ناتجة عن عدم الحركة. عدم الحركة يؤدي إلى تدهور الصحة." },
          { type: "term", en: "Body mechanics", ar: "ميكانيكا الجسم", phonetic: "ˈbɒdi mɪˈkænɪks", def_en: "Efficient use of the musculoskeletal system that increases muscle effectiveness, reduces fatigue, helps avoid repetitive strain injuries.", def_ar: "الاستخدام الفعّال للجهاز العضلي الهيكلي مما يزيد كفاءة العضلات ويقلل التعب ويمنع إصابات الإجهاد." }
        ]},
        { id: "7-posture", heading: "الوضعية السليمة واقفاً — Good Posture Standing", body: [
          { type: "checkmarks", items: [
            { en: "Keep feet parallel, weight equally distributed", ar: "أبقِ القدمين متوازيتين، وزّع الوزن بالتساوي" },
            { en: "Bend knees slightly", ar: "انحنِ بالركبتين قليلاً" },
            { en: "Maintain hips at even level", ar: "حافظ على مستوى متساوٍ للوركين" },
            { en: "Pull in buttocks, hold abdomen up", ar: "اسحب الأرداف للداخل وارفع البطن" },
            { en: "Hold chest up and slightly forward", ar: "ارفع الصدر قليلاً للأمام" },
            { en: "Keep shoulders even and centered above hips", ar: "الكتفان في مستوى واحد فوق الوركين" },
            { en: "Hold head erect with face forward", ar: "الرأس منتصب والوجه للأمام" }
          ]}
        ]},
        { id: "7-positioning", heading: "مبادئ توضيع المريض — Positioning Principles", body: [
          { type: "checkmarks", items: [
            { en: "Change position at LEAST every 2 hours", ar: "غيّر الوضعية كل ساعتين على الأقل" },
            { en: "Enlist assistance of at least one other caregiver", ar: "استعن بمقدّم رعاية آخر على الأقل" },
            { en: "Raise bed to caregiver's elbow height", ar: "ارفع السرير لمستوى كوع مقدّم الرعاية" },
            { en: "Turn client as complete unit to avoid twisting spine (Log roll)", ar: "اقلب المريض كوحدة واحدة لتجنب التواء العمود الفقري" },
            { en: "Place client in good alignment with joints slightly flexed", ar: "ضع المريض في محاذاة جيدة مع انثناء طفيف للمفاصل" },
            { en: "Use elevation to relieve swelling or promote comfort", ar: "استخدم الرفع لتخفيف الورم أو تعزيز الراحة" },
            { en: "Provide skin care after repositioning", ar: "قدّم العناية بالجلد بعد كل تغيير للوضعية" }
          ]}
        ]},
        { id: "7-positions", heading: "الوضعيات الشائعة — Common Positions", body: [
          { type: "numbered-bilingual", items: [
            { en: "Supine — lying on back. Risk: spine pressure, foot drop.", ar: "الاستلقاء على الظهر. خطر: ضغط على العمود الفقري، سقوط القدم." },
            { en: "Lateral — side-lying. Upper shoulder/arm must be supported.", ar: "الاستلقاء على الجنب. يجب دعم الكتف والذراع العلويين." },
            { en: "Prone — lying on abdomen. Good for skin breakdown, bronchiole drainage, hip extension.", ar: "الاستلقاء على البطن. مفيد لقرح الضغط، تصريف القصبات، تمديد الورك." },
            { en: "Sims' — semi-prone on left side, right knee drawn up. Used for rectal/vaginal procedures.", ar: "شبه البطن، جانب أيسر مع رفع الركبة اليمنى. يُستخدم للإجراءات المستقيمية والمهبلية." },
            { en: "Fowler's — semi-sitting. Low Fowler's 30°, Semi-Fowler's 45°, High Fowler's 60°–90°. Helpful for dyspnea.", ar: "شبه الجلوس. منخفض 30°، متوسط 45°، عالٍ 60–90°. مفيد لصعوبة التنفس." }
          ]}
        ]},
        { id: "7-devices", heading: "أجهزة التوضيع — Positioning Devices", body: [
          { type: "checkmarks", items: [
            { en: "Pillows — support and elevate body parts", ar: "الوسائد — دعم وتحريك أجزاء الجسم" },
            { en: "Trochanter rolls — prevent legs from turning outward", ar: "أسطوانات القانطرة — تمنع انقلاب الساقين للخارج" },
            { en: "Hand rolls — preserve grasping ability; prevent finger contractures", ar: "أسطوانات اليد — تحافظ على قدرة الإمساك وتمنع تقلص الأصابع" },
            { en: "Foot boards/boots/splints — prevent foot drop", ar: "ألواح القدم والأحذية والجبائر — تمنع سقوط القدم" },
            { en: "Trapeze — triangular metal piece over head of bed for client movement", ar: "قضيب التعليق — قطعة معدنية مثلثية فوق رأس السرير تساعد المريض على الحركة" },
            { en: "Side rails — aid position changes; safety device", ar: "حواجز السرير الجانبية — تساعد على تغيير الوضعية وتوفير الأمان" }
          ]}
        ]},
        { id: "7-mattress", heading: "أنواع المراتب العلاجية", body: [
          { type: "numbered-bilingual", items: [
            { en: "Static air mattress — fixed volume of air", ar: "مرتبة هوائية ثابتة — حجم ثابت من الهواء" },
            { en: "Alternating air mattress — channels inflate/deflate alternately (pressure relief)", ar: "مرتبة هوائية متناوبة — قنوات تنفخ وتنكمش بالتناوب (تخفيف الضغط)" },
            { en: "Water mattress — supports body, equalizes pressure per square inch", ar: "مرتبة مائية — تدعم الجسم وتوزّع الضغط بالتساوي" }
          ]}
        ]}
      ],
      vocab: [
        { en: "Disuse syndrome", ar: "متلازمة عدم الاستخدام", ph: "dɪsˈjuːs ˈsɪndrəʊm", ph_ar: "ديسيوز سيندروم" },
        { en: "Body mechanics", ar: "ميكانيكا الجسم", ph: "ˈbɒdi mɪˈkænɪks", ph_ar: "بودي ميكانيكس" },
        { en: "Posture", ar: "الوضعية / الهيئة", ph: "ˈpɒstʃər", ph_ar: "بوسشر" },
        { en: "Supine position", ar: "الاستلقاء على الظهر", ph: "suːˈpaɪn pəˈzɪʃən", ph_ar: "سيوبين بوزيشن" },
        { en: "Lateral position", ar: "الوضعية الجانبية", ph: "ˈlætərəl pəˈzɪʃən", ph_ar: "لاتيرال بوزيشن" },
        { en: "Prone position", ar: "الاستلقاء على البطن", ph: "prəʊn pəˈzɪʃən", ph_ar: "برون بوزيشن" },
        { en: "Sims' position", ar: "وضعية سيمز (شبه البطن)", ph: "sɪmz pəˈzɪʃən", ph_ar: "سيمز بوزيشن" },
        { en: "Fowler's position", ar: "وضعية فاولر (شبه الجلوس)", ph: "ˈfaʊlərz pəˈzɪʃən", ph_ar: "فاولرز بوزيشن" },
        { en: "Foot drop", ar: "سقوط القدم", ph: "fʊt drɒp", ph_ar: "فوت دروب" },
        { en: "Contracture", ar: "تقلص العضلة", ph: "kənˈtræktʃər", ph_ar: "كونتراكشر" },
        { en: "Trapeze", ar: "قضيب التعليق", ph: "trəˈpiːz", ph_ar: "ترابيز" },
        { en: "Trochanter roll", ar: "أسطوانة القانطرة", ph: "trəˈkæntər rəʊl", ph_ar: "تروكانتر رول" },
        { en: "Log roll", ar: "القلب كوحدة واحدة", ph: "lɒɡ rəʊl", ph_ar: "لوغ رول" }
      ],
      quiz: [
        { q: "كم مرة يجب تغيير وضعية المريض غير المتحرك كحد أدنى؟", o: ["كل ساعة","كل ساعتين","كل 4 ساعات","كل 6 ساعات"], c: 1, ex: "يجب تغيير وضعية المريض غير المتحرك كل ساعتين على الأقل لمنع قرح الضغط وغيرها من مضاعفات عدم الحركة." },
        { q: "ما الوضعية المفيدة لمريض يعاني من صعوبة التنفس (Dyspnea)؟", o: ["وضعية البطن","الاستلقاء على الظهر","وضعية فاولر","وضعية سيمز"], c: 2, ex: "وضعية فاولر (شبه الجلوس) مفيدة لصعوبة التنفس لأنها تُسقط الأعضاء البطنية عن الحجاب الحاجز مما يتيح تبادل أكبر لحجم الهواء." },
        { q: "ما الغرض من أسطوانات اليد (Hand rolls)؟", o: ["منع سقوط القدم","منع تقلص أصابع اليد والمحافظة على قدرة الإمساك","رفع الذراع لتقليل الورم","دعم الكوع"], c: 1, ex: "أسطوانات اليد تحافظ على القدرة الوظيفية للإمساك وتمنع تقلص أصابع اليد (Contractures)." },
        { q: "ما وضعية سيمز (Sims' position)؟", o: ["الاستلقاء على البطن","شبه البطن على الجانب الأيسر مع رفع الركبة اليمنى","الاستلقاء على الظهر","الجلوس شبه المستقيم"], c: 1, ex: "وضعية سيمز: الاستلقاء شبه البطني على الجانب الأيسر مع رفع الركبة اليمنى. تُستخدم للإجراءات المستقيمية والمهبلية." },
        { q: "الاحتياط المهم عند قلب المريض من وضعية لأخرى:", o: ["قلبه بسرعة","قلبه كوحدة واحدة (Log roll) لتجنب التواء العمود الفقري","قلبه دائماً وحيداً","قلبه نحو الحائط دائماً"], c: 1, ex: "يجب قلب المريض كوحدة واحدة (Log roll) لتجنب التواء العمود الفقري ومنع الإصابة." }
      ]
    },

    // ════════════════════════════════════
    // CHAPTER 8 — SAFETY
    // ════════════════════════════════════
    {
      id: 8, title: "السلامة", titleEn: "Safety", icon: "🦺", accent: "#f59e0b", dark: "#2a1800",
      slides: [
        { id: "8-intro", heading: "السلامة — Safety", body: [
          { type: "term", en: "Safety", ar: "السلامة", phonetic: "ˈseɪfti", def_en: "Measures that prevent accidents or unintentional injuries. Hospital errors ranked 5th–8th leading cause of death.", def_ar: "إجراءات تمنع الحوادث والإصابات غير المتعمدة. أخطاء المستشفيات تُصنَّف في المرتبة 5–8 بين أسباب الوفاة." }
        ]},
        { id: "8-age", heading: "عوامل السلامة المرتبطة بالعمر", body: [
          { type: "numbered-bilingual", items: [
            { en: "Infants — rely on adults; risks: falling, unrestrained in cars", ar: "الرضع — يعتمدون على الكبار؛ مخاطر: السقوط، عدم التقييد في السيارة" },
            { en: "Toddlers — climbing, poisoning, falling downstairs, burns, electrocution, drowning", ar: "الأطفال الصغار — التسلق، التسمم، السقوط من الدرج، الحروق، الصعق الكهربائي، الغرق" },
            { en: "School-age/Adolescents — play and sports injuries without protective equipment", ar: "المدرسة والمراهقون — إصابات اللعب والرياضة بدون معدات حماية" },
            { en: "Adults — ignoring safety, fatigue, sensory changes, disease effects", ar: "البالغون — إهمال السلامة، الإرهاق، التغيرات الحسية، تأثيرات المرض" },
            { en: "Older adults — visual impairment, urinary urgency, postural hypotension, reduced coordination, mental confusion", ar: "كبار السن — ضعف البصر، الاستعجال البولي، الهبوط الوضعي، تراجع التنسيق والذاكرة" }
          ]}
        ]},
        { id: "8-latex", heading: "التحسس من اللاتكس — Latex Sensitization", body: [
          { type: "numbered-bilingual", items: [
            { en: "Contact dermatitis — delayed localized skin reaction (6–48 hours, lasting several days)", ar: "التهاب الجلد التماسي — تفاعل جلدي موضعي متأخر (6–48 ساعة، يستمر أياماً)" },
            { en: "Immediate hypersensitivity — swelling, itching, respiratory distress, hypotension, death in severe cases", ar: "تفاعل جهازي فوري — ورم، حكة، ضائقة تنفسية، هبوط ضغط، وفاة في الحالات الشديدة" },
            { en: "Cross-reaction to fruits/vegetables (similar molecular structure to latex)", ar: "تفاعل متقاطع مع الفواكه/الخضروات (تركيب جزيئي مشابه للاتكس)" }
          ]}
        ]},
        { id: "8-fire", heading: "إدارة الحرائق — Fire Management (RACE)", body: [
          { type: "highlight", en: "ALL employees must know and follow the agency's fire plan!", ar: "جميع الموظفين يجب أن يعرفوا ويتبعوا خطة الطوارئ من الحرائق!" },
          { type: "numbered-bilingual", items: [
            { en: "R — Rescue clients in the immediate vicinity of the fire", ar: "R — إنقاذ المرضى القريبين من الحريق أولاً" },
            { en: "A — Alarm — inform switchboard operator of fire's location", ar: "A — الإنذار — إبلاغ مشغل اللوحة عن موقع الحريق" },
            { en: "C — Contain — close doors and fire doors; don't use elevator", ar: "C — الاحتواء — أغلق الأبواب وأبواب الحريق؛ لا تستخدم المصعد" },
            { en: "E — Extinguish using appropriate fire extinguisher class", ar: "E — الإطفاء باستخدام نوع الطفاية المناسب" }
          ]}
        ]},
        { id: "8-hazards", heading: "المخاطر البيئية — Environmental Hazards", body: [
          { type: "bilingual", en: "Asphyxiation — airway obstruction. Carbon monoxide (CO) symptoms: flu-like + cherry-red skin + nausea/vomiting/headache/dizziness.", ar: "الاختناق — انسداد مجرى الهواء. أعراض أول أكسيد الكربون: شبيهة بالإنفلونزا + احمرار الجلد لون الكرز + غثيان/قيء/صداع/دوخة.", en_ph_ar: "أسفيكسيشن كوزد باي إيروي أبستراكشن" },
          { type: "bilingual", en: "Electrical shock — Macroshock: harmless, low amperage over large area. Microshock: low-voltage but HIGH-amperage — DANGEROUS. Grounding equipment reduces shock risk.", ar: "الصعق الكهربائي — الكبرى: غير ضار، تيار منخفض على مساحة كبيرة. الدقيقة: جهد منخفض لكن تيار عالٍ — خطيرة. التأريض يقلل الخطر.", en_ph_ar: "إيليكتريكال شوك" }
        ]},
        { id: "8-falls", heading: "السقوط — Falls", body: [
          { type: "highlight", en: "Falls are the most common accident with the most serious consequences in OLDER ADULTS.", ar: "السقوط هو أكثر الحوادث شيوعاً وأشدها خطورة لدى كبار السن." },
          { type: "checkmarks", items: [
            { en: "Contributing factors: visual impairment, gait/balance disorders, BP medications, urinary urgency, clutter, confusion", ar: "عوامل مساهمة: ضعف البصر، اضطرابات المشية والتوازن، أدوية ضغط الدم، الاستعجال البولي، الفوضى، الارتباك" }
          ]},
          { type: "checkmarks", items: [
            { en: "Prevention: well-lit environment, handrails, remove scatter rugs, nonskid shoes, grab bars in shower/toilet, nonskid mat in tub, use cane/walker if prescribed, mop spills immediately", ar: "الوقاية: إضاءة جيدة، مسكات يد، إزالة السجادات المتفرقة، أحذية غير انزلاقية، حواجز التمسك في الحمام، حصيرة غير انزلاقية، استخدام العصا/المشّاية، مسح السوائل فوراً" }
          ]}
        ]},
        { id: "8-restraints", heading: "المقيّدات — Restraints", body: [
          { type: "compare", label_a: "Physical Restraints — جسدية", label_b: "Chemical Restraints — كيميائية", rows: [
            { a: "Immobilize or reduce free movement", b: "Drugs used to manage behavior/movement" },
            { a: "تحدّ من حرية الحركة جسدياً", b: "أدوية للتحكم في السلوك وحرية الحركة" }
          ]},
          { type: "highlight", en: "IMPORTANT: Restraints may NOT be used for disciplinary reasons. They are the LAST intervention after all others are exhausted.", ar: "مهم: لا يجوز استخدام المقيّدات لأغراض تأديبية أبداً. إنها آخر تدخل يُستخدم بعد استنفاد جميع الخيارات الأخرى." }
        ]}
      ],
      vocab: [
        { en: "Safety", ar: "السلامة", ph: "ˈseɪfti", ph_ar: "سيفتي" },
        { en: "Latex sensitization", ar: "التحسس من اللاتكس", ph: "ˈleɪteks ˌsensɪtaɪˈzeɪʃən", ph_ar: "ليتيكس سينسيتايزيشن" },
        { en: "Asphyxiation", ar: "الاختناق", ph: "æsˌfɪksɪˈeɪʃən", ph_ar: "أسفيكسيشن" },
        { en: "Carbon monoxide (CO)", ar: "أول أكسيد الكربون", ph: "ˈkɑːbən mɒnˈɒksaɪd", ph_ar: "كاربون مونوكسيد" },
        { en: "Macroshock", ar: "الصدمة الكهربائية الكبرى (غير ضارة)", ph: "ˈmækrəʊʃɒk", ph_ar: "ماكروشوك" },
        { en: "Microshock", ar: "الصدمة الكهربائية الدقيقة (خطيرة)", ph: "ˈmaɪkrəʊʃɒk", ph_ar: "مايكروشوك" },
        { en: "RACE (fire management)", ar: "RACE لإدارة الحريق", ph: "reɪs", ph_ar: "ريس" },
        { en: "Physical restraint", ar: "المقيّد الجسدي", ph: "ˈfɪzɪkəl rɪˈstreɪnt", ph_ar: "فيزيكال ريستريينت" },
        { en: "Chemical restraint", ar: "المقيّد الكيميائي (دواء)", ph: "ˈkemɪkəl rɪˈstreɪnt", ph_ar: "كيميكال ريستريينت" },
        { en: "Contact dermatitis", ar: "التهاب الجلد التماسي", ph: "ˈkɒntækt ˌdɜːməˈtaɪtɪs", ph_ar: "كونتاكت ديرماتايتس" },
        { en: "Postural hypotension", ar: "الهبوط الضغطي الوضعي", ph: "ˈpɒstʃərəl ˌhaɪpəʊˈtenʃən", ph_ar: "بوسشرال هايبوتينشن" }
      ],
      quiz: [
        { q: "ما هي الأحرف الأولى من خطة إدارة الحريق RACE؟", o: ["Run, Alert, Call, Evacuate","Rescue, Alarm, Contain, Extinguish","Respond, Alert, Control, Exit","Rescue, Act, Close, Evacuate"], c: 1, ex: "RACE = Rescue (إنقاذ) ← Alarm (إنذار) ← Contain (احتواء) ← Extinguish (إطفاء)." },
        { q: "من أكثر الفئات العمرية عرضة لخطر السقوط الخطير؟", o: ["الرضع","الأطفال في سن المدرسة","البالغون الشباب","كبار السن"], c: 3, ex: "كبار السن أكثر عرضة للسقوط بسبب: ضعف البصر، الاستعجال البولي، الهبوط الوضعي، تراجع التنسيق والحركة." },
        { q: "الفرق بين الصدمة الكهربائية الكبرى (Macroshock) والدقيقة (Microshock):", o: ["لا فرق","الكبرى ضارة؛ الدقيقة غير ضارة","الكبرى توزيع غير ضار لتيار منخفض؛ الدقيقة جهد منخفض لكن تيار عالٍ وخطيرة","الكبرى تؤثر على القلب فقط"], c: 2, ex: "Macroshock: توزيع غير ضار لتيار منخفض على مساحة كبيرة. Microshock: جهد منخفض لكن تيار عالٍ يصل لعضلة القلب مباشرةً — خطيرة جداً." },
        { q: "متى يُعدّ استخدام المقيّدات مناسباً؟", o: ["لتأديب المرضى غير المتعاونين","دائماً للمرضى المضطربين","كآخر تدخل بعد استنفاد كل الخيارات الأخرى","حسب طلب الأهل فقط"], c: 2, ex: "المقيّدات تُستخدم فقط كآخر تدخل بعد استنفاد جميع الخيارات الأخرى. لا يجوز استخدامها لأغراض تأديبية." },
        { q: "ما الأعراض المميزة لتسمم أول أكسيد الكربون (CO)؟", o: ["صفراء الجلد وآلام البطن","أعراض شبيهة بالإنفلونزا + احمرار الجلد لون الكرز","طفح جلدي وحكة","ارتفاع الحرارة والقشعريرة فقط"], c: 1, ex: "أعراض التسمم بـ CO: شبيهة بالإنفلونزا + احمرار الجلد لون الكرز + غثيان + قيء + صداع + دوخة + ضعف عضلي." },
        { q: "أهم إجراء للوقاية من السقوط في المنزل:", o: ["الجلوس دائماً","وضع سجادات كثيرة","إزالة السجادات المتفرقة وتركيب حواجز التمسك في الحمام","استخدام الضوء الخافت ليلاً"], c: 2, ex: "إزالة السجادات المتفرقة وتركيب حواجز التمسك في الحمام وبجانب المرحاض من أهم إجراءات الوقاية من السقوط." }
      ]
    }

  ]
};
