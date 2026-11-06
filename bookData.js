const bookData = [
{
id: "module_01",
    title: "ماژول اول: معماری حیات و داربست سلولی",
    subtitle: "مقدمه‌ای بر ماتریکس خارج سلولی (ECM) و انواع بافت‌ها",
    shortTitle: "۱. معرفی ماتریکس",
    content: `
        <div class="space-y-12">
            
            <!-- بنر بلاگری و جذاب -->
            <div class="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-slate-900 to-indigo-950 p-10 text-white shadow-2xl">
                <div class="absolute -right-20 -top-20 opacity-10 text-[15rem] leading-none">🏙️</div>
                <div class="relative z-10">
                    <span class="inline-block py-1 px-3 rounded-full bg-indigo-500/30 border border-indigo-400/50 text-indigo-200 text-sm font-bold mb-4 backdrop-blur-sm">مفهوم کلیدی</span>
                    <h3 class="text-3xl font-black mb-4 leading-tight">سلول‌ها در خلأ زندگی نمی‌کنند!</h3>
                    <p class="text-lg text-indigo-100 leading-relaxed text-justify opacity-90 max-w-3xl">
                        تصور کنید سلول‌ها ساختمان‌های یک شهر هستند. آیا یک شهر فقط از ساختمان‌ها تشکیل شده؟ قطعاً نه! خیابان‌ها، پل‌ها و فضای سبز، <strong>فضای بین ساختمان‌ها</strong> را پر می‌کنند. در بدن ما، این فضای حیاتی، <strong>ماتریکس خارج سلولی (ECM)</strong> نام دارد<span class="hidden">[cite: 10]</span>. محیطی که نه‌تنها به سلول‌ها شکل می‌دهد، بلکه تعیین می‌کند چگونه زنده بمانند، تقسیم شوند و مهاجرت کنند<span class="hidden">[cite: 11]</span>!
                    </p>
                </div>
            </div>

            <!-- بخش مفاهیم پایه -->
            <div class="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                <h4 class="text-xl font-black text-slate-800 mb-4 border-r-4 border-blue-500 pr-3">حیات سلولی و هموستاز</h4>
                <p class="text-slate-600 leading-loose text-justify">
                    سلول‌ها واحد اساسی حیات هستند و هر سلول دارای توانمندی‌هایی مثل تولید انرژی، بازسازی، تکثیر و مقاومت است<span class="hidden">[cite: 9]</span>. البته در موجودات پرسلولی، برخی سلول‌ها تخصصی می‌شوند؛ مثلاً گلبول‌های قرمز خون (RBC) پس از بلوغ توانایی تقسیم را از دست می‌دهند تا کاملاً وقف انتقال اکسیژن و دی‌اکسید کربن شوند<span class="hidden">[cite: 9]</span>. تمام سلول‌های زنده یک ویژگی مشترک دارند: <strong>هموستاز (Homeostasis)</strong>؛ یعنی توانایی ثابت نگه داشتن محیط داخلی خود<span class="hidden">[cite: 10]</span>.
                </p>
            </div>

            <!-- مقایسه بافت‌ها با استایل کارت‌های معلق -->
            <div>
                <h4 class="text-xl font-black text-slate-800 mb-6 flex items-center gap-3">
                    <span class="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center text-xl">⚖️</span>
                    نبرد بافت‌ها: همبند در برابر پوششی
                </h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    <!-- کارت بافت همبند -->
                    <div class="group bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300 relative overflow-hidden">
                        <div class="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
                        <h5 class="text-2xl font-black text-emerald-700 mb-2">بافت همبند (پیوندی)</h5>
                        <p class="text-emerald-500 font-bold text-sm mb-6">Connective Tissue</p>
                        <ul class="space-y-4 text-slate-600 leading-relaxed">
                            <li class="flex items-start gap-3">
                                <span class="text-emerald-400 mt-1">●</span>
                                <span><strong>حجم ماتریکس:</strong> بسیار زیاد! بخش اعظم بافت را ماتریکس تشکیل می‌دهد<span class="hidden">[cite: 11]</span>.</span>
                            </li>
                            <li class="flex items-start gap-3">
                                <span class="text-emerald-400 mt-1">●</span>
                                <span><strong>وضعیت سلول‌ها:</strong> سلول‌ها به صورت پراکنده در ماتریکس قرار دارند و اتصالات بین‌سلولی نادر است<span class="hidden">[cite: 11]</span>.</span>
                            </li>
                            <li class="flex items-start gap-3">
                                <span class="text-emerald-400 mt-1">●</span>
                                <span><strong>تحمل فشار:</strong> در اینجا، این <strong>ماتریکس</strong> است که بار مکانیکی و فشارها را تحمل می‌کند (مثل سفتی استخوان یا مقاومت تاندون)<span class="hidden">[cite: 11]</span>.</span>
                            </li>
                        </ul>
                    </div>

                    <!-- کارت بافت پوششی -->
                    <div class="group bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-rose-300 transition-all duration-300 relative overflow-hidden">
                        <div class="absolute top-0 right-0 w-32 h-32 bg-rose-50 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
                        <h5 class="text-2xl font-black text-rose-700 mb-2">بافت اپیتلیال (پوششی)</h5>
                        <p class="text-rose-500 font-bold text-sm mb-6">Epithelial Tissue</p>
                        <ul class="space-y-4 text-slate-600 leading-relaxed">
                            <li class="flex items-start gap-3">
                                <span class="text-rose-400 mt-1">●</span>
                                <span><strong>حجم ماتریکس:</strong> بسیار اندک<span class="hidden">[cite: 11]</span>.</span>
                            </li>
                            <li class="flex items-start gap-3">
                                <span class="text-rose-400 mt-1">●</span>
                                <span><strong>وضعیت سلول‌ها:</strong> محکم به یکدیگر چسبیده‌اند و مقاومت بافت ناشی از همین چسبندگی است<span class="hidden">[cite: 11]</span>.</span>
                            </li>
                            <li class="flex items-start gap-3">
                                <span class="text-rose-400 mt-1">●</span>
                                <span><strong>مکان قرارگیری ماتریکس:</strong> به صورت یک لایه نازک به نام <strong>لامینای پایه (Basal Lamina)</strong> در زیر اپیتلیوم قرار دارد<span class="hidden">[cite: 11]</span>.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- دیپ‌دایو: اجزای ماتریکس -->
            <div class="bg-slate-50 border-2 border-slate-100 rounded-3xl p-8">
                <h4 class="text-xl font-black text-slate-800 mb-4 text-center">ترکیبات جادویی ماتریکس از چه ساخته شده‌اند؟</h4>
                <p class="text-center text-slate-600 mb-8 max-w-2xl mx-auto">ماکرومولکول‌های ماتریکس عمدتاً به صورت محلی و توسط سلول‌های داخل آن (مثل فیبروبلاست‌ها در بافت همبند) ترشح می‌شوند<span class="hidden">[cite: 11]</span>. این سوپ دارای دو ماده اصلی است<span class="hidden">[cite: 12]</span>:</p>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="bg-white p-6 rounded-2xl shadow-sm relative text-center">
                        <div class="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-3xl mx-auto -mt-12 mb-4 border-4 border-white shadow-md">💧</div>
                        <h5 class="font-black text-lg text-slate-800 mb-2">۱. ژل‌های کربوهیدراتی (GAGها)</h5>
                        <p class="text-slate-500 text-sm leading-relaxed">زنجیره‌های پلی‌ساکاریدی که با اتصال به پروتئین‌ها، <strong>پروتئوگلیکان‌ها</strong> را می‌سازند و یک ماده زمینه‌ای ژل‌مانند و بسیار هیدراته ایجاد می‌کنند<span class="hidden">[cite: 12]</span>.</p>
                    </div>
                    <div class="bg-white p-6 rounded-2xl shadow-sm relative text-center">
                        <div class="w-16 h-16 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center text-3xl mx-auto -mt-12 mb-4 border-4 border-white shadow-md">🧵</div>
                        <h5 class="font-black text-lg text-slate-800 mb-2">۲. پروتئین‌های فیبری</h5>
                        <p class="text-slate-500 text-sm leading-relaxed">شامل کلاژن، الاستین، فیبرونکتین و لامینین که وظیفه ایجاد ساختار، انعطاف‌پذیری و چسبندگی را بر عهده دارند<span class="hidden">[cite: 12]</span>.</p>
                    </div>
                </div>
            </div>
        </div>
    `,
    quiz: [
        {
            question: "کدام یک از سلول‌های زیر در حالت طبیعی (سلامت) و پس از بلوغ، توانایی تقسیم و تکثیر خود را از دست داده و صرفاً بر انتقال گازها متمرکز می‌شوند؟",
            options: [
                "سلول‌های بنیادی",
                "فیبروبلاست‌ها",
                "گلبول‌های قرمز خون",
                "کندروبلاست‌ها"
            ],
            answer: 2,
            explanation: "گلبول‌های قرمز خون (اریتروسیت‌ها) پس از بلوغ و ورود به جریان خون، توانایی تکثیر را از دست می‌دهند. این سلول‌ها هسته و اندامک‌های خود را از دست می‌دهند تا قابلیت اختصاصی انتقال گازهای اکسیژن و دی‌اکسید کربن را به حداکثر برسانند<span class=\"hidden\">[cite: 9]</span>."
        },
        {
            question: "توانایی سلول‌های زنده در ثابت نگه داشتن محیط داخلی خود در برابر تغییرات بیرونی چه نامیده می‌شود؟",
            options: [
                "آپوپتوز",
                "هموستاز (Homeostasis)",
                "متاستاز",
                "اندوسیتوز"
            ],
            answer: 1,
            explanation: "سلول‌های زنده دارای توانایی هموستاز (Homeostasis) هستند، به این معنی که می‌توانند محیط داخلی خود را با وجود تغییرات در محیط خارج، ثابت و در شرایط بهینه نگه دارند<span class=\"hidden\">[cite: 10]</span>."
        },
        {
            question: "کدام گزینه به درستی تفاوت اصلی ماتریکس خارج سلولی در بافت همبند و بافت اپیتلیال را بیان می‌کند؟",
            options: [
                "در بافت همبند ماتریکس بسیار کم است، اما در بافت اپیتلیال ماتریکس تمام فضای بین سلول‌های پراکنده را پر می‌کند.",
                "ماتریکس در بافت اپیتلیال مقاومت کششی ایجاد می‌کند، در حالی که در بافت همبند فقط نقش فیلتراسیون دارد.",
                "در بافت همبند ماتریکس فراوان بوده و ویژگی‌های عملکردی را تعیین می‌کند، اما در بافت اپیتلیال بسیار کم و به شکل لامینای پایه است.",
                "ماتریکس بافت همبند فاقد کلاژن است، در حالی که لامینای پایه در اپیتلیوم سرشار از سلول‌های فیبروبلاست است."
            ],
            answer: 2,
            explanation: "در بافت همبند، میزان ماتریکس بسیار زیاد است، سلول‌ها به صورت پراکنده در آن قرار دارند و این ماتریکس است که ویژگی‌های بافت را تعیین می‌کند. در مقابل، در بافت اپیتلیال سلول‌ها کاملاً به هم چسبیده‌اند و ماتریکس بسیار کم بوده و محدود به لایه‌ای به نام لامینای پایه (غشای پایه) در زیر اپیتلیوم است<span class=\"hidden\">[cite: 11]</span>."
        },
        {
            question: "در بیشتر بافت‌های همبند (پیوندی)، ماکرومولکول‌های ماتریکس خارج سلولی (ECM) عمدتاً توسط کدام سلول‌ها ترشح می‌شوند؟",
            options: [
                "استئوبلاست‌ها",
                "فیبروبلاست‌ها",
                "ماکروفاژها",
                "سلول‌های اپیتلیال"
            ],
            answer: 1,
            explanation: "ماکرومولکول‌هایی که ماتریکس را تشکیل می‌دهند عمدتاً به صورت محلی توسط سلول‌های داخل آن تولید می‌شوند. در بیشتر بافت‌های همبند، این مواد عمدتاً توسط سلول‌هایی به نام فیبروبلاست‌ها ترشح می‌شوند<span class=\"hidden\">[cite: 11, 12]</span>. (در غضروف توسط کندروبلاست‌ها و در استخوان توسط استئوبلاست‌ها ترشح می‌شوند<span class=\"hidden\">[cite: 12]</span>)."
        },
        {
            question: "دو دسته اصلی ماکرومولکول‌های تشکیل‌دهنده ماتریکس خارج سلولی (ECM) کدامند؟",
            options: [
                "پروتئین‌های فیبری و زنجیره‌های پلی‌ساکاریدی GAGs",
                "کلسترول و گلیکولیپیدها",
                "پمپ‌های غشایی و کانال‌های یونی",
                "آنزیم‌های سیتوزولی و اسیدهای نوکلئیک"
            ],
            answer: 0,
            explanation: "ماتریکس خارج سلولی از دو دسته اصلی تشکیل شده است: ۱- زنجیره‌های پلی‌ساکاریدی به نام گلیکوزآمینوگلیکان‌ها (GAGs) که به پروتئین‌ها متصل شده و پروتئوگلیکان‌ها را می‌سازند. ۲- پروتئین‌های فیبری (رشته‌ای) مانند کلاژن، الاستین، فیبرونکتین و لامینین<span class=\"hidden\">[cite: 12]</span>."
        },
        {
            question: "در بافت اپیتلیال (پوششی)، مهار کردن نیروهای تنشی و تحمل فشارهای وارده عمدتاً بر عهده کدام ساختار است؟",
            options: [
                "رشته‌های ضخیم کلاژن در بین سلول‌ها",
                "چسبندگی شدید سلول‌ها به یکدیگر",
                "فشار تورگور ناشی از تجمع آب در ماتریکس",
                "حضور استئوبلاست‌ها در لامینای پایه"
            ],
            answer: 1,
            explanation: "در بافت اپیتلیال، بر خلاف بافت همبند که ماتریکس بار مکانیکی را تحمل می‌کند، سلول‌ها بیشتر هستند و به شدت به یکدیگر متصل می‌باشند. این اتصال محکم سلول‌ها به یکدیگر باعث می‌شود که بافت در برابر نیروهای تنشی مقاومت کند<span class=\"hidden\">[cite: 11]</span>."
        },
        {
            question: "ماهیت و عملکرد زنجیره‌های گلیکوزآمینوگلیکان (GAGs) در ماتریکس بافت همبند چیست؟",
            options: [
                "ایجاد فیبرهای خشک و کشسان برای اتصال عضلات به استخوان‌ها.",
                "تشکیل یک ماده زمینه‌ای ژل‌مانند و بسیار هیدراته که در برابر فشارهای متراکم‌کننده مقاومت می‌کند.",
                "تسهیل انتقال پیام‌های عصبی در بین سلول‌های فیبروبلاست.",
                "تخریب موضعی غشای پایه برای تسهیل مهاجرت گلبول‌های سفید."
            ],
            answer: 1,
            explanation: "در ماتریکس، مولکول‌های GAG و پروتئوگلیکان‌ها یک ماده زمینه‌ای ژل‌مانند و بسیار هیدراته (آب‌دار) را تشکیل می‌دهند. این ژل پلی‌ساکاریدی در برابر نیروهای فشارآورنده به روی ماتریکس مقاومت می‌کند و همزمان اجازه عبور مواد مغذی را می‌دهد<span class=\"hidden\">[cite: 12]</span>."
        },
        {
            question: "تنوع ماتریکس خارج سلولی (ECM) در بافت‌های مختلف می‌تواند منجر به ایجاد کدام یک از ساختارهای زیر شود؟",
            options: [
                "ساختار سخت استخوان (با رسوب کلسیم)",
                "ماتریکس شفاف قرنیه چشم",
                "ساختارهای طناب‌مانند و با قدرت کششی فوق‌العاده در تاندون‌ها",
                "همه موارد"
            ],
            answer: 3,
            explanation: "تغییرات در مقدار نسبی و نحوه سازماندهی ماکرومولکول‌های ماتریکس، تنوع شگفت‌انگیزی ایجاد می‌کند. ماتریکس می‌تواند با رسوب کلسیم سخت شده و استخوان بسازد، می‌تواند ماتریکس شفاف قرنیه را شکل دهد، یا با سازماندهی رشته‌ای، مقاومت کششی تاندون‌ها را فراهم کند<span class=\"hidden\">[cite: 11]</span>."
        },
        {
            question: "لایه نازک ماتریکس که در مرز بین بافت اپیتلیوم و بافت همبند قرار دارد چه نام دارد؟",
            options: [
                "کورتکس سلولی",
                "لامینای پایه (غشای پایه)",
                "سارکولما",
                "رفت لیپیدی"
            ],
            answer: 1,
            explanation: "اپیتلیوم‌ها تقریباً همیشه روی یک لایه پشتیبان از بافت همبند قرار دارند. در مرز بین اپیتلیوم و بافت همبند، ماتریکس یک لایه نازک و تخصصی را تشکیل می‌دهد که لامینای پایه (Basal Lamina) نامیده می‌شود و در کنترل رفتار سلول مهم است<span class=\"hidden\">[cite: 11]</span>."
        },
        {
            question: "کدام گروه از پروتئین‌های فیبری ماتریکس، تقویت‌کننده اصلی ماتریکس بوده و مقاومت فیزیکی بافت همبند را تأمین می‌کنند؟",
            options: [
                "لامینین‌ها",
                "کلاژن‌ها",
                "اینتگرین‌ها",
                "کادهرین‌ها"
            ],
            answer: 1,
            explanation: "ماتریکس بافت همبند مملو از پلیمرهای رشته‌ای، مخصوصاً کلاژن است. الیاف کلاژن تقویت‌کننده ماتریکس هستند و بیشتر فشار مکانیکی و مقاومت فیزیکی که بافت تحمل می‌کند بر عهده این بخش از ماتریکس است<span class=\"hidden\">[cite: 11, 12]</span>."
        }
    ]
},
{
id: "module_02",
    title: "ماژول دوم: آهنرباهای مولکولی و ژل‌های ضدضربه",
    subtitle: "شگفتی‌های گلیکوزآمینوگلیکان‌ها (GAGs)، هیالورونان و پروتئوگلیکان‌ها",
    shortTitle: "۲. GAGها و پروتئوگلیکان‌ها",
    content: `
        <div class="space-y-12">
            
            <!-- بنر بلاگری -->
            <div class="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-teal-900 to-cyan-900 p-10 text-white shadow-2xl">
                <div class="absolute -left-10 -bottom-10 opacity-10 text-[12rem] leading-none">🧲</div>
                <div class="relative z-10">
                    <span class="inline-block py-1 px-3 rounded-full bg-cyan-500/30 border border-cyan-400/50 text-cyan-200 text-sm font-bold mb-4 backdrop-blur-sm">راز بیومکانیک زانو</span>
                    <h3 class="text-3xl font-black mb-4 leading-tight">چرا غضروف زانوی یک وزنه‌بردار له نمی‌شود؟</h3>
                    <p class="text-lg text-cyan-100 leading-relaxed text-justify opacity-90 max-w-3xl">
                        وقتی یک وزنه‌بردار ۲۰۰ کیلوگرم وزنه را بالای سر می‌برد، فشار وحشتناکی به مفاصل زانویش وارد می‌شود. سلول‌ها به تنهایی زیر این فشار پودر می‌شوند! اما یک **«ژلِ اسفنجیِ جادویی»** در ماتریکس وجود دارد که آب را مثل آهنربا به خود جذب می‌کند و فشارهای معادل صدها اتمسفر را خنثی می‌کند. بیایید با این اسفنج‌های مولکولی آشنا شویم<span class="hidden">[cite: 13, 14]</span>.
                    </p>
                </div>
            </div>

            <!-- مکانیسم GAGها (باکس هشدار و مراحل) -->
            <div class="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
                <div class="absolute top-0 right-0 w-2 h-full bg-teal-500"></div>
                <h4 class="text-xl font-black text-slate-800 mb-6">گلیکوزآمینوگلیکان‌ها (GAGs): سلاح مخفی ماتریکس</h4>
                <p class="text-slate-600 leading-loose mb-6">
                    این مولکول‌ها پلی‌ساکاریدهای خطی و بدون انشعابی هستند که از تکرار واحدهای دی‌ساکاریدی (یک قند آمینه‌دار + یک قند اورونیک) ساخته شده‌اند<span class="hidden">[cite: 13]</span>. اما جادوی آن‌ها در **بار الکتریکی‌شان** نهفته است:
                </p>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                    <div class="bg-teal-50 p-6 rounded-2xl border border-teal-100">
                        <div class="text-3xl mb-3">➖</div>
                        <h5 class="font-bold text-teal-800 mb-2">۱. بارهای منفی</h5>
                        <p class="text-sm text-teal-600">گروه‌های کربوکسیل و سولفات، آن‌ها را به <strong>منفی‌ترین مولکول‌های بدن حیوانات</strong> تبدیل می‌کنند<span class="hidden">[cite: 13]</span>.</p>
                    </div>
                    <div class="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                        <div class="text-3xl mb-3">🧂</div>
                        <h5 class="font-bold text-blue-800 mb-2">۲. تله‌ی سدیم</h5>
                        <p class="text-sm text-blue-600">این بارهای منفی، ابر عظیمی از کاتیون‌ها (مخصوصاً <strong>سدیم Na+</strong>) را به شدت به سمت خود می‌کشند<span class="hidden">[cite: 13, 14]</span>.</p>
                    </div>
                    <div class="bg-cyan-50 p-6 rounded-2xl border border-cyan-100">
                        <div class="text-3xl mb-3">🌊</div>
                        <h5 class="font-bold text-cyan-800 mb-2">۳. فشار تورگور</h5>
                        <p class="text-sm text-cyan-600">سدیم فعالِ اسمزی، حجم عظیمی از آب را به داخل ماتریکس می‌کشد و <strong>فشار تورمی (Turgor)</strong> بی‌نظیری ایجاد می‌کند<span class="hidden">[cite: 14]</span>.</p>
                    </div>
                </div>
            </div>

            <!-- هیالورونان (استثنای بزرگ) -->
            <div>
                <h4 class="text-xl font-black text-slate-800 mb-4 flex items-center gap-2">
                    <span class="text-amber-500">⭐</span> هیالورونان: یاغیِ ماتریکس!
                </h4>
                <p class="text-slate-600 leading-loose mb-4">
                    هیالورونان (اسید هیالورونیک) ساده‌ترین اما عجیب‌ترین GAG است. این مولکول غول‌پیکر (تا ۲۵۰۰۰ قند) تمام قوانین را زیر پا می‌گذارد<span class="hidden">[cite: 14]</span>:
                </p>
                <ul class="space-y-3 bg-amber-50 p-6 rounded-2xl border border-amber-100 text-amber-900 font-bold">
                    <li class="flex items-center gap-3"><span class="text-amber-500">✖</span> فاقد هرگونه گروه سولفات است<span class="hidden">[cite: 14]</span>.</li>
                    <li class="flex items-center gap-3"><span class="text-amber-500">✖</span> برخلاف بقیه GAGها، به هیچ هسته پروتئینی متصل نمی‌شود<span class="hidden">[cite: 14]</span>.</li>
                    <li class="flex items-center gap-3"><span class="text-emerald-500">✔</span> در دستگاه گلژی ساخته <strong>نمی‌شود</strong>! بلکه توسط آنزیم‌های غشایی مستقیماً از سطح غشای پلاسما به بیرون پمپ می‌شود<span class="hidden">[cite: 14]</span>.</li>
                </ul>
            </div>

            <!-- پروتئوگلیکان‌ها (جداول و نکات بالینی) -->
            <div class="bg-slate-800 text-slate-200 p-8 rounded-3xl shadow-lg relative overflow-hidden">
                <div class="absolute -right-10 -bottom-10 w-40 h-40 bg-indigo-500/30 rounded-full blur-3xl"></div>
                <h4 class="text-xl font-black text-indigo-400 mb-4">پروتئوگلیکان‌ها: فراتر از یک ژل ساده</h4>
                <p class="text-slate-300 leading-loose text-justify mb-6">
                    بقیه GAGها (غیر از هیالورونان) در شبکه آندوپلاسمی و گلژی به یک <strong>هسته پروتئینی</strong> متصل می‌شوند. این اتصال از طریق یک «تتراساکارید واسط» به اسیدآمینه <strong>سرین (Serine)</strong> انجام می‌شود<span class="hidden">[cite: 15]</span>. پروتئوگلیکان‌ها بیش از ۹۵٪ وزنشان قند است<span class="hidden">[cite: 16]</span> و عملکردهای حیرت‌انگیزی دارند:
                </p>

                <div class="space-y-4">
                    <div class="bg-slate-700/50 p-4 rounded-xl border border-slate-600 flex items-start gap-4">
                        <div class="text-2xl">🚰</div>
                        <div>
                            <strong class="text-white">فیلتراسیون کلیه (پرلکان):</strong> پروتئوگلیکان <em>پرلکان</em> در گلومرول کلیه مثل یک غربال عمل کرده و مانع خروج پروتئین‌ها به ادرار می‌شود<span class="hidden">[cite: 16]</span>.
                        </div>
                    </div>
                    <div class="bg-slate-700/50 p-4 rounded-xl border border-slate-600 flex items-start gap-4">
                        <div class="text-2xl">🚦</div>
                        <div>
                            <strong class="text-white">تنظیم سیگنال‌ها (هپاران سولفات و دکورین):</strong> هپاران سولفات به فاکتور رشد FGF متصل شده و آن را به گیرنده‌هایش ارائه می‌دهد. اما <em>دکورین</em> برعکس عمل کرده و فاکتور TGF-β را مهار می‌کند<span class="hidden">[cite: 16]</span>.
                        </div>
                    </div>
                    <div class="bg-slate-700/50 p-4 rounded-xl border border-slate-600 flex items-start gap-4">
                        <div class="text-2xl">📡</div>
                        <div>
                            <strong class="text-white">گیرنده‌های غشایی (سیندکان‌ها):</strong> <em>سیندکان‌ها (Syndecans)</em> پروتئوگلیکان‌هایی هستند که داخل غشای سلول فرو رفته‌اند! از بیرون به ماتریکس و از درون به اسکلت اکتینی سلول وصلند<span class="hidden">[cite: 18]</span>. جهش در نوع مشابه آن‌ها (Dally) در مگس سرکه باعث نقص شدید نمو می‌شود<span class="hidden">[cite: 18]</span>.
                        </div>
                    </div>
                </div>
            </div>

        </div>
    `,
    quiz: [
        {
            question: "کدام عامل بیوشیمیایی مسئول اصلی توانایی غضروف مفصلی در تحمل فشارهای مکانیکیِ معادل ده‌ها اتمسفر است؟",
            options: [
                "ایجاد پیوندهای دی‌سولفیدی متقاطع بین رشته‌های کلاژن در لامینای پایه",
                "تراکم بالای بارهای منفی در GAGها که منجر به جذب شدید یون سدیم و ایجاد فشار تورگور می‌شود",
                "اتصال کووالانسی مولکول هیالورونان به هسته تتراساکاریدی واسط",
                "ترشح بالای پروتئین دکورین که باعث سختی ماتریکس می‌گردد"
            ],
            answer: 1,
            explanation: "چگالی بالای بارهای منفی (کربوکسیل و سولفات) در GAGها، کاتیون‌ها (مخصوصاً سدیم) را به شدت جذب می‌کند. سدیم فعالِ اسمزی، آب فراوانی را به داخل ماتریکس می‌کشد که باعث ایجاد فشار تورمی (تورگور) شده و در برابر فشارهای مکانیکی مقاومت می‌کند<span class=\"hidden\">[cite: 13, 14]</span>."
        },
        {
            question: "بیماری ژنتیکی نادری که باعث کوتاهی قد، پیری زودرس و مشکلات پوستی و مفصلی می‌شود، ناشی از نقص در ساخت کدام یک از GAGهای زیر است؟",
            options: [
                "هیالورونان",
                "هپاران سولفات",
                "درماتان سولفات",
                "کراتان سولفات"
            ],
            answer: 2,
            explanation: "در یک بیماری ژنتیکی نادر، کمبود شدید در ساخت دی‌ساکاریدهای «درماتان سولفات» رخ می‌دهد که بیماران مبتلا به آن دچار کوتاهی قد، ظاهر پیری زودرس و مشکلات عمومی در پوست، مفاصل و استخوان‌ها می‌شوند<span class=\"hidden\">[cite: 14]</span>."
        },
        {
            question: "کدام یک از ویژگی‌های زیر در مورد ماکرومولکول «هیالورونان» (اسید هیالورونیک) کاملاً مختص آن است و در سایر GAGها دیده نمی‌شود؟",
            options: [
                "در دستگاه گلژی به هسته پروتئینی متصل شده و سپس ترشح می‌شود.",
                "دارای کوتاه‌ترین زنجیره پلی‌ساکاریدی در میان GAGهاست.",
                "فاقد گروه سولفات بوده و توسط آنزیم‌های غشایی مستقیماً از سطح پلاسمالم سنتز می‌شود.",
                "نیاز مطلق به حضور تتراساکارید واسط جهت پلیمریزاسیون دارد."
            ],
            answer: 2,
            explanation: "هیالورونان ساده‌ترین GAG است که فاقد هرگونه گروه سولفات است و برخلاف سایر GAGها در گلژی ساخته نمی‌شود، به پروتئین متصل نمی‌گردد، و مستقیماً توسط آنزیم‌های غشای پلاسمایی به بیرون سلول ترشح می‌شود<span class=\"hidden\">[cite: 14]</span>."
        },
        {
            question: "در ساختار پروتئوگلیکان‌ها، هسته تتراساکاریدی واسط (Link Tetrasaccharide) دقیقاً به کدام اسیدآمینه در هسته پروتئینی متصل می‌شود؟",
            options: [
                "لایزین (Lysine)",
                "تیروزین (Tyrosine)",
                "سرین (Serine)",
                "پرولین (Proline)"
            ],
            answer: 2,
            explanation: "اتصال بخش پلی‌ساکاریدی (GAG) به هسته پروتئینی در پروتئوگلیکان‌ها، از طریق یک هسته تتراساکاریدی واسط (شامل زایلوز-گالاکتوز-گالاکتوز-گلوکورونیک اسید) به اسیدآمینه‌ی «سرین» در زنجیره پپتیدی صورت می‌پذیرد<span class=\"hidden\">[cite: 15]</span>."
        },
        {
            question: "تمایز اصلی پروتئوگلیکان‌ها از گلیکوپروتئین‌های معمولی در چیست؟",
            options: [
                "پروتئوگلیکان‌ها فاقد پیوند کووالانسی بین قند و پروتئین هستند.",
                "در پروتئوگلیکان‌ها بیش از ۹۵ درصد وزن مولکول را کربوهیدرات‌های طویل و بدون شاخه تشکیل می‌دهد.",
                "گلیکوپروتئین‌ها برخلاف پروتئوگلیکان‌ها فقط در فضای داخل سلولی حضور دارند.",
                "پروتئوگلیکان‌ها منحصراً توسط سلول‌های اپیتلیال ساخته می‌شوند."
            ],
            answer: 1,
            explanation: "در گلیکوپروتئین‌ها حدود ۱ تا ۶۰ درصد وزن را کربوهیدرات (به صورت اولیگوساکاریدهای کوتاه و شاخه‌دار) تشکیل می‌دهد. اما در پروتئوگلیکان‌ها کربوهیدرات بسیار بیشتر است و بیش از ۹۵ درصد وزنشان را قندهای طویل و بدون شاخه (GAGها) تشکیل می‌دهند<span class=\"hidden\">[cite: 15, 16]</span>."
        },
        {
            question: "نقش پروتئوگلیکانِ «پرلکان (Perlecan)» در لامینای پایه (غشای پایه) گلومرول کلیه چیست؟",
            options: [
                "مهار فاکتور رشد مبدل بتا (TGF-β)",
                "اتصال غشای پلاسمایی به اسکلت اکتینی",
                "عملکرد به عنوان یک غربال (فیلتر) انتخابی برای جلوگیری از دفع ماکرومولکول‌ها",
                "تشکیل مجتمع‌های عظیم با هیالورونان جهت جذب آب"
            ],
            answer: 2,
            explanation: "پروتئوگلیکان‌ها می‌توانند ژل‌هایی با اندازه منافذ و چگالی بار متفاوت بسازند و به عنوان غربال عمل کنند. شواهد نشان می‌دهد پروتئوگلیکان پرلکان در لایه پایه گلومرول کلیه این نقش را ایفا کرده و مولکول‌های بزرگ را از جریان خون فیلتر می‌کند تا وارد ادرار نشوند<span class=\"hidden\">[cite: 16]</span>."
        },
        {
            question: "مکانیسم اثر زنجیره‌های هپاران سولفات بر فاکتورهای رشد فیبروبلاست (FGF) چگونه است؟",
            options: [
                "با مهار مستقیم اتصال FGF به گیرنده، تکثیر سلولی را متوقف می‌کند.",
                "FGFها را فاگوسیتوز کرده و تجزیه می‌نماید.",
                "به FGF متصل شده، آن را به صورت الیگومر درآورده و فعال‌سازی گیرنده‌های تیروزین کینازی را تسهیل می‌کند.",
                "با هیدرولیز FGFها، آن‌ها را به پیام‌رسان‌های ثانویه داخل سلولی تبدیل می‌کند."
            ],
            answer: 2,
            explanation: "زنجیره‌های هپاران سولفات پروتئوگلیکان‌ها به فاکتورهای رشد فیبروبلاست (FGF) متصل می‌شوند. این تعامل، مولکول‌های فاکتور رشد را به صورت الیگومر در می‌آورد و آن‌ها را قادر می‌سازد تا گیرنده‌های تیروزین کینازی سطح سلول را فعال کنند<span class=\"hidden\">[cite: 16]</span>."
        },
        {
            question: "کدام یک از پروتئوگلیکان‌های زیر مستقیماً فاکتور رشد مبدل بتا (TGF-β) را مهار می‌کند؟",
            options: [
                "پرلکان (Perlecan)",
                "دکورین (Decorin)",
                "آگریکان (Aggrecan)",
                "سیندکان (Syndecan)"
            ],
            answer: 1,
            explanation: "برخی از اعضای خانواده فاکتور رشد مبدل بتا (TGF-β) به پروتئین‌های اصلی چندین پروتئوگلیکان ماتریکس از جمله «دکورین» متصل می‌شوند که این اتصال سبب مهار فعالیت این فاکتورهای رشد می‌گردد<span class=\"hidden\">[cite: 16]</span>."
        },
        {
            question: "پروتئوگلیکان‌های خانواده «سیندکان‌ها (Syndecans)» دارای کدام ویژگی منحصر‌به‌فرد هستند؟",
            options: [
                "آن‌ها پروتئوگلیکان‌های گذرنده از غشای پلاسمایی هستند که از داخل با اسکلت اکتینی تعامل دارند.",
                "تنها پروتئوگلیکان‌هایی هستند که فاقد تتراساکارید واسط می‌باشند.",
                "به طور انحصاری در ماتریکس غضروف زانو وجود داشته و با هیالورونان مجتمع می‌شوند.",
                "فاقد هسته پروتئینی بوده و منحصراً از زنجیره‌های کراتان سولفات تشکیل شده‌اند."
            ],
            answer: 0,
            explanation: "سیندکان‌ها پروتئوگلیکان‌های غشای پلاسمایی هستند که هسته پروتئینیِ گذرنده از غشا (Transmembrane) دارند. دامنه خارج سلولی آن‌ها دارای GAG است و دامنه داخل سلولی‌شان با اسکلت سلولی اکتین در قشر سلول تعامل دارد<span class=\"hidden\">[cite: 18]</span>."
        },
        {
            question: "جهش و از کار افتادن پروتئوگلیکان Dally (یک هم‌گیرنده هپاران سولفات) در مگس سرکه، چه عواقبی به دنبال دارد؟",
            options: [
                "باعث تجمع بیش از حد هیالورونان در ماتریکس می‌شود.",
                "منجر به از کار افتادن سیگنال‌دهی پروتئین‌های Wingless و DPP شده و نقایص شدید نمو ایجاد می‌کند.",
                "سبب تبدیل بافت اپیتلیال به بافت همبند می‌شود.",
                "باعث پارگی آئورت به دلیل فقدان الاستین می‌گردد."
            ],
            answer: 1,
            explanation: "در مگس سرکه، سیگنال‌دهی توسط پروتئین Wingless به هم‌گیرنده‌ای به نام Dally (یک پروتئوگلیکان هپاران سولفات) وابسته است. جهش و نقص در Dally سبب از کار افتادن سیگنال‌دهی Wingless و همچنین سیگنال‌دهی DPP شده و نقایص شدید در نمو ایجاد می‌کند<span class=\"hidden\">[cite: 18]</span>."
        }
    ]
},
{
id: "module_03",
    title: "ماژول سوم: کلاژن‌ها، فولاد بیولوژیک",
    subtitle: "فراوان‌ترین پروتئین بدن و بیماری‌های مرتبط با آن",
    shortTitle: "۳. کلاژن و اسکوروی",
    content: `
        <div class="space-y-12">
            
            <!-- بنر بلاگری -->
            <div class="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-rose-900 to-red-950 p-10 text-white shadow-2xl">
                <div class="absolute -left-10 -bottom-10 opacity-10 text-[12rem] leading-none">⛓️</div>
                <div class="relative z-10">
                    <span class="inline-block py-1 px-3 rounded-full bg-red-500/30 border border-red-400/50 text-red-200 text-sm font-bold mb-4 backdrop-blur-sm">راز استحکام بافت‌ها</span>
                    <h3 class="text-3xl font-black mb-4 leading-tight">چرا پوست و استخوان ما از هم نمی‌پاشد؟</h3>
                    <p class="text-lg text-red-100 leading-relaxed text-justify opacity-90 max-w-3xl">
                        اگر GAGها اسفنج‌های جاذب آب هستند، پروتئین‌های فیبری نقش **کابل‌های فولادی** را در ماتریکس بازی می‌کنند. در میان این پروتئین‌ها، <strong>کلاژن</strong> با اختصاص ۲۵٪ از کل جرم پروتئینی پستانداران، پادشاه بی‌رقیب است<span class="hidden">[cite: 17]</span>. پروتئینی که جهش در آن می‌تواند استخوان‌ها را مانند شیشه شکننده کند یا باعث خونریزی لثه‌ها شود!
                    </p>
                </div>
            </div>

            <!-- ساختار کلاژن (باکس تایم‌لاین) -->
            <div class="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
                <div class="absolute top-0 right-0 w-2 h-full bg-rose-500"></div>
                <h4 class="text-xl font-black text-slate-800 mb-6">ساختار عجیب کلاژن: مارپیچ سه‌تایی</h4>
                <p class="text-slate-600 leading-loose mb-6 text-justify">
                    ویژگی مشترک تمام کلاژن‌ها، ساختار <strong>مارپیچ سه‌رشته‌ای (Triple Helix)</strong> است. این ساختار از سه زنجیره پلی‌پپتیدی به نام <em>زنجیره‌های آلفا</em> که در هم تنیده شده‌اند، تشکیل می‌شود<span class="hidden">[cite: 17]</span>. هر زنجیره حدود ۱۰۰۰ اسید آمینه دارد و برای فشردگی نیازمند ترکیب خاصی است:
                </p>
                
                <div class="space-y-4">
                    <div class="flex items-center gap-4 bg-rose-50 p-4 rounded-xl border border-rose-100">
                        <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center text-xl shadow-sm">🤏</div>
                        <div>
                            <h5 class="font-bold text-rose-800">نقش حیاتی گلیسین (Glycine)</h5>
                            <p class="text-sm text-rose-600">گلیسین کوچک‌ترین اسیدآمینه است و به طور منظم در <strong>هر جایگاه سوم</strong> زنجیره قرار می‌گیرد. این کوچکی اجازه می‌دهد سه رشته به شدت به هم فشرده شوند<span class="hidden">[cite: 17]</span>.</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-4 bg-rose-50 p-4 rounded-xl border border-rose-100">
                        <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center text-xl shadow-sm">🧬</div>
                        <div>
                            <h5 class="font-bold text-rose-800">پرولین (Proline)</h5>
                            <p class="text-sm text-rose-600">ساختار حلقوی پرولین باعث ایجاد پیچ‌خوردگی و پایداری ساختار مارپیچیِ هر یک از زنجیره‌های آلفا می‌شود<span class="hidden">[cite: 17]</span>.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- اسکوروی و ویتامین C (باکس هشدار بالینی) -->
            <div class="bg-amber-100 border border-amber-300 rounded-3xl p-8 relative shadow-inner">
                <div class="flex items-center gap-3 mb-4">
                    <span class="text-3xl">⚠️</span>
                    <h4 class="text-xl font-black text-amber-900">نکته بالینی: ملوانان، ویتامین C و اسکوروی</h4>
                </div>
                <p class="text-amber-800 leading-loose text-justify text-sm">
                    در شبکه آندوپلاسمی، اسیدآمینه‌های پرولین و لایزین باید هیدروکسیله شوند (تبدیل به هیدروکسی‌پرولین و هیدروکسی‌لایزین). گروه هیدروکسیلِ این اسیدآمینه‌ها پیوندهای هیدروژنی متقاطعی می‌سازد که مارپیچ سه‌تایی کلاژن را <strong>پایدار</strong> می‌کند<span class="hidden">[cite: 19]</span>. این فرآیند شدیداً به <strong>ویتامین C (اسید اسکوربیک)</strong> وابسته است<span class="hidden">[cite: 19]</span>.
                    <br><br>
                    در <strong>بیماری اسکوروی (Scurvy)</strong> ناشی از کمبود ویتامین C، مارپیچ سه‌تایی پایدار تشکیل نشده و کلاژنِ معیوب فوراً در داخل سلول تجزیه می‌شود<span class="hidden">[cite: 19]</span>. نتیجه؟ ضعف شدید عروق خونی (خونریزی) و لقی دندان‌ها<span class="hidden">[cite: 19]</span>!
                </p>
            </div>

            <!-- انواع کلاژن و بیماری‌ها (جدول مدرن) -->
            <div>
                <h4 class="text-xl font-black text-slate-800 mb-6 flex items-center gap-3">
                    <span class="w-10 h-10 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center text-xl">📋</span>
                    طبقه‌بندی کلاژن‌ها و پاتولوژی آن‌ها
                </h4>
                <div class="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
                    <table class="w-full text-right border-collapse">
                        <thead>
                            <tr class="bg-slate-100 text-slate-700 text-sm">
                                <th class="p-4 font-black w-1/4">نوع کلاژن</th>
                                <th class="p-4 font-black">محل حضور / ویژگی</th>
                                <th class="p-4 font-black text-rose-700">بیماری ژنتیکی مرتبط</th>
                            </tr>
                        </thead>
                        <tbody class="text-slate-600 text-sm">
                            <tr class="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                                <td class="p-4 font-bold text-indigo-700">کلاژن نوع I<br><span class="text-xs font-normal text-slate-400">(رشته‌ای)</span></td>
                                <td class="p-4 leading-relaxed">فراوان‌ترین پروتئین مهره‌داران. موجود در پوست و استخوان<span class="hidden">[cite: 17]</span>.</td>
                                <td class="p-4 font-bold text-rose-600 leading-relaxed">استئوجنزیس ایمپرفکتا<br>(استخوان‌های شکننده)<span class="hidden">[cite: 20]</span></td>
                            </tr>
                            <tr class="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                                <td class="p-4 font-bold text-indigo-700">کلاژن نوع II<br><span class="text-xs font-normal text-slate-400">(رشته‌ای)</span></td>
                                <td class="p-4 leading-relaxed">موجود در غضروف‌ها<span class="hidden">[cite: 20]</span>.</td>
                                <td class="p-4 font-bold text-rose-600 leading-relaxed">کندرودیسپلازی<br>(اختلالات مفصلی و استخوانی)<span class="hidden">[cite: 20]</span></td>
                            </tr>
                            <tr class="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                                <td class="p-4 font-bold text-indigo-700">کلاژن نوع III<br><span class="text-xs font-normal text-slate-400">(رشته‌ای)</span></td>
                                <td class="p-4 leading-relaxed">ایجاد کننده خاصیت ارتجاعی در پوست و عروق<span class="hidden">[cite: 20]</span>.</td>
                                <td class="p-4 font-bold text-rose-600 leading-relaxed">سندرم اهلرس دانلوز<br>(پوست کشسان و مفاصل دررفته)<span class="hidden">[cite: 20]</span></td>
                            </tr>
                             <tr class="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                                <td class="p-4 font-bold text-indigo-700">کلاژن نوع IV<br><span class="text-xs font-normal text-slate-400">(شبکه‌ای)</span></td>
                                <td class="p-4 leading-relaxed">ساختار نمدی‌شکل غشای پایه (لامینای پایه) را می‌سازد<span class="hidden">[cite: 18]</span>.</td>
                                <td class="p-4 font-bold text-slate-500 leading-relaxed">---</td>
                            </tr>
                            <tr class="hover:bg-slate-50 transition-colors">
                                <td class="p-4 font-bold text-indigo-700">کلاژن نوع VII<br><span class="text-xs font-normal text-slate-400">(لنگرانداز)</span></td>
                                <td class="p-4 leading-relaxed">لامینای پایه را به اپیتلیوم چندلایه متصل می‌کند (فراوان در پوست)<span class="hidden">[cite: 18]</span>.</td>
                                <td class="p-4 font-bold text-rose-600 leading-relaxed">تاول‌های پوستی در صورت نقص<span class="hidden">[cite: 30]</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- کلاژن‌های مرتبط با فیبریل -->
            <div class="bg-slate-800 text-slate-200 p-8 rounded-3xl shadow-lg relative overflow-hidden">
                <h4 class="text-xl font-black text-emerald-400 mb-4">کلاژن‌های استثنایی: مرتبط با فیبریل (IX و XII)</h4>
                <p class="text-slate-300 leading-loose text-justify mb-4">
                    این کلاژن‌ها (مثل نوع IX در غضروف و XII در تاندون) تفاوت‌های جالبی با کلاژن‌های رشته‌ای کلاسیک دارند<span class="hidden">[cite: 21]</span>:
                </p>
                <ul class="space-y-3 text-sm text-slate-300">
                    <li class="flex items-center gap-3"><span class="text-emerald-500 text-lg">✔</span> ساختار مارپیچی آن‌ها با نواحی <strong>غیر مارپیچی</strong> قطع می‌شود، لذا <strong>انعطاف‌پذیرترند</strong><span class="hidden">[cite: 21]</span>.</li>
                    <li class="flex items-center gap-3"><span class="text-emerald-500 text-lg">✔</span> پس از ترشح <strong>برش نمی‌خورند</strong> و حاوی پروپپتید هستند<span class="hidden">[cite: 21]</span>.</li>
                    <li class="flex items-center gap-3"><span class="text-emerald-500 text-lg">✔</span> در خارج سلول به صورت مستقل فیبریل تشکیل <strong>نمی‌دهند</strong>، بلکه به سطح سایر فیبریل‌ها متصل شده و آن‌ها را به هم وصل می‌کنند<span class="hidden">[cite: 21]</span>.</li>
                </ul>
            </div>

        </div>
    `,
    quiz: [
        {
            question: "فراوان‌ترین پروتئین در پستانداران که حدود ۲۵٪ از کل جرم پروتئین بدن را تشکیل می‌دهد، کدام است؟",
            options: [
                "الاستین",
                "فیبرونکتین",
                "کلاژن",
                "هیالورونان"
            ],
            answer: 2,
            explanation: "کلاژن‌ها فراوان‌ترین پروتئین در پستانداران هستند و به عنوان یک جزء اصلی پوست و استخوان، ۲۵٪ از کل جرم پروتئین در این خانواده را تشکیل می‌دهند<span class=\"hidden\">[cite: 17]</span>."
        },
        {
            question: "در ساختار مارپیچ سه‌رشته‌ای (Triple Helix) کلاژن، کدام اسیدآمینه به دلیل اندازه کوچکش، باید به طور منظم در هر جایگاه سوم قرار گیرد تا رشته‌ها به شدت به هم فشرده شوند؟",
            options: [
                "پرولین",
                "گلیسین",
                "سرین",
                "تیروزین"
            ],
            answer: 1,
            explanation: "گلیسین کوچک‌ترین اسیدآمینه است (فقط یک اتم هیدروژن به عنوان زنجیره جانبی دارد) و به طور منظم در هر سومین باقی‌مانده در سراسر ناحیه مرکزی زنجیره آلفا قرار می‌گیرد تا اجازه دهد سه زنجیره مارپیچی به هم فشرده شوند<span class=\"hidden\">[cite: 17]</span>."
        },
        {
            question: "علت اصلی ناپایداری مارپیچ سه‌رشته‌ای کلاژن در بیماران مبتلا به اسکوروی (Scurvy) چیست؟",
            options: [
                "جهش در ژن‌های کدکننده گلیسین در کلاژن نوع I.",
                "کمبود ویتامین C و عدم توانایی سلول در هیدروکسیله کردن اسیدآمینه‌های پرولین و لایزین.",
                "فعالیت بیش از حد آنزیم‌های متالوپروتئاز ماتریکسی.",
                "نقص در جدا شدن پروپپتیدها در خارج از سلول."
            ],
            answer: 1,
            explanation: "در بیماری اسکوروی ناشی از کمبود ویتامین C، فرآیند هیدروکسیلاسیون پرولین و لایزین (که برای تشکیل پیوندهای هیدروژنی بین زنجیره‌ای ضروری است) انجام نمی‌شود. در نتیجه زنجیره‌های معیوب نمی‌توانند مارپیچ پایدار تشکیل دهند و درون سلول تجزیه می‌شوند<span class=\"hidden\">[cite: 19]</span>."
        },
        {
            question: "کدام نوع کلاژن فراوان‌ترین نوع در مهره‌داران بوده و جهش در آن باعث بیماری استخوان‌های شکننده (استئوجنزیس ایمپرفکتا) می‌شود؟",
            options: [
                "نوع I",
                "نوع II",
                "نوع III",
                "نوع IV"
            ],
            answer: 0,
            explanation: "کلاژن نوع I فراوان‌ترین پروتئین در مهره‌داران است که در پوست و استخوان یافت می‌شود. جهش‌هایی که بر کلاژن نوع I تأثیر می‌گذارند باعث ایجاد بیماری استئوجنزیس ایمپرفکتا می‌شوند که در آن استخوان‌ها ضعیف هستند و به راحتی می‌شکنند<span class=\"hidden\">[cite: 17, 20]</span>."
        },
        {
            question: "کلاژن‌های شبکه‌ای مانند کلاژن نوع IV، جزء ساختاری اصلی کدام بخش از ماتریکس خارج سلولی هستند؟",
            options: [
                "ماتریکس غضروف مفاصل",
                "لامینای پایه (غشای پایه) زیر اپیتلیوم",
                "رشته‌های ضخیم درون تاندون‌ها",
                "استخوان‌های اسفنجی"
            ],
            answer: 1,
            explanation: "مولکول‌های کلاژن نوع IV (چهارم) ساختار ورقه یا شبکه‌ای شبیه نمد ایجاد می‌کنند که این شبکه بخش عمده لامینای پایه (غشای پایه) بالغ را تشکیل می‌دهد<span class=\"hidden\">[cite: 18]</span>."
        },
        {
            question: "بیماری سندرم اهلرس دانلوز (Ehlers-Danlos) با ویژگی‌هایی نظیر پوست آسیب‌پذیر و عروق خونی ضعیف و مفاصل بسیار متحرک، ناشی از جهش در کدام نوع کلاژن است؟",
            options: [
                "نوع I",
                "نوع II",
                "نوع III",
                "نوع VII"
            ],
            answer: 2,
            explanation: "جهش‌هایی که بر کلاژن نوع III تأثیر می‌گذارند باعث ایجاد سندرم اهلرس دانلوز می‌شوند که با پوست و عروق خونی آسیب‌پذیر و مفاصل بسیار متحرک مشخص می‌شود<span class=\"hidden\">[cite: 20]</span>."
        },
        {
            question: "وظیفه اصلی «پروپپتیدها» (اسیدآمینه‌های اضافی در دو انتهای پروکلاژن) قبل از ترشح به فضای خارج سلولی چیست؟",
            options: [
                "محافظت از کلاژن در برابر تجزیه توسط آنزیم‌های لیزوزومی.",
                "هدایت تشکیل درون‌سلولی مولکول سه‌رشته‌ای کلاژن و ممانعت از تشکیل پیش‌ازموعد فیبرهای بزرگ درون سلول.",
                "ایجاد اتصالات عرضی لایزینی برای پایداری حرارتی.",
                "اتصال کووالانسی کلاژن به گلیکوزآمینوگلیکان‌ها."
            ],
            answer: 1,
            explanation: "پروپپتیدها دو عملکرد دارند: ۱- هدایتِ تشکیلِ درون‌سلولیِ مولکول‌های کلاژن سه‌رشته‌ای. ۲- جلوگیری از تشکیل درون‌سلولی الیاف بزرگ کلاژن (که می‌تواند برای سلول فاجعه‌بار باشد). این پروپپتیدها پس از ترشح به فضای خارج سلولی توسط آنزیم‌ها جدا می‌شوند تا فیبریل‌ها تشکیل شوند<span class=\"hidden\">[cite: 19]</span>."
        },
        {
            question: "پایداری رشته‌های کلاژنِ مونتاژ شده در فضای بین‌سلولی (مانند مقاومت کششی تاندون آشیل) مستقیماً به کدام عامل بستگی دارد؟",
            options: [
                "میزان هیدراتاسیون GAGها.",
                "تشکیل پیوندهای کووالانسی متقاطع (Cross-links) بین اسیدآمینه‌های لایزین.",
                "اتصال به پروتئوگلیکان پرلکان.",
                "حضور بیش از حد پروتئین آگرین."
            ],
            answer: 1,
            explanation: "پس از تشکیل فیبرها در فضای بین‌سلولی، بین لایزین‌های رشته‌ها پیوندهای کووالانسی بین‌مولکولی متقاطع تشکیل می‌شود که به پایداری رشته‌ها کمک می‌کند. اگر اتصال متقاطع مهار شود، مقاومت کششی به شدت کاهش می‌یابد<span class=\"hidden\">[cite: 19, 20]</span>."
        },
        {
            question: "کلاژن‌های نوع IX و XII (کلاژن‌های مرتبط با فیبریل) چه تفاوتی با کلاژن‌های رشته‌ای کلاسیک (مثل نوع I) دارند؟",
            options: [
                "فاقد گلیسین بوده و ساختار بشکه بتا دارند.",
                "ساختار مارپیچی آن‌ها با نواحی غیر مارپیچی قطع می‌شود و در فضای خارج سلول به صورت مستقل فیبریل تشکیل نمی‌دهند.",
                "منحصراً درون دستگاه گلژی پلیمریزه می‌شوند.",
                "برای فعالیت نیازمند یون کلسیم هستند."
            ],
            answer: 1,
            explanation: "کلاژن‌های مرتبط با فیبریل (IX و XII) دارای نواحی غیرمارپیچی هستند که انعطاف‌پذیرشان می‌کند، پروپپتیدهایشان برش نمی‌خورد و مجتمع نمی‌شوند تا خودشان فیبریل بسازند، بلکه به سطح سایر فیبریل‌های کلاژن متصل می‌شوند و آن‌ها را سازماندهی می‌کنند<span class=\"hidden\">[cite: 21]</span>."
        },
        {
            question: "برش خوردن بخش C-ترمینال کلاژن نوع XVIII منجر به تولید کدام پپتید با خاصیت ضد رگ‌زایی (Anti-angiogenic) می‌شود؟",
            options: [
                "اندوستاتین",
                "تروپوالاستین",
                "فیبریلین",
                "دیستروگلیکان"
            ],
            answer: 0,
            explanation: "شکافتن بخش C-ترمینال کلاژن نوع XVIII یک پپتید به نام «اندوستاتین» تولید می‌کند که جلوی تشکیل رگ‌های خونی جدید را می‌گیرد و به عنوان یک داروی ضد سرطان بررسی شده است<span class=\"hidden\">[cite: 18]</span>."
        }
    ]
},
{
id: "module_04",
    title: "ماژول چهارم: فنرهای زیستی و چسب‌های هوشمند",
    subtitle: "راز کشسانی آئورت، سندرم مارفان و توالی جادویی RGD",
    shortTitle: "۴. الاستین و فیبرونکتین",
    content: `
        <div class="space-y-12">
            
            <!-- بنر بلاگری -->
            <div class="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-amber-500 to-orange-700 p-10 text-white shadow-2xl">
                <div class="absolute -left-10 -bottom-10 opacity-10 text-[12rem] leading-none">🪀</div>
                <div class="relative z-10">
                    <span class="inline-block py-1 px-3 rounded-full bg-orange-900/30 border border-orange-400/50 text-orange-100 text-sm font-bold mb-4 backdrop-blur-sm">انعطاف‌پذیری بافت‌ها</span>
                    <h3 class="text-3xl font-black mb-4 leading-tight">راز کشسانی آئورت قلب چیست؟</h3>
                    <p class="text-lg text-orange-50 leading-relaxed text-justify opacity-95 max-w-3xl">
                        کلاژن‌ها مثل کابل فولادی بافت را محکم می‌کنند، اما بافت‌هایی مثل ریه، پوست و شریان‌های بزرگ (مثل آئورت) باید بتوانند باز شوند و دوباره به حالت اول برگردند. اینجاست که <strong>الاستین (Elastin)</strong> وارد میدان می‌شود؛ پروتئینی که حداقل ۵ برابر بیشتر از یک کش لاستیکی قابلیت کشسان دارد<span class="hidden"></span>! ۵۰٪ از وزن خشک آئورت قلب شما فقط از همین فنرهای الاستیکی ساخته شده است<span class="hidden"></span>.
                    </p>
                </div>
            </div>

            <!-- ساختار الاستین و تفاوت با کلاژن -->
            <div class="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
                <div class="absolute top-0 right-0 w-2 h-full bg-amber-400"></div>
                <h4 class="text-xl font-black text-slate-800 mb-6 flex items-center gap-3">
                    <span class="text-2xl">🧬</span> الاستین؛ بی‌نظم اما کارآمد!
                </h4>
                <p class="text-slate-600 leading-loose mb-6 text-justify">
                    الاستین یک پروتئین به شدت آب‌گریز (Hydrophobic) است. مانند کلاژن سرشار از گلیسین و پرولین است، اما برخلاف کلاژن <strong>گلیکوزیله نیست و هیدروکسی‌لایزین ندارد</strong><span class="hidden"></span>. راز کشسانی آن در ساختار بی‌نظم آن نهفته است:
                </p>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="bg-amber-50 p-6 rounded-2xl border border-amber-100">
                        <h5 class="font-bold text-amber-800 mb-2">۱. پیچ‌خوردگی تصادفی (Random Coil)</h5>
                        <p class="text-sm text-amber-700 leading-relaxed">الاستین ساختار منظمی ندارد و شل و ول است! وقتی بافت کشیده می‌شود، این کلاف‌های درهم‌تنیده باز می‌شوند و وقتی کشش قطع می‌شود، دوباره جمع می‌شوند<span class="hidden"></span>.</p>
                    </div>
                    <div class="bg-amber-50 p-6 rounded-2xl border border-amber-100">
                        <h5 class="font-bold text-amber-800 mb-2">۲. اتصالات متقاطع لایزینی</h5>
                        <p class="text-sm text-amber-700 leading-relaxed">مولکول‌های ترشح شده (تروپوالاستین) از طریق پیوندهای کووالانسی متقاطع بین اسیدآمینه‌های <strong>لایزین</strong> به هم دوخته می‌شوند تا شبکه کشسان را بسازند<span class="hidden"></span>.</p>
                    </div>
                </div>
            </div>

            <!-- داربست فیبریلین و سندرم مارفان (هشدار بالینی) -->
            <div class="bg-rose-100 border border-rose-300 rounded-3xl p-8 relative shadow-inner">
                <div class="flex items-center gap-3 mb-4">
                    <span class="text-3xl">🚨</span>
                    <h4 class="text-xl font-black text-rose-900">سندرم مارفان: وقتی داربست فرو می‌ریزد!</h4>
                </div>
                <p class="text-rose-800 leading-loose text-justify text-sm">
                    الاستین به تنهایی نمی‌تواند الیاف تشکیل دهد. او روی یک داربست از میکروفیبریل‌های گلیکوپروتئینی به نام <strong>فیبریلین (Fibrillin)</strong> رسوب می‌کند<span class="hidden"></span>. اگر ژن فیبریلین جهش پیدا کند، الیاف الاستیک بافت پیوندی ناقص می‌شوند. این بیماری ژنتیکی <strong>سندرم مارفان (Marfan Syndrome)</strong> نام دارد. خطرناک‌ترین عارضه آن چیست؟ <strong>پارگی آئورت</strong> به دلیل از دست دادن خاصیت ارتجاعی شریان<span class="hidden"></span>!
                </p>
            </div>

            <!-- فیبرونکتین و توالی RGD -->
            <div class="bg-slate-800 text-slate-200 p-8 rounded-3xl shadow-lg relative overflow-hidden mt-8">
                <div class="absolute -left-20 -bottom-20 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl"></div>
                <h4 class="text-xl font-black text-cyan-400 mb-4 flex items-center gap-3">
                    <span class="text-3xl">🔗</span> فیبرونکتین و توالی جادویی RGD
                </h4>
                <p class="text-slate-300 leading-loose text-justify mb-6">
                    فیبرونکتین یک گلیکوپروتئین دایمری و چسبنده است (غیرساختاری) که زیرواحدهای آن با پیوند دی‌سولفیدی متصلند<span class="hidden"></span>. وظیفه اصلی آن؟ وصل کردن سلول به ماتریکس و هدایت مهاجرت سلول در دوران جنینی<span class="hidden"></span>.
                </p>

                <div class="bg-slate-700/50 p-6 rounded-2xl border border-slate-600 mb-6">
                    <h5 class="text-cyan-300 font-bold mb-3">رمز عبور: RGD</h5>
                    <p class="text-sm text-slate-300 leading-relaxed">
                        در یکی از حوزه‌های فیبرونکتین (تکرار نوع III)، یک توالی سه اسیدآمینه‌ای کلیدی وجود دارد: <strong>آرژینین - گلیسین - آسپارتیک اسید (RGD)</strong><span class="hidden"></span>. گیرنده‌های سطح سلول (به نام <strong>اینتگرین‌ها</strong>) دقیقاً این توالی را شناسایی کرده و به آن لنگر می‌اندازند<span class="hidden"></span>.
                    </p>
                </div>
                
                <div class="flex items-start gap-4 bg-emerald-900/30 p-5 rounded-2xl border border-emerald-500/30">
                    <div class="text-2xl mt-1">🐍</div>
                    <p class="text-sm text-emerald-200 leading-relaxed text-justify">
                        <strong>ترفند مارهای سمی:</strong> زهر برخی مارها حاوی پروتئین‌هایی به نام <em>دیس‌اینتگرین</em> است که توالی RGD دارند! این پروتئین‌ها گیرنده پلاکت‌های خون قربانی را اشغال کرده و مانع لخته شدن خون و باعث خونریزی شدید می‌شوند<span class="hidden"></span>.
                    </p>
                </div>
            </div>

        </div>
    `,
    quiz: [
        {
            question: "الاستین به عنوان یکی از مهمترین پروتئین‌های ساختاری، چه تفاوتی با کلاژن دارد؟",
            options: [
                "الاستین فاقد گلیسین و پرولین است.",
                "الاستین به شدت گلیکوزیله شده و هیدروکسی‌لایزین فراوان دارد.",
                "الاستین گلیکوزیله نیست و فاقد اسیدآمینه هیدروکسی‌لایزین است.",
                "الاستین همانند کلاژن دارای ساختار مارپیچ سه‌رشته‌ای (Triple Helix) منظم است."
            ],
            answer: 2,
            explanation: "الاستین یک پروتئین به شدت آب‌گریز است که اگرچه مانند کلاژن غنی از پرولین و گلیسین است، اما برخلاف کلاژن گلیکوزیله نیست و هیچ هیدروکسی‌لایزینی ندارد<span class=\"hidden\"></span>."
        },
        {
            question: "شکل‌گیری شبکه‌ی کشسان و فنری الاستین در بافت‌هایی مثل آئورت، ناشی از کدام ویژگی ساختاری آن است؟",
            options: [
                "ایجاد ساختار «پیچ‌خوردگی تصادفی» (Random Coil) و برقراری اتصالات عرضی بین لایزین‌ها.",
                "تشکیل بشکه بتا (Beta-barrel) و پلیمریزاسیون در دستگاه گلژی.",
                "فشردگی شدید رشته‌ها به دلیل حضور اسیدآمینه گلیسین در هر جایگاه سوم.",
                "اتصال به هیالورونان و ایجاد فشار تورگور اسمزی."
            ],
            answer: 0,
            explanation: "الاستین‌ها به شکل کلاف‌های شل و باز به نام «پیچ‌خوردگی‌های تصادفی» هستند. این مولکول‌ها از طریق ایجاد اتصالات عرضی کووالانسی بین ریشه‌های لایزین به هم وصل شده و شبکه‌ای می‌سازند که تحت کشش باز شده و مجدداً جمع می‌شود<span class=\"hidden\"></span>."
        },
        {
            question: "جهش در ژن کدکننده پروتئین «فیبریلین (Fibrillin)» باعث بروز کدام بیماری ژنتیکی و چه عارضه‌ی خطرناکی می‌شود؟",
            options: [
                "بیماری استئوجنزیس ایمپرفکتا - شکستگی استخوان‌ها",
                "سندرم مارفان - پارگی آئورت",
                "سندرم آلپورت - نارسایی کلیه",
                "اسکوروی - خونریزی لثه"
            ],
            answer: 1,
            explanation: "الاستین برای رسوب کردن به داربستی از میکروفیبریل‌ها به ویژه «فیبریلین» نیاز دارد. جهش در ژن فیبریلین باعث سندرم مارفان می‌شود که نقص در الیاف الاستیک بافت‌های پیوندی را به دنبال داشته و در شدیدترین حالت، آئورت مستعد پارگی است<span class=\"hidden\"></span>."
        },
        {
            question: "پروتئین «فیبرونکتین» در ماتریکس خارج سلولی چه عملکردی دارد؟",
            options: [
                "ایجاد ساختار نمدی در غشای پایه کلیه.",
                "پمپاژ یون کلسیم به داخل شبکه سارکوپلاسمی.",
                "نقش در چسبندگی سلول به ماتریکس و هدایت مهاجرت سلول‌ها در دوران جنینی.",
                "تأمین خاصیت ارتجاعی در بافت ریه."
            ],
            answer: 2,
            explanation: "فیبرونکتین یک گلیکوپروتئین بزرگ غیرساختاری است که دارای جایگاه‌های اتصالی برای ماکرومولکول‌های ماتریکس و گیرنده‌های سلولی است. این پروتئین هم در چسبندگی سلول به ماتریکس و هم در هدایت مهاجرت سلول‌ها در جنین مهره‌داران نقش حیاتی دارد<span class=\"hidden\"></span>."
        },
        {
            question: "گیرنده‌های غشایی سطح سلول (اینتگرین‌ها) برای اتصال به فیبرونکتین، کدام توالی اسیدآمینه‌ای را شناسایی می‌کنند؟",
            options: [
                "Gly-X-Y",
                "RGD (آرژینین-گلیسین-آسپارتیک اسید)",
                "پلی-گلوتامات",
                "تتراساکارید واسط"
            ],
            answer: 1,
            explanation: "توالی سه اسیدآمینه‌ای RGD (آرژینین-گلیسین-آسپارتیک اسید) در یکی از ماژول‌های فیبرونکتین قرار دارد و به عنوان لیگاند اختصاصی توسط گیرنده‌های اینتگرین در غشای سلول شناسایی می‌شود تا سلول را به ماتریکس متصل کند<span class=\"hidden\"></span>."
        },
        {
            question: "دیس‌اینتگرین‌های موجود در زهر برخی مارهای سمی چگونه باعث خونریزی در قربانی می‌شوند؟",
            options: [
                "با از بین بردن ویتامین C، مانع ساخت کلاژن و باعث پارگی عروق می‌شوند.",
                "آنزیم‌های متالوپروتئاز را فعال کرده و غشای پایه را تجزیه می‌کنند.",
                "با داشتن توالی RGD، گیرنده‌های پلاکت‌ها را اشغال کرده و از لخته شدن خون جلوگیری می‌کنند.",
                "با اتصال به هیالورونان، فشار تورگور خون را به شدت کاهش می‌دهند."
            ],
            answer: 2,
            explanation: "توالی RGD در پروتئین‌های انعقادی مانند فیبرینوژن هم وجود دارد. مارهای سمی پروتئین‌هایی به نام دیس‌اینتگرین (حاوی RGD) ترشح می‌کنند که با اتصال رقابتی به گیرنده پلاکت‌ها، مانع اتصال فیبرینوژن شده و از لخته شدن خون جلوگیری می‌کنند<span class=\"hidden\"></span>."
        },
        {
            question: "تأثیر اسکلت سلولی (اکتین) بر فیبرونکتین ترشح شده در فضای خارج سلولی چیست؟",
            options: [
                "اکتین با ترشح آنزیم لیزوزوم، فیبرونکتین را به قطعات کوچک تجزیه می‌کند.",
                "اکتین از طریق اینتگرین‌ها به فیبرونکتین کشش وارد کرده و با آشکار کردن جایگاه‌های پنهان، باعث پلیمریزه شدن فیبرونکتین‌ها می‌شود.",
                "اکتین باعث تبدیل فیبرونکتین به الاستین می‌شود.",
                "اکتین هیچ ارتباطی با فیبرونکتین خارج سلولی ندارد."
            ],
            answer: 1,
            explanation: "عملکرد انقباضی اکتین و میوزین در داخل سلول، از طریق اینتگرین‌ها به فیبرونکتین ماتریکس کشش وارد می‌کند. این کشیدگی سبب آشکار شدن جایگاه‌های اتصال پنهان در فیبرونکتین شده و باعث اتصال فیبرونکتین‌ها به هم و پلیمریزه شدن آن‌ها به شکل ماتریکس می‌گردد<span class=\"hidden\"></span>."
        },
        {
            question: "جهش‌هایی که باعث نقص در پروتئین «تروپوالاستین» می‌شوند، ضخامت کدام رگ خونی را تحت تأثیر قرار داده و باعث تنگی آن می‌شوند؟",
            options: [
                "سیاهرگ ششی",
                "ورید اجوف فوقانی",
                "آئورت و سایر شریان‌ها",
                "مویرگ‌های لنفاوی"
            ],
            answer: 2,
            explanation: "الاستین ۵۰٪ وزن خشک آئورت را تشکیل می‌دهد. جهش‌هایی که باعث کمبود الاستین در انسان می‌شوند منجر به تنگ شدن آئورت یا سایر شریان‌ها به دلیل رشد بیش از حد سلول‌های عضله صاف در دیواره شریان می‌گردند (انعطاف‌پذیری شریان بازدارنده رشد این سلول‌هاست)<span class=\"hidden\"></span>."
        },
        {
            question: "ساختار فیزیکی یک مونومر فیبرونکتین چگونه است؟",
            options: [
                "مارپیچ سه‌رشته‌ای حاوی گلیسین.",
                "کلاف درهم پیچیده آب‌گریز.",
                "دایمر تشکیل شده از دو زیرواحد بسیار بزرگ که در یک انتها با پیوند دی‌سولفیدی متصلند و حاوی ماژول‌های تکراری هستند.",
                "ساختار صلیبی شکل متشکل از زنجیره‌های آلفا، بتا و گاما."
            ],
            answer: 2,
            explanation: "فیبرونکتین یک مولکول دایمر است که از دو زیرواحد بسیار بزرگ تشکیل شده که در یک انتها توسط پیوندهای دی‌سولفید به هم متصل شده‌اند. هر زیرواحد از چندین ماژول تکراری (نوع I، II و III) تشکیل شده است<span class=\"hidden\"></span>."
        },
        {
            question: "پروتئین‌هایی مانند «تناسین» در هدایت مهاجرت سلول چه نقشی دارند؟",
            options: [
                "همیشه چسبندگی سلول را به شدت افزایش می‌دهند.",
                "بسته به نوع سلول می‌توانند چسبندگی سلول را افزایش یا مهار کنند (تعاملات ضدچسبندگی).",
                "سلول را فاگوسیتوز می‌کنند.",
                "تنها در بافت‌های بدون فشار مکانیکی بیان می‌شوند."
            ],
            answer: 1,
            explanation: "تناسین‌ها (Tenascins) پروتئین‌هایی هستند که معمولاً در بافت همبند تحت فشار فیزیکی بیان می‌شوند. آن‌ها بسته به نوع سلول می‌توانند چسبندگی را افزایش یا مهار کنند. تعاملات ضدچسبندگی برای هدایت مهاجرت سلول‌ها به اندازه تعاملات چسبنده مهم است<span class=\"hidden\"></span>."
        }
    ]
},
{
id: "module_05",
    title: "ماژول پنجم: مرزهای هوشمند و معماری غشای پایه",
    subtitle: "فیلتراسیون کلیوی، سندرم آلپورت و ساختار صلیبی لامینین",
    shortTitle: "۵. غشای پایه و لامینین",
    content: `
        <div class="space-y-12">
            
            <!-- بنر بلاگری -->
            <div class="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-violet-900 to-fuchsia-900 p-10 text-white shadow-2xl">
                <div class="absolute -right-10 -bottom-10 opacity-10 text-[12rem] leading-none">🧱</div>
                <div class="relative z-10">
                    <span class="inline-block py-1 px-3 rounded-full bg-fuchsia-500/30 border border-fuchsia-400/50 text-fuchsia-100 text-sm font-bold mb-4 backdrop-blur-sm">مرزهای سلولی</span>
                    <h3 class="text-3xl font-black mb-4 leading-tight">غشای پایه؛ فراتر از یک دیوار ساده!</h3>
                    <p class="text-lg text-fuchsia-50 leading-relaxed text-justify opacity-95 max-w-3xl">
                        زیر تمام سلول‌های پوششی (اپیتلیال) بدن شما، یک لایه به شدت نازک اما بی‌نهایت مهم به ضخامت ۴۰ تا ۱۲۰ نانومتر پهن شده است: <strong>غشای پایه (Basement Membrane)</strong><span class="hidden"></span>. این ورقه نازک فقط یک جداکننده نیست؛ بلکه مثل یک صافی هوشمند خون را فیلتر می‌کند، بقای سلول را تضمین کرده و بزرگراهی برای مهاجرت سلول‌هاست!
                    </p>
                </div>
            </div>

            <!-- ساختار لامینین -->
            <div class="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
                <div class="absolute top-0 right-0 w-2 h-full bg-violet-500"></div>
                <h4 class="text-xl font-black text-slate-800 mb-6 flex items-center gap-3">
                    <span class="text-2xl">✝️</span> لامینین (Laminin): صلیب داربست‌ساز
                </h4>
                <p class="text-slate-600 leading-loose mb-6 text-justify">
                    لامینین-۱ اولین پروتئین ماتریکسی است که در دوران جنینی ظاهر می‌شود<span class="hidden"></span>. این پروتئین ساختاری شبیه یک <strong>صلیب نامتقارن</strong> دارد که از سه زنجیره بسیار بلند (آلفا، بتا و گاما) تشکیل شده و با پیوندهای دی‌سولفیدی به هم متصلند<span class="hidden"></span>. 
                </p>
                <div class="bg-violet-50 p-6 rounded-2xl border border-violet-100">
                    <h5 class="font-bold text-violet-800 mb-3">گیرنده‌های لامینین در سلول</h5>
                    <ul class="space-y-3 text-sm text-violet-700 leading-relaxed">
                        <li class="flex items-start gap-2"><span class="text-violet-500">✔️</span> <strong>اینتگرین‌ها:</strong> گیرنده‌های کلاسیک ماتریکس که به لامینین متصل می‌شوند<span class="hidden"></span>.</li>
                        <li class="flex items-start gap-2"><span class="text-violet-500">✔️</span> <strong>دیستروگلیکان (Dystroglycan):</strong> گیرنده کلیدی دیگری که در کنار اینتگرین، به لامینین متصل شده و اسکلت سلولی را محکم به غشای پایه پیوند می‌دهد<span class="hidden"></span>. (نیاز به یون Ca<sup>2+</sup> برای مونتاژ دارد<span class="hidden"></span>).</li>
                    </ul>
                </div>
            </div>

            <!-- اجزای غشای پایه و فیلتراسیون کلیه -->
            <div class="bg-slate-800 text-slate-200 p-8 rounded-3xl shadow-lg relative overflow-hidden mt-8">
                <h4 class="text-xl font-black text-emerald-400 mb-4 flex items-center gap-3">
                    <span class="text-3xl">🚰</span> غشای پایه و صافی کلیه (سندرم آلپورت)
                </h4>
                <p class="text-slate-300 leading-loose text-justify mb-6">
                    غشای پایه در گلومرول‌های کلیه بسیار ضخیم است و وظیفه دارد جلوی دفع پروتئین‌های خون به داخل ادرار را بگیرد<span class="hidden"></span>. این غشا از ٤ جزء اصلی ساخته شده است:
                </p>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div class="bg-slate-700 p-4 rounded-xl text-sm"><strong class="text-emerald-300">۱. کلاژن نوع IV:</strong> انعطاف‌پذیر است و شبکه نمدی‌شکل می‌سازد<span class="hidden"></span>.</div>
                    <div class="bg-slate-700 p-4 rounded-xl text-sm"><strong class="text-emerald-300">۲. لامینین:</strong> شبکه‌ساز اولیه غشا<span class="hidden"></span>.</div>
                    <div class="bg-slate-700 p-4 rounded-xl text-sm"><strong class="text-emerald-300">۳. نیدوژن:</strong> رابط بین لامینین و کلاژن IV<span class="hidden"></span>.</div>
                    <div class="bg-slate-700 p-4 rounded-xl text-sm"><strong class="text-emerald-300">۴. پرلکان:</strong> پروتئوگلیکان دارای هپاران سولفات<span class="hidden"></span>.</div>
                </div>

                <div class="flex items-start gap-4 bg-rose-900/30 p-5 rounded-2xl border border-rose-500/30">
                    <div class="text-2xl mt-1">⚠️</div>
                    <p class="text-sm text-rose-200 leading-relaxed text-justify">
                        <strong>پاتولوژی:</strong> بارهای منفی هپاران سولفات مانع دفع پروتئین می‌شوند<span class="hidden"></span>. اگر در ژن کلاژن نوع IV جهش رخ دهد، این صافی تخریب شده و فرد به <strong>سندرم آلپورت (Alport Syndrome)</strong> یا نارسایی شدید کلیوی مبتلا می‌شود<span class="hidden"></span>!
                    </p>
                </div>
            </div>

        </div>
    `,
    quiz: [
        {
            question: "غشای پایه (Basement Membrane) معمولاً در زیر کدام گروه از سلول‌های بدن یافت می‌شود؟",
            options: [
                "سلول‌های اپیتلیال (پوششی)، عضلانی، چربی و سلول‌های شوان",
                "فقط در سلول‌های بافت همبند (فیبروبلاست‌ها)",
                "منحصراً در فضای بینابینی استخوان‌ها",
                "در داخل سیتوپلاسم گلبول‌های قرمز"
            ],
            answer: 0,
            explanation: "غشای پایه ساختاری است از جنس ماتریکس خارج سلولی تخصصی که در زیر تمام سلول‌های اپیتلیال (پوششی) و همچنین پیرامون سلول‌های عضلانی، سلول‌های چربی و سلول‌های شوان قرار دارد<span class=\"hidden\"></span>."
        },
        {
            question: "ساختار پروتئینی «لامینین-۱» در غشای پایه به چه شکلی است؟",
            options: [
                "کلاف درهم‌پیچیده (Random Coil)",
                "مارپیچ سه‌تایی (Triple Helix)",
                "صلیب نامتقارن",
                "بشکه بتا (Beta-barrel)"
            ],
            answer: 2,
            explanation: "لامینین-۱ یک پروتئین بزرگ و انعطاف‌پذیر است که از سه زنجیره بسیار بلند (آلفا، بتا و گاما) تشکیل شده است. این زنجیره‌ها به شکل یک صلیب نامتقارن قرار گرفته و توسط پیوندهای دی‌سولفیدی به هم متصل شده‌اند<span class=\"hidden\"></span>."
        },
        {
            question: "کدام یک از پروتئین‌های غشایی زیر به عنوان گیرنده‌های اصلی سلول برای اتصال به شبکه لامینین غشای پایه عمل می‌کنند؟",
            options: [
                "سیندکان‌ها و کلاژنازها",
                "اینتگرین‌ها و دیستروگلیکان‌ها",
                "گلیکوفورین و باند ۳",
                "آکواپورین‌ها و پمپ‌های سدیم-پتاسیم"
            ],
            answer: 1,
            explanation: "لامینین‌ها با اتصال به گیرنده‌های سطح سلول مانند اینتگرین‌ها و دیستروگلیکان‌ها به عنوان یک لیگاند اتصال‌دهنده ماتریکس به سلول عمل می‌کنند و به پیوند غشای پایه به اسکلت سلولی کمک می‌نمایند<span class=\"hidden\"></span>."
        },
        {
            question: "کدام کلاژن، به دلیل قطع شدن مارپیچ سه‌تایی‌اش انعطاف‌پذیر بوده و شبکه نمدی‌شکلِ غشای پایه را می‌سازد؟",
            options: [
                "کلاژن نوع I",
                "کلاژن نوع II",
                "کلاژن نوع III",
                "کلاژن نوع IV"
            ],
            answer: 3,
            explanation: "کلاژن‌های نوع IV ساختاری انعطاف‌پذیرتر از کلاژن‌های فیبری دارند؛ مارپیچ سه‌رشته‌ای آن‌ها مکرراً مختل شده و شبکه‌ای انعطاف‌پذیر، شبیه صفحه و چندلایه (نمدی) می‌سازند که اسکلت غشای پایه است<span class=\"hidden\"></span>."
        },
        {
            question: "در ساختار غشای پایه، کدام پروتئین نقش «رابط» بین شبکه‌های لامینین و کلاژن نوع IV را ایفا می‌کند؟",
            options: [
                "نیدوژن (Nidogen)",
                "الاستین",
                "فیبریلین",
                "آگرین (Agrin)"
            ],
            answer: 0,
            explanation: "با توجه به اینکه نیدوژن و پروتئوگلیکان پرلکان می‌توانند هم به لامینین و هم به کلاژن نوع IV متصل شوند، تصور می‌شود که آن‌ها (به ویژه نیدوژن) شبکه‌های کلاژن نوع IV و لامینین را در غشای پایه به هم وصل می‌کنند<span class=\"hidden\"></span>."
        },
        {
            question: "بیماری ارثی «سندرم آلپورت» که با نقص در فیلتراسیون گلومرولی کلیه مشخص می‌شود، ناشی از جهش در کدام پروتئین است؟",
            options: [
                "کلاژن نوع I",
                "کلاژن نوع IV",
                "هیالورونان",
                "تناسین"
            ],
            answer: 1,
            explanation: "کلاژن نوع IV در فیلتراسیون کلیه نقش حیاتی دارد. در سندرم آلپورت که به دلیل جهش در ژن‌های زنجیره کلاژن نوع IV ایجاد می‌شود، نقص در فیلتراسیون لامینای پایه مشاهده می‌گردد<span class=\"hidden\"></span>."
        },
        {
            question: "در فیلتراسیون گلومرول کلیه، کدام جزء غشای پایه با بارهای منفی خود مانع از خروج پروتئین‌ها (ماکرومولکول‌ها) به داخل ادرار می‌شود؟",
            options: [
                "هپاران سولفات",
                "دیستروگلیکان",
                "تروپوالاستین",
                "تتراساکارید واسط"
            ],
            answer: 0,
            explanation: "هپاران سولفات موجود در غشای پایه (در پروتئوگلیکان پرلکان) با بارهای منفی خود نقش مهمی در ممانعت از عبور پروتئین‌ها ایفا می‌کند. وقتی زنجیره‌های GAG آن توسط آنزیم برداشته شوند، خواص فیلتراسیون غشا از بین می‌رود<span class=\"hidden\"></span>."
        },
        {
            question: "ویژگی پلیمریزه شدن و مونتاژ شبکه لامینین در محیط خارج سلولی چیست؟",
            options: [
                "نیاز مطلق به یون‌های سدیم (Na+) دارد.",
                "یک فرآیند برگشت‌ناپذیر است که با پیوندهای کووالانسی ایجاد می‌شود.",
                "نیاز به یون کلسیم (Ca2+) دارد و یک فرآیند برگشت‌پذیر است.",
                "مستقیماً توسط آنزیم‌های لیزوزومی کاتالیز می‌شود."
            ],
            answer: 2,
            explanation: "تعامل لامینین با گیرنده‌های سطح سلولی غلظت آن را افزایش داده و مونتاژ شبکه را تسهیل می‌کند. مونتاژ شبکه لامینین به یون کلسیم (Ca2+) نیاز دارد و یک فرآیند کاملاً برگشت‌پذیر است<span class=\"hidden\"></span>."
        },
        {
            question: "مکانیسم اتصال غشای پایه (لامینای پایه) به بافت پیوندی زیرین در اپیتلیوم‌های چندلایه‌ای (مانند پوست) چگونه است؟",
            options: [
                "از طریق فیبرهای لنگرانداز ساخته شده از کلاژن نوع VII",
                "از طریق اتصالات شکاف‌دار (Gap Junctions)",
                "از طریق پیوند مستقیم لامینین به الاستین",
                "از طریق پمپ‌های کلسیمی غشا"
            ],
            answer: 0,
            explanation: "در اپیتلیوم‌های چندلایه (مانند اپیدرم پوست)، لامینای پایه توسط فیبرهای مخصوص اتصال‌دهنده (لنگرانداز) که از مولکول‌های کلاژن نوع VII (هفتم) ساخته شده‌اند، به بافت پیوندی زیرین متصل می‌شود<span class=\"hidden\"></span>."
        },
        {
            question: "پروتئوگلیکان پرلکان در غشای پایه رگ‌های خونی با اتصال به کدام فاکتورها، فرآیند «رگ‌زایی (Angiogenesis)» را تحت تأثیر قرار می‌دهد؟",
            options: [
                "فاکتورهای رشد FGF و VEGF",
                "فاکتورهای انعقادی فیبرین",
                "آنزیم‌های سرین پروتئاز",
                "آگرین و استیل‌کولین"
            ],
            answer: 0,
            explanation: "پرلکان یک پروتئوگلیکان هپاران سولفات مهم در غشای پایه است که به فاکتور رشد فیبروبلاستی (FGF) و فاکتور رشد آندوتلیال عروق (VEGF) متصل می‌شود و از این طریق فرآیندهای رگ‌زایی را تنظیم می‌کند<span class=\"hidden\"></span>."
        }
    ]
},
{
id: "module_06",
    title: "ماژول ششم: تخریب و بازسازی هوشمند",
    subtitle: "معجزه اتصال عصب-عضله، متالوپروتئازها و متاستاز",
    shortTitle: "۶. بازسازی و MMPها",
    content: `
        <div class="space-y-12">
            
            <!-- بنر بلاگری -->
            <div class="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-amber-600 to-red-800 p-10 text-white shadow-2xl">
                <div class="absolute -left-10 -bottom-10 opacity-10 text-[12rem] leading-none">✂️</div>
                <div class="relative z-10">
                    <span class="inline-block py-1 px-3 rounded-full bg-red-900/30 border border-red-400/50 text-red-100 text-sm font-bold mb-4 backdrop-blur-sm">مکانیسم‌های ترمیمی</span>
                    <h3 class="text-3xl font-black mb-4 leading-tight">غشای پایه؛ نقشه‌خوان سلول‌های عصبی!</h3>
                    <p class="text-lg text-red-50 leading-relaxed text-justify opacity-95 max-w-3xl">
                        ماتریکس خارج سلولی یک ساختار سفت و مرده نیست! اگر یک عضله و عصب متصل به آن آسیب ببینند اما <strong>غشای پایه</strong> سالم بماند، این غشا به تنهایی می‌تواند مسیر رشد مجدد عصب و عضله را هدایت کند تا دقیقاً در جای قبلی به هم متصل شوند<span class="hidden"></span>. همچنین برای خروج گلبول‌های سفید از رگ یا متاسفانه گسترش سلول‌های سرطانی، این داربست‌ها باید به صورت کاملاً کنترل‌شده تخریب (قیچی) شوند<span class="hidden"></span>.
                    </p>
                </div>
            </div>

            <!-- اتصال عصب و عضله (آگرین) -->
            <div class="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
                <div class="absolute top-0 right-0 w-2 h-full bg-amber-500"></div>
                <h4 class="text-xl font-black text-slate-800 mb-6 flex items-center gap-3">
                    <span class="text-2xl">⚡</span> شاهکار بازسازی با پروتئین آگرین (Agrin)
                </h4>
                <p class="text-slate-600 leading-loose mb-6 text-justify">
                    در محل اتصال عصب به عضله، لامینای پایه (غشای پایه) حاوی پروتئینی به نام <strong>آگرین</strong> است که توسط آکسون عصبی ترشح می‌شود<span class="hidden"></span>. وقتی عصب قطع می‌شود:
                </p>
                
                <div class="flex items-start gap-4 bg-amber-50 p-5 rounded-2xl border border-amber-200 mb-4">
                    <div class="text-3xl">🗺️</div>
                    <p class="text-sm text-amber-900 leading-relaxed">
                        آگرین باقی‌مانده در غشای پایه، به عنوان یک سیگنال فوق‌العاده عمل کرده و باعث می‌شود <strong>گیرنده‌های استیل‌کولین</strong> عضله جدید، دقیقاً زیر همان نقطه جمع شوند تا سیناپس دوباره دقیقاً سر جای اولش شکل بگیرد (حتی اگر عصب هنوز رشد نکرده باشد!)<span class="hidden"></span>.
                    </p>
                </div>
            </div>

            <!-- قیچی‌های مولکولی: پروتئازها -->
            <div class="bg-slate-800 text-slate-200 p-8 rounded-3xl shadow-lg relative overflow-hidden mt-8">
                <h4 class="text-xl font-black text-cyan-400 mb-4 flex items-center gap-3">
                    <span class="text-3xl">✂️</span> قیچی‌های ماتریکس: پروتئازها
                </h4>
                <p class="text-slate-300 leading-loose text-justify mb-6">
                    برای کوچک شدن رحم پس از زایمان، عبور گلبول سفید از رگ به بافت، و متاستاز سلول‌های سرطانی، ماتریکس باید به صورت موضعی تجزیه شود. این کار توسط دو دسته آنزیم انجام می‌شود<span class="hidden"></span>:
                </p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div class="bg-slate-700/50 p-5 rounded-2xl border border-slate-600">
                        <h5 class="text-cyan-300 font-bold mb-2">۱. متالوپروتئازهای ماتریکسی (MMPs)</h5>
                        <p class="text-sm text-slate-400">آنزیم‌هایی مثل کلاژنازها که برای بریدن ماتریکس، به شدت به یون‌های فلزی (مثل <strong>روی Zn<sup>2+</sup></strong> یا <strong>کلسیم Ca<sup>2+</sup></strong>) نیاز دارند<span class="hidden"></span>.</p>
                    </div>
                    <div class="bg-slate-700/50 p-5 rounded-2xl border border-slate-600">
                        <h5 class="text-cyan-300 font-bold mb-2">۲. سرین پروتئازها</h5>
                        <p class="text-sm text-slate-400">در جایگاه فعال خود دارای یک اسیدآمینه «سرین» بسیار واکنش‌پذیر هستند (مثل پلاسمین)<span class="hidden"></span>.</p>
                    </div>
                </div>

                <div class="bg-indigo-900/30 p-5 rounded-2xl border border-indigo-500/30">
                    <h5 class="text-indigo-300 font-bold mb-3">۳ ترفند سلول برای کنترل این قیچی‌ها:</h5>
                    <ul class="space-y-2 text-sm text-indigo-100">
                        <li>۱. <strong>فعال‌سازی محلی:</strong> مثل ترشح tPA برای فعال کردن پلاسمین و حل کردن لخته خون بیماران سکته قلبی<span class="hidden"></span>.</li>
                        <li>۲. <strong>محدود شدن به گیرنده:</strong> آنزیم uPA به نوک سلول مهاجر (یا سرطانی) می‌چسبد تا مسیر را جلوی سلول باز کند<span class="hidden"></span>.</li>
                        <li>۳. <strong>ترشح مهارکننده‌ها:</strong> مثل TIMPs (مهارکننده MMPها) و سرپین‌ها (مهارکننده سرین‌پروتئازها) برای خاموش کردن آنزیم‌ها<span class="hidden"></span>.</li>
                    </ul>
                </div>
            </div>

        </div>
    `,
    quiz: [
        {
            question: "در محل اتصال عصب و عضله (Neuromuscular junction)، اگر هم عصب و هم عضله نابود شوند اما لامینای پایه سالم بماند، کدام پروتئین ترشحی از آکسون باعث هدایت ساخت مجدد سیناپس می‌شود؟",
            options: [
                "استیل‌کولین استراز",
                "آگرین (Agrin)",
                "اینتگرین",
                "متالوپروتئاز (MMP)"
            ],
            answer: 1,
            explanation: "آکسون‌های نورون حرکتی پروتئین «آگرین» را در لایه پایه اتصال‌دهنده رسوب می‌دهند. آگرین باقی‌مانده در غشا به عنوان یک نقشه عمل کرده و باعث جمع شدن گیرنده‌های استیل‌کولین در غشای سلول عضله‌ی جدید، دقیقاً در محل اتصال قبلی می‌شود<span class=\"hidden\"></span>."
        },
        {
            question: "دسته آنزیمی «متالوپروتئازهای ماتریکسی (MMPs)» که وظیفه تجزیه کلاژن و ماتریکس را بر عهده دارند، برای فعالیت خود به کدام یون‌ها وابسته‌اند؟",
            options: [
                "یون‌های سدیم و پتاسیم",
                "یون‌های کلر و بی‌کربنات",
                "یون‌های فلزی روی (Zn2+) و کلسیم (Ca2+)",
                "یون‌های آهن و مس"
            ],
            answer: 2,
            explanation: "همانطور که از نام «متالوپروتئاز» پیداست، این آنزیم‌ها (مانند کلاژنازها) برای انجام فعالیت کاتالیزوری و برش پروتئین‌های ماتریکس نیازمند اتصال به یون‌های فلزی کلسیم (Ca2+) یا روی (Zn2+) می‌باشند<span class=\"hidden\"></span>."
        },
        {
            question: "آنزیم‌هایی که در جایگاه فعال خود دارای یک اسیدآمینه‌ی بسیار واکنش‌پذیر برای شکستن پیوندهای ماتریکسی هستند و شامل آنزیم «پلاسمین» می‌شوند، چه نام دارند؟",
            options: [
                "لیپازها",
                "کینازها",
                "سرین پروتئازها",
                "استرازها"
            ],
            answer: 2,
            explanation: "گروه دوم از قیچی‌های مولکولی ماتریکس «سرین پروتئازها» هستند که در جایگاه فعال خود یک اسیدآمینه سرینِ بسیار واکنش‌پذیر دارند و در تجزیه لامینین، کلاژن و فیبرونکتین با MMPها همکاری می‌کنند<span class=\"hidden\"></span>."
        },
        {
            question: "در درمان بالینی بیمارانی که دچار سکته قلبی یا ترومبوتیک (لخته خون) شده‌اند، از داروی tPA (فعال‌کننده پلاسمینوژن بافتی) استفاده می‌شود. مکانیسم اثر آن چیست؟",
            options: [
                "مهار متالوپروتئازها برای جلوگیری از خونریزی",
                "تبدیل پلاسمینوژن غیرفعال به پلاسمینِ فعال جهت حل کردن لخته خون",
                "تولید فیبرین برای استحکام لخته",
                "فعال‌سازی پمپ سدیم-پتاسیم در سلول‌های قلب"
            ],
            answer: 1,
            explanation: "بسیاری از پروتئازها به صورت غیرفعال ترشح شده و محلی فعال می‌شوند. داروی tPA در محل لخته، پیش‌ساز غیرفعال پلاسمینوژن را شکسته و به سرین‌پروتئاز فعالِ «پلاسمین» تبدیل می‌کند تا لخته خونی را حل کند<span class=\"hidden\"></span>."
        },
        {
            question: "کدام مکانیسم به سلول‌های سرطانی اجازه می‌دهد تا آنزیم‌های تجزیه‌کننده ماتریکس را دقیقاً در لبه‌ی جلویی حرکت خود نگه دارند و مسیر متاستاز را باز کنند؟",
            options: [
                "فعال‌سازی گیرنده‌های اینتگرین در کل سطح سلول",
                "ترشح مهارکننده‌های TIMP به فضای خارج سلول",
                "محدود شدن آنزیم uPA به گیرنده‌های روی سطح لبه‌ی جلویی سلول مهاجر",
                "مهار پمپ‌های کلسیمی غشا"
            ],
            answer: 2,
            explanation: "برخی پروتئازها مثل uPA (فعال‌کننده پلاسمینوژن نوع یوروکیناز) توسط گیرنده‌هایی که در نوک سلول‌های در حال مهاجرت یا سلول‌های سرطانی قرار دارند متصل می‌شوند. این کار آنزیم را محدود به همان قسمت کرده تا مسیر حرکت را باز کند<span class=\"hidden\"></span>."
        },
        {
            question: "سلول‌ها برای جلوگیری از تخریب بی‌رویه و بیش از حد ماتریکس خارج سلولی، از کدام مهارکننده‌های پروتئینی ترشحی استفاده می‌کنند؟",
            options: [
                "TIMPs و سرپین‌ها (Serpins)",
                "سیندکان‌ها و پرلکان",
                "آگرین و دیستروگلیکان",
                "هیالورونیدازها"
            ],
            answer: 0,
            explanation: "فعالیت پروتئازها توسط مهارکننده‌های ترشحی اختصاصی محدود می‌شود. مهارکننده‌های بافتی متالوپروتئازها (TIMPs) و مهارکننده‌های سرین‌پروتئازها (که سرپین نامیده می‌شوند) به آنزیم فعال می‌چسبند و آن را مسدود می‌کنند<span class=\"hidden\"></span>."
        },
        {
            question: "فرآیند «کوچک شدن سریع رحم پس از زایمان» به کدام مکانیسم سلولی وابستگی مستقیم دارد؟",
            options: [
                "سنتز سریع کلاژن نوع I",
                "فعالیت آنزیم‌های پروتئولیتیک (MMPs) برای تجزیه موضعی و سریع ماتریکس اضافی",
                "تجمع هیالورونان برای ایجاد فشار تورگور بالا",
                "غیرفعال شدن پمپ سدیم-پتاسیم"
            ],
            answer: 1,
            explanation: "گردش و تخریب تنظیم‌شده‌ی ماتریکس برای فرآیندهایی مثل کوچک شدن رحم پس از زایمان، خروج گلبول‌های سفید از رگ و متاستاز حیاتی است که تمام این فرآیندها توسط آنزیم‌های پروتئولیتیک خارج سلولی (پروتئازها) انجام می‌پذیرد<span class=\"hidden\"></span>."
        },
        {
            question: "در صورت جهش در ژن کلاژن نوع I که باعث مقاوم شدن آن به برش‌های پروتئولیتیک (تجزیه) شود، چه اتفاقی برای مهاجرت سلول‌ها می‌افتد؟",
            options: [
                "مهاجرت سلول‌ها به شدت افزایش می‌یابد.",
                "مهاجرت سلول‌ها متوقف می‌شود زیرا سلول‌ها نمی‌توانند مسیر خود را در ماتریکس باز کنند.",
                "سلول‌ها به جای حرکت، سریعاً تقسیم می‌شوند.",
                "آنزیم‌های داخل سلولی جایگزین MMPها شده و حرکت را جبران می‌کنند."
            ],
            answer: 1,
            explanation: "اگر کلاژن نوع I در اثر جهش به پروتئولیز مقاوم شود، سلول‌هایی که در حالت عادی با تجزیه کلاژن مسیر خود را باز می‌کردند و از آن عبور می‌کردند، دیگر قادر به عبور نبوده و مهاجرت متوقف می‌شود<span class=\"hidden\"></span>."
        },
        {
            question: "عملکرد «سرین‌پروتئازها» و «متالوپروتئازهای ماتریکسی» در غشای پایه چیست؟",
            options: [
                "ایجاد پیوندهای متقاطع دی‌سولفیدی",
                "هیدروکسیله کردن اسیدآمینه پرولین",
                "همکاری با یکدیگر برای تجزیه کلاژن، لامینین و فیبرونکتین در مواقع نیاز",
                "اتصال غشای پایه به اسکلت سلولی"
            ],
            answer: 2,
            explanation: "متالوپروتئازها و سرین‌پروتئازها با یکدیگر همکاری می‌کنند تا در صورت نیاز (مانند ترمیم بافت، رگ‌زایی یا نفوذ سلول‌های ایمنی)، پروتئین‌های ماتریکس مانند کلاژن، لامینین و فیبرونکتین را به صورت کنترل‌شده تجزیه کنند<span class=\"hidden\"></span>."
        },
        {
            question: "تجزیه (پروتئولیز) پروتئین‌های ماتریکس علاوه بر باز کردن فیزیکی مسیر، چه مکانیسم دیگری برای تحریک مهاجرت سلولی دارد؟",
            options: [
                "تبدیل مستقیم پروتئین‌ها به ATP.",
                "آشکار کردن جایگاه‌های پنهان اتصالی یا رهاسازی پیام‌های پروتئینیِ به دام افتاده در ماتریکس.",
                "کاهش دمای بافت در محل التهاب.",
                "تغییر پتانسیل غشا از منفی به مثبت در تمام سلول‌ها."
            ],
            answer: 1,
            explanation: "پروتئولیز ماتریکس علاوه بر باز کردن راه، می‌تواند جایگاه‌های پنهانی (Cryptic Sites) که مسئول حرکت هستند را آشکار کند یا سیگنال‌های شیمیایی (مثل فاکتورهای رشد) که در ماتریکس ذخیره شده‌اند را آزاد کرده و مهاجرت را تحریک نماید<span class=\"hidden\"></span>."
        }
    ]
},
{
id: "module_07",
    title: "ماژول هفتم: مرزهای هوشمند و مدل موزائیک سیال",
    subtitle: "کشف غشای سلولی، سیالیت و تکنیک پیشرفته FRET",
    shortTitle: "۷. مدل غشا و تکنیک FRET",
    content: `
        <div class="space-y-12">
            
            <!-- بنر بلاگری -->
            <div class="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-blue-900 to-indigo-900 p-10 text-white shadow-2xl">
                <div class="absolute -right-10 -bottom-10 opacity-10 text-[12rem] leading-none">🌐</div>
                <div class="relative z-10">
                    <span class="inline-block py-1 px-3 rounded-full bg-blue-500/30 border border-blue-400/50 text-blue-100 text-sm font-bold mb-4 backdrop-blur-sm">انقلاب در زیست‌شناسی</span>
                    <h3 class="text-3xl font-black mb-4 leading-tight">غشای سلولی: یک دریای مواج از چربی و پروتئین!</h3>
                    <p class="text-lg text-blue-50 leading-relaxed text-justify opacity-95 max-w-3xl">
                        تا سال ۱۹۷۲ تصور دقیقی از غشای سلول وجود نداشت، تا اینکه سینگر و نیکلسون مدل <strong>موزائیک سیال (Fluid Mosaic)</strong> را معرفی کردند. غشا یک دیوار خشک و ثابت نیست؛ بلکه یک اقیانوس دو بعدی به ضخامت ۵ نانومتر است که پروتئین‌ها مثل قایق در دریایی از لیپیدها شناورند و مدام در حال حرکتند!
                    </p>
                </div>
            </div>

            <!-- عملکردهای اصلی غشا -->
            <div class="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
                <div class="absolute top-0 right-0 w-2 h-full bg-blue-500"></div>
                <h4 class="text-xl font-black text-slate-800 mb-6 flex items-center gap-3">
                    <span class="text-2xl">🛡️</span> غشای پلاسمایی چه کار می‌کند؟
                </h4>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div class="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                        <div class="text-blue-500 font-black text-lg mb-2">۱. کنترل مرزها</div>
                        <p class="text-sm text-slate-600 leading-relaxed">جدا کردن محیط داخل از خارج و کنترل دقیق ورود و خروج مواد (سد نفوذپذیری انتخابی).</p>
                    </div>
                    <div class="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                        <div class="text-blue-500 font-black text-lg mb-2">۲. دریافت پیام‌ها</div>
                        <p class="text-sm text-slate-600 leading-relaxed">گیرنده‌های غشایی اطلاعات را از محیط دریافت کرده و به سیتوزول منتقل می‌کنند.</p>
                    </div>
                    <div class="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                        <div class="text-blue-500 font-black text-lg mb-2">۳. تولید انرژی (گرادیان)</div>
                        <p class="text-sm text-slate-600 leading-relaxed">ایجاد گرادیان شیمیایی و یونی برای تولید ATP (مثل غشای میتوکندری) یا هدایت پیام عصبی.</p>
                    </div>
                </div>
            </div>

            <!-- تکنیک FRET (دیپ دایو) -->
            <div class="bg-slate-800 text-slate-200 p-8 rounded-3xl shadow-lg relative overflow-hidden mt-8">
                <div class="absolute -left-20 -top-20 w-64 h-64 bg-fuchsia-500/20 rounded-full blur-3xl"></div>
                <h4 class="text-xl font-black text-fuchsia-400 mb-4 flex items-center gap-3">
                    <span class="text-3xl">🔬</span> چالش میکروسکوپ‌ها و تولد تکنیک FRET
                </h4>
                <p class="text-slate-300 leading-loose text-justify mb-6">
                    ضخامت غشا فقط ۵ نانومتر است! میکروسکوپ‌های نوری معمولی به دلیل «محدودیت پراش نوری»، نمی‌توانند فواصل کمتر از ۲۰۰ نانومتر را تفکیک کنند. پس چطور بفهمیم دو پروتئین در غشا به هم چسبیده‌اند؟ دانشمندان تکنیک جادویی <strong>FRET (انتقال انرژی تشدید فلورسانس)</strong> را ابداع کردند.
                </p>

                <div class="bg-fuchsia-900/30 p-6 rounded-2xl border border-fuchsia-500/30 mb-6">
                    <h5 class="text-fuchsia-300 font-bold mb-3">مکانیسم FRET چگونه است؟</h5>
                    <ul class="space-y-3 text-sm text-fuchsia-100 leading-relaxed text-justify">
                        <li class="flex items-start gap-2"><span class="text-fuchsia-400">۱.</span> دو پروتئین غشایی را با دو رنگ فلورسنت متفاوت (دهنده و گیرنده) نشانه‌گذاری می‌کنیم.</li>
                        <li class="flex items-start gap-2"><span class="text-fuchsia-400">۲.</span> اگر این دو پروتئین فاصله‌شان <strong>کمتر از ۱۰ نانومتر</strong> باشد، انرژی از دهنده به گیرنده به صورت <strong>«غیر تابشی» (بدون تولید نور)</strong> منتقل می‌شود.</li>
                        <li class="flex items-start gap-2"><span class="text-fuchsia-400">۳.</span> گیرنده پس از دریافت این انرژی، نور فلورسانس ساطع می‌کند. مشاهده این نور یعنی این دو پروتئین دقیقاً در کنار هم هستند!</li>
                    </ul>
                </div>
            </div>

        </div>
    `,
    quiz: [
        {
            question: "بر اساس «مدل موزائیک سیال» (Singer-Nicolson, 1972)، غشای پلاسمایی دارای کدام ویژگی اساسی است؟",
            options: [
                "ساختاری کاملاً صلب و کریستالی از کربوهیدرات‌ها است.",
                "یک سد غیرقابل نفوذ به ضخامت ۵۰ نانومتر است که مانع حرکت پروتئین‌ها می‌شود.",
                "یک ساختار سیال و پویا متشکل از دولایه فسفولیپید، کلسترول و پروتئین است که مولکول‌ها در آن حرکت می‌کنند.",
                "لایه‌ای یک‌پارچه از پروتئین است که لیپیدها روی آن رسوب کرده‌اند."
            ],
            answer: 2,
            explanation: "مدل موزائیک سیال بیان می‌کند که غشا یک لایه دوتایی لیپیدی مایع و سیال به ضخامت حدود ۵ نانومتر است که پروتئین‌ها مانند قطعات موزائیک در آن قرار گرفته و قابلیت حرکت دارند."
        },
        {
            question: "تخمین زده می‌شود که حدود چه درصدی از کل پروتئین‌هایی که در ژنوم سلول حیوانی کدگذاری می‌شوند، «پروتئین‌های غشایی» هستند؟",
            options: [
                "کمتر از ۵ درصد",
                "حدود ۳۰ درصد",
                "بیش از ۸۰ درصد",
                "۱۰۰ درصد"
            ],
            answer: 1,
            explanation: "غشا و پروتئین‌های آن آنقدر برای سلول حیاتی هستند (جهت انتقال، گیرنده‌ها، آنزیم‌ها و اتصالات) که تخمین زده می‌شود حدود ۳۰ درصد از پروتئین‌های کدگذاری شده در ژنوم، پروتئین‌های غشایی باشند."
        },
        {
            question: "محدودیت اصلی میکروسکوپ‌های فلورسانس معمولی در بررسی برهم‌کنش‌های مستقیمِ پروتئین‌های غشایی چیست؟",
            options: [
                "نمی‌توانند در سلول‌های زنده استفاده شوند.",
                "محدودیت پراش نوری دارند و نمی‌توانند فواصل کمتر از ۲۰۰ نانومتر را به خوبی تفکیک کنند.",
                "پرتوهای لیزر آن‌ها بلافاصله غشا را سوراخ می‌کند.",
                "فقط قادر به رنگ‌آمیزی کربوهیدرات‌ها هستند نه پروتئین‌ها."
            ],
            answer: 1,
            explanation: "به دلیل پدیده پراش نوری، میکروسکوپ‌های نوری و فلورسانس معمولی قادر به تفکیک جزئیات کوچک‌تر از حدود ۲۰۰ نانومتر نیستند. بنابراین برای اثبات چسبیدن دو پروتئین (که چند نانومتر است) ناکارآمدند."
        },
        {
            question: "کدام تکنیک پیشرفته به طور ویژه برای بررسی برهم‌کنش و نزدیکی دو مولکول یا پروتئین در فواصل کمتر از ۱۰ نانومتر در غشای سلول زنده استفاده می‌شود؟",
            options: [
                "FRAP (بازیافت فلورسانس)",
                "میکروسکوپ الکترونی نگاره",
                "FRET (انتقال انرژی تشدید فلورسانس)",
                "کریستالوگرافی اشعه ایکس"
            ],
            answer: 2,
            explanation: "تکنیک FRET (Förster Resonance Energy Transfer) ابزاری دقیق برای اندازه‌گیری فواصل زیر ۱۰ نانومتر است که برهم‌کنش پروتئین‌ها در غشای سلول‌های زنده را اثبات می‌کند."
        },
        {
            question: "در مکانیسم تکنیک FRET، انتقال انرژی از فلوروفور «دهنده» به «گیرنده» چگونه صورت می‌پذیرد؟",
            options: [
                "به صورت غیر تابشی (غیر تشعشعی) و از طریق برهم‌کنش‌های دوربرد دوقطبی-دوقطبی.",
                "از طریق انتشار فوتون‌های اشعه ایکس.",
                "از طریق یک پل پروتئینی به نام کلاترین.",
                "توسط آزاد شدن یون‌های کلسیم در سیتوزول."
            ],
            answer: 0,
            explanation: "در FRET، انرژیِ فلوروفور دهنده به صورت غیر تابشی (Non-radiative) یعنی بدون تولید و انتشار فوتون نوری مابین، به گیرنده‌ای که در فاصله بسیار نزدیک (کمتر از ۱۰ نانومتر) قرار دارد منتقل می‌شود."
        },
        {
            question: "تولید «گرادیان یونی و شیمیایی» در دو طرف غشا (مثلاً توسط پمپ‌ها) برای سلول چه مزیتی دارد؟",
            options: [
                "باعث حل شدن سریع‌تر لخته‌های خونی می‌شود.",
                "نوعی انرژی ذخیره شده پتانسیل است که برای سنتز ATP (در میتوکندری) و انتقال سیگنال‌های الکتریکی (در نورون‌ها) استفاده می‌شود.",
                "منجر به مرگ برنامه‌ریزی شده سلول (آپوپتوز) می‌شود.",
                "غشا را به یک سد کاملاً صلب و غیرقابل نفوذ تبدیل می‌کند."
            ],
            answer: 1,
            explanation: "گرادیان (شیب) یونی یکی از عملکردهای حیاتی غشاست که به عنوان یک باتری (انرژی پتانسیل) عمل کرده و سلول از آن برای تولید ATP، ورود مواد برخلاف شیب غلظت و ایجاد پتانسیل عمل عصبی استفاده می‌کند."
        },
        {
            question: "کدام یک از اندامک‌های زیر در سلول‌های یوکاریوتی دارای غشای اختصاصی خود است؟",
            options: [
                "میتوکندری",
                "دستگاه گلژی",
                "شبکه آندوپلاسمی",
                "همه موارد"
            ],
            answer: 3,
            explanation: "در سلول‌های یوکاریوتی، سیستم غشایی به قدری تکامل یافته است که نه تنها دور سلول، بلکه دور اندامک‌های حیاتی مثل هسته، میتوکندری، دستگاه گلژی و شبکه آندوپلاسمی را هم پوشانده است."
        },
        {
            question: "علت اصلی اینکه مولکول‌های آب‌گریز (Hydrophobic) در آب نامحلول هستند چیست؟",
            options: [
                "داشتن بارهای مثبت بسیار قوی.",
                "نداشتن بار الکتریکی و غیرقطبی بودن، که مانع تشکیل پیوند هیدروژنی با آب می‌شود.",
                "اندازه بسیار کوچکشان که از بین مولکول‌های آب فرار می‌کنند.",
                "تبدیل شدن فوری آن‌ها به پروتئین."
            ],
            answer: 1,
            explanation: "مولکول‌های آب‌گریز فاقد بار الکتریکی (غیرقطبی) هستند، در نتیجه نمی‌توانند با مولکول‌های قطبی آب تعامل الکترواستاتیک یا پیوند هیدروژنی برقرار کنند و از نظر انرژی تمایل دارند از آب دور شوند."
        },
        {
            question: "اگر نتیجه یک آزمایش FRET نشان دهد که با تحریک فلوروفور دهنده، فلوروفور گیرنده نوری ساطع نکرده است (No FRET)، چه نتیجه‌ای می‌توان گرفت؟",
            options: [
                "سلول مرده است.",
                "فاصله بین دو پروتئین بیش از حد مجاز (معمولاً بیش از ۱۰ نانومتر) است و با هم برهم‌کنش ندارند.",
                "میکروسکوپ خراب است.",
                "دو پروتئین در حال فاگوسیتوز شدن هستند."
            ],
            answer: 1,
            explanation: "اگر فاصله دهنده و گیرنده بیش از محدوده رزونانس (حدود ۸ تا ۱۰ نانومتر) باشد، انتقال انرژی غیرتابشی انجام نمی‌شود. عدم مشاهده سیگنال FRET به معنای عدم مجاورت فیزیکی دو مولکول است."
        },
        {
            question: "چه عاملی باعث می‌شود پروتئین‌های غشایی بتوانند به عنوان «حسگرهای محیطی» عمل کنند؟",
            options: [
                "تولید مداوم نور فلورسانس.",
                "داشتن بخش‌های گیرنده در سطح خارجی که سیگنال‌ها (مثل هورمون‌ها) را شناسایی کرده و اطلاعات را به داخل سلول منتقل می‌کنند.",
                "تجزیه شدن سریع توسط سرین پروتئازها.",
                "تبدیل مستقیم پیام‌های شیمیایی به GAGها."
            ],
            answer: 1,
            explanation: "در تمام غشاها، پروتئین‌هایی وجود دارند که به عنوان گیرنده (Receptor) عمل می‌کنند. این پروتئین‌ها اطلاعات محیطی (مثل حضور انسولین) را درک کرده و با تغییر ساختار خود، پیام را به سیتوزول مخابره می‌کنند."
        }
    ]
},
{
id: "module_08",
    title: "ماژول هشتم: خودآرایی لیپیدها؛ از میسل تا لیپوزوم",
    subtitle: "معماری دوگانه‌دوست (آمفی‌پاتیک) و دارورسانی هدفمند",
    shortTitle: "۸. لیپیدها و لیپوزوم",
    content: `
        <div class="space-y-12">
            
            <!-- بنر بلاگری -->
            <div class="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-emerald-800 to-teal-900 p-10 text-white shadow-2xl">
                <div class="absolute -left-10 -bottom-10 opacity-10 text-[12rem] leading-none">💧</div>
                <div class="relative z-10">
                    <span class="inline-block py-1 px-3 rounded-full bg-teal-500/30 border border-teal-400/50 text-teal-100 text-sm font-bold mb-4 backdrop-blur-sm">شگفتی فیزیک‌شیمیایی</span>
                    <h3 class="text-3xl font-black mb-4 leading-tight">لیپیدهای غشا: دوگانه‌دوست‌های جادویی!</h3>
                    <p class="text-lg text-teal-50 leading-relaxed text-justify opacity-95 max-w-3xl">
                        اگر مقداری روغن را در آب بریزید، هرگز حل نمی‌شود. اما لیپیدهای غشای سلول ما فقط روغن ساده نیستند؛ آن‌ها مولکول‌های <strong>آمفی‌پاتیک (Amphipathic)</strong> هستند! یعنی یک سرشان به شدت عاشق آب است و دم‌هایشان از آب فراری. همین تضاد باعث می‌شود غشای سلول خود‌به‌خود ساخته شود و حتی اگر پاره شود، خودش را ترمیم کند!
                    </p>
                </div>
            </div>

            <!-- ساختار فسفولیپید -->
            <div class="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
                <div class="absolute top-0 right-0 w-2 h-full bg-emerald-500"></div>
                <h4 class="text-xl font-black text-slate-800 mb-6 flex items-center gap-3">
                    <span class="text-2xl">🧪</span> آناتومی یک فسفولیپید
                </h4>
                <p class="text-slate-600 leading-loose mb-6 text-justify">
                    فسفولیپیدها فراوان‌ترین لیپیدهای غشایی هستند (حدود ۵۰٪ جرم غشای حیوانی). ساختار آن‌ها به این شکل است:
                </p>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="bg-sky-50 p-6 rounded-2xl border border-sky-100">
                        <h5 class="font-bold text-sky-800 mb-2 text-lg">۱. سرِ آب‌دوست (قطبی)</h5>
                        <p class="text-sm text-sky-700 leading-relaxed text-justify">حاوی یک گروه فسفاتِ باردار است که به راحتی با آب پیوند هیدروژنی می‌دهد. این سرها همیشه به سمت مایع داخل یا خارج سلول می‌چرخند.</p>
                    </div>
                    <div class="bg-amber-50 p-6 rounded-2xl border border-amber-100">
                        <h5 class="font-bold text-amber-800 mb-2 text-lg">۲. دم‌های آب‌گریز (غیرقطبی)</h5>
                        <p class="text-sm text-amber-700 leading-relaxed text-justify">شامل دو زنجیره اسید چرب (با طول ۱۴ تا ۲۴ کربن). یکی از دم‌ها معمولاً دارای یک <strong>پیوند دوگانه سیس (Cis)</strong> است که باعث ایجاد یک «خمیدگی» در دم می‌شود. این خمیدگی مانع از فشرده شدن بیش از حد لیپیدها شده و سیالیت غشا را حفظ می‌کند.</p>
                    </div>
                </div>
            </div>

            <!-- خودآرایی: میسل، لیپوزوم و دولایه -->
            <div class="bg-slate-800 text-slate-200 p-8 rounded-3xl shadow-lg relative overflow-hidden mt-8">
                <h4 class="text-xl font-black text-emerald-400 mb-4 flex items-center gap-3">
                    <span class="text-3xl">🫧</span> خودآرایی: فرار از آب!
                </h4>
                <p class="text-slate-300 leading-loose text-justify mb-6">
                    وقتی فسفولیپیدها را در آب می‌ریزیم، دم‌های آب‌گریز برای فرار از آب، خودشان را به هم می‌چسبانند. بسته به شرایط فیزیکی، سه ساختار به طور خودبه‌خود تشکیل می‌شود:
                </p>

                <div class="space-y-4">
                    <div class="bg-slate-700/50 p-4 rounded-xl border border-slate-600 flex items-start gap-4">
                        <div class="text-2xl mt-1">🟡</div>
                        <div>
                            <strong class="text-emerald-300 block mb-1">۱. میسل (Micelle):</strong>
                            <p class="text-sm text-slate-400">یک کره توپر تک‌لایه! دم‌های آب‌گریز در مرکز جمع شده و سرها رو به آب قرار می‌گیرند (صابون‌ها به این شکل چربی را پاک می‌کنند).</p>
                        </div>
                    </div>
                    <div class="bg-slate-700/50 p-4 rounded-xl border border-slate-600 flex items-start gap-4">
                        <div class="text-2xl mt-1">💊</div>
                        <div>
                            <strong class="text-emerald-300 block mb-1">۲. لیپوزوم (Liposome):</strong>
                            <p class="text-sm text-slate-400">کره‌های توخالیِ <strong>دولایه</strong>. چون در مرکزشان آب قرار می‌گیرد، می‌توانند داروهای محلول در آب را درون خود حبس کنند. از لیپوزوم‌ها برای <strong>دارورسانی هدفمند در درمان سرطان</strong> استفاده می‌شود!</p>
                        </div>
                    </div>
                    <div class="bg-slate-700/50 p-4 rounded-xl border border-slate-600 flex items-start gap-4">
                        <div class="text-2xl mt-1">📄</div>
                        <div>
                            <strong class="text-emerald-300 block mb-1">۳. صفحات دولایه (Bilayer Sheet):</strong>
                            <p class="text-sm text-slate-400">همان ساختار تخت و مسطح غشای سلول ماست. نکته جالب: اگر این صفحه پاره شود، چون تماس لبه‌های آب‌گریز با آب از نظر انرژی نامطلوب است، فوراً و خودبه‌خود <strong>بسته و ترمیم (Self-sealing)</strong> می‌شود!</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    `,
    quiz: [
        {
            question: "اصطلاح آمفی‌پاتیک (Amphipathic) در مورد لیپیدهای غشایی به چه معناست؟",
            options: [
                "مولکول‌هایی که کاملاً در آب نامحلول و صرفاً هیدروفوب هستند.",
                "مولکول‌هایی که منحصراً در محیط‌های اسیدی قابلیت یونیزه شدن دارند.",
                "مولکول‌هایی که دارای یک بخش قطبی (آب‌دوست) و یک بخش غیرقطبی (آب‌گریز) به طور همزمان هستند.",
                "مولکول‌های حاوی بار منفی خالص که کاتیون‌ها را جذب می‌کنند."
            ],
            answer: 2,
            explanation: "لیپیدهای غشایی دارای خاصیت آمفی‌پاتیک (دوگانه‌دوست) هستند، یعنی یک سر آن‌ها هیدروفیلیک (آب‌دوست) و دم‌های آن‌ها هیدروفوبیک (آب‌گریز) است."
        },
        {
            question: "کدام عامل ساختاری در زنجیره‌های اسید چربِ فسفولیپیدها باعث ایجاد «خمیدگی» در دم و در نتیجه جلوگیری از فشرده‌شدن بیش از حد غشا می‌شود؟",
            options: [
                "حضور یک پیوند دوگانه سیس (Cis-double bond)",
                "حضور گروه‌های فسفات متعدد",
                "اتصال عرضی دی‌سولفیدی",
                "کربن‌های شماره ۱ تا ۵ به صورت حلقوی"
            ],
            answer: 0,
            explanation: "معمولاً یکی از دم‌های هیدروکربنی فسفولیپیدها اشباع (صاف) و دیگری حاوی یک یا چند پیوند دوگانه سیس (Cis) است. این پیوند دوگانه یک پیچ‌خوردگی یا خمیدگی ایجاد می‌کند که مانع کریستاله شدن دم‌ها شده و سیالیت غشا را حفظ می‌کند."
        },
        {
            question: "هنگام قرار گرفتن لیپیدهای آمفی‌پاتیک در محیط آبی، کدام نیرو عامل اصلیِ تجمع خودبه‌خودی دم‌های آب‌گریز و تشکیل ساختارهایی نظیر میسل یا دولایه است؟",
            options: [
                "تلاش دم‌های آب‌گریز برای فرار از تماس با مولکول‌های قطبی آب (افزایش آنتروپی آب)",
                "تمایل ذاتی دم‌های آب‌گریز برای تشکیل پیوند هیدروژنی با یکدیگر",
                "نیروی دافعه الکترواستاتیک بین گروه‌های فسفات",
                "نیروی جاذبه شدید بین یون کلسیم و سر قطبی"
            ],
            answer: 0,
            explanation: "این شکل و ماهیت آمفی‌پاتیک است که باعث می‌شود آن‌ها به طور خودبه‌خود در محیط آبی تجمع یابند تا دم‌های آب‌گریز خود را از آب دور کرده (به دلیل نامطلوب بودن این تماس از نظر انرژی) و سرهای قطبی را در معرض آب قرار دهند."
        },
        {
            question: "تفاوت اصلی ساختاری بین «میسل» (Micelle) و «لیپوزوم» (Liposome) چیست؟",
            options: [
                "میسل‌ها دارای ساختار دولایه و توخالی هستند، در حالی که لیپوزوم‌ها تک‌لایه و توپُر می‌باشند.",
                "میسل‌ها ساختار کروی تک‌لایه (دم‌ها رو به داخل) دارند، اما لیپوزوم‌ها وزیکول‌های کروی دولایه با مرکز آبی هستند.",
                "میسل‌ها در غشای یوکاریوت‌ها یافت می‌شوند اما لیپوزوم‌ها فقط در باکتری‌ها.",
                "میسل‌ها از پروتئین ساخته شده‌اند و لیپوزوم‌ها از کربوهیدرات."
            ],
            answer: 1,
            explanation: "میسل‌ها کره‌های توپرِ تک‌لایه هستند که مرکزشان هیدروفوب است. اما لیپوزوم‌ها وزیکول‌هایی متشکل از دولایه فسفولیپیدی متحدالمرکز هستند که در مرکز آن‌ها یک حجم آبی محصور شده است."
        },
        {
            question: "کاربرد اصلی «لیپوزوم‌ها» در پزشکی و بیوتکنولوژی مدرن چیست؟",
            options: [
                "به عنوان رنگ برای مشخص کردن باکتری‌های گرم مثبت.",
                "به عنوان کاتالیزور برای تجزیه پلاستیک.",
                "به عنوان وسایل نقلیه مینیاتوری برای دارورسانی هدفمند (به ویژه در درمان بیماران سرطانی).",
                "به عنوان ماده اولیه برای تولید ATP در آزمایشگاه."
            ],
            answer: 2,
            explanation: "چون لیپوزوم‌ها کره‌های دولایه با مرکز آبی هستند، می‌توان داروهای محلول در آب را در مرکز آن‌ها یا داروهای محلول در چربی را در غشای آن‌ها قرار داد و از آن‌ها برای دارورسانی ایمن و هدفمند استفاده کرد."
        },
        {
            question: "خاصیت «خودترمیم‌شوندگی» (Self-sealing) غشای پلاسمایی در هنگام پارگی‌های کوچک، مستقیماً ناشی از کدام قانون ترمودینامیکی در سیستم‌های لیپیدی است؟",
            options: [
                "مطلوب بودنِ از دست دادن گروه‌های فسفات در آب.",
                "نامطلوب بودنِ تماسِ لبه‌های هیدروکربنی (آب‌گریز) با آب، که لیپیدها را مجبور به بازآرایی سریع می‌کند.",
                "واکنش سریع اکسیژن با پیوندهای دوگانه لیپیدها.",
                "فعالیت آنزیم‌های کلاژناز برای دوختن لبه‌های پاره شده."
            ],
            answer: 1,
            explanation: "یک پارگی در دولایه لیپیدی، یک لبه آزادِ آب‌گریز ایجاد می‌کند که با آب در تماس است. چون این تماس از نظر انرژی بسیار نامطلوب است، لیپیدها فوراً و خودبه‌خود طوری بازآرایی می‌شوند که لبه باز از بین برود و غشا ترمیم شود."
        },
        {
            question: "حدوداً چه درصدی از جرم یک غشای سلولی حیوانی معمولی را مولکول‌های چربی (لیپیدها) تشکیل می‌دهند؟",
            options: [
                "۱۰ درصد",
                "۵۰ درصد",
                "۹۰ درصد",
                "کمتر از ۱ درصد"
            ],
            answer: 1,
            explanation: "مولکول‌های چربی به طور میانگین حدود ۵۰ درصد از جرم اکثر غشاهای سلولی حیوانی را تشکیل می‌دهند و تقریباً تمام جرم باقی‌مانده مربوط به انواع پروتئین‌هاست."
        },
        {
            question: "طول زنجیره‌های اسید چرب در دم‌های هیدروفوبیک فسفولیپیدها معمولاً چقدر است؟",
            options: [
                "بین ۴ تا ۸ اتم کربن",
                "بین ۱۴ تا ۲۴ اتم کربن",
                "بیش از ۵۰ اتم کربن",
                "دقیقاً ۳ اتم کربن متصل به نیتروژن"
            ],
            answer: 1,
            explanation: "دم‌های آب‌گریز معمولاً اسیدهای چرب هستند که طول آن‌ها می‌تواند متفاوت باشد، اما به طور معمول حاوی ۱۴ تا ۲۴ اتم کربن در زنجیره هیدروکربنی خود هستند."
        },
        {
            question: "تأثیر «طول زنجیره هیدروکربنی» بر رفتار فسفولیپیدها چیست؟",
            options: [
                "طول دم هیچ تأثیری بر رفتار غشا ندارد.",
                "زنجیره‌های بلندتر باعث افزایش حلالیت فسفولیپید در آب می‌شوند.",
                "تفاوت در طول دم‌ها بر توانایی قرار گرفتن لیپیدها در کنار یکدیگر تأثیر گذاشته و در نتیجه میزان «سیالیت» غشا را تعیین می‌کند.",
                "زنجیره‌های بسیار کوتاه باعث تبدیل شدن لیپید به پروتئین‌های ناقل می‌شوند."
            ],
            answer: 2,
            explanation: "طول دم اسیدهای چرب (و میزان اشباع آن‌ها) برای برهم‌کنش‌های واندروالسی بین دم‌ها مهم است. زنجیره‌های بلندتر با هم تعامل قوی‌تری دارند و غشا را سفت‌تر می‌کنند، در حالی که زنجیره‌های کوتاه‌تر سیالیت را افزایش می‌دهند."
        },
        {
            question: "میسل‌ها معمولاً از لیپیدهایی تشکیل می‌شوند که شکل فضایی آن‌ها بیشتر شبیه به چیست؟",
            options: [
                "استوانه (مانند فسفولیپیدهای دولایه)",
                "مخروط (سر بزرگتر و دم باریکتر)",
                "مکعب مستطیل",
                "صفحات تخت"
            ],
            answer: 1,
            explanation: "لیپیدهایی که سرِ قطبیِ بزرگ و یک دمِ اسید چربِ تکی دارند (شکلی شبیه مخروط ایجاد می‌کنند)، به طور طبیعی تمایل دارند در محیط آبی به جای صفحه، ساختارهای کروی و تک‌لایه به نام میسل (Micelle) بسازند. (فسفولیپیدها با دو دم، شکلی استوانه‌ای داشته و دولایه می‌سازند)."
        }
    ]
},
{
id: "module_09",
    title: "ماژول نهم: رقص لیپیدها و آنزیم‌های غشایی",
    subtitle: "حرکات عرضی، فلیپ‌فلاپ و سیگنال مرگ سلولی (آپوپتوز)",
    shortTitle: "۹. حرکات لیپیدها و فلیپاز",
    content: `
        <div class="space-y-12">
            
            <!-- بنر بلاگری -->
            <div class="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-purple-800 to-indigo-900 p-10 text-white shadow-2xl">
                <div class="absolute -right-10 -bottom-10 opacity-10 text-[12rem] leading-none">💃</div>
                <div class="relative z-10">
                    <span class="inline-block py-1 px-3 rounded-full bg-indigo-500/30 border border-indigo-400/50 text-indigo-100 text-sm font-bold mb-4 backdrop-blur-sm">دینامیک غشایی</span>
                    <h3 class="text-3xl font-black mb-4 leading-tight">پارتی شبانه‌روزی در غشای سلول!</h3>
                    <p class="text-lg text-indigo-50 leading-relaxed text-justify opacity-95 max-w-3xl">
                        غشای سلول یک دیوار ساکن نیست، بلکه یک کلاب شلوغ است که مولکول‌های لیپیدی در آن با سرعت‌های دیوانه‌واری در حال حرکتند! آن‌ها دور خود می‌چرخند و با همسایگانشان جایشان را عوض می‌کنند. اما یک حرکت برای آن‌ها بسیار سخت و ممنوعه است: «پریدن به لایه مقابل». بیایید ببینیم سلول چطور این مشکل را حل می‌کند<span class="hidden"></span>!
                    </p>
                </div>
            </div>

            <!-- انواع حرکات لیپیدی -->
            <div class="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
                <div class="absolute top-0 right-0 w-2 h-full bg-purple-500"></div>
                <h4 class="text-xl font-black text-slate-800 mb-6 flex items-center gap-3">
                    <span class="text-2xl">🔄</span> ۳ نوع حرکت اصلی لیپیدها
                </h4>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div class="bg-purple-50 p-6 rounded-2xl border border-purple-100 text-center hover:shadow-md transition-shadow">
                        <div class="text-3xl mb-3">🌪️</div>
                        <h5 class="font-bold text-purple-800 mb-2">۱. چرخش (Rotation)</h5>
                        <p class="text-sm text-purple-700 leading-relaxed">چرخش حول محور طولی خود. بسیار سریع و رایج است<span class="hidden"></span>.</p>
                    </div>
                    <div class="bg-blue-50 p-6 rounded-2xl border border-blue-100 text-center hover:shadow-md transition-shadow">
                        <div class="text-3xl mb-3">↔️</div>
                        <h5 class="font-bold text-blue-800 mb-2">۲. انتشار جانبی (Lateral)</h5>
                        <p class="text-sm text-blue-700 leading-relaxed">عوض کردن جا با همسایه کناری در یک لایه. (با سرعت شگفت‌انگیز ۱۰<sup>۷</sup> بار در ثانیه!)<span class="hidden"></span>.</p>
                    </div>
                    <div class="bg-rose-50 p-6 rounded-2xl border border-rose-100 text-center hover:shadow-md transition-shadow">
                        <div class="text-3xl mb-3">🤸</div>
                        <h5 class="font-bold text-rose-800 mb-2">۳. فلیپ‌فلاپ (Flip-Flop)</h5>
                        <p class="text-sm text-rose-700 leading-relaxed">پریدن از یک لایه به لایه مقابل. به شدت کند و نادر (کمتر از ۱ بار در ماه!) زیرا سر قطبی باید از وسط محیط چرب عبور کند<span class="hidden"></span>.</p>
                    </div>
                </div>
            </div>

            <!-- آنزیم‌های جابجاگر و ساخت غشا -->
            <div class="bg-slate-800 text-slate-200 p-8 rounded-3xl shadow-lg relative overflow-hidden mt-8">
                <h4 class="text-xl font-black text-cyan-400 mb-4 flex items-center gap-3">
                    <span class="text-3xl">⚙️</span> ماشین‌های غشاساز: فلیپاز، فلاپاز و اسکرامبلاز
                </h4>
                <p class="text-slate-300 leading-loose text-justify mb-6">
                    فسفولیپیدهای جدید در سمت سیتوزولی (داخلی) شبکه آندوپلاسمی (ER) ساخته می‌شوند. برای اینکه غشا به طور مساوی رشد کند، نیمی از این لیپیدها باید به لایه بیرونی منتقل شوند<span class="hidden"></span>. چون حرکت فلیپ‌فلاپ خودبه‌خودی خیلی کند است، سلول از ۳ آنزیم کمک می‌گیرد:
                </p>

                <div class="space-y-4">
                    <div class="bg-slate-700/50 p-4 rounded-xl border border-slate-600 flex items-center gap-4">
                        <div class="bg-emerald-500/20 text-emerald-400 w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm">In ⬇️</div>
                        <p class="text-sm text-slate-300"><strong>فلیپاز (Flippase):</strong> انتقال فسفولیپیدها (مثل فسفاتیدیل‌سرین) از لایه خارج به لایه <strong>داخل (سیتوزولی)</strong> با مصرف ATP (خانواده P4-ATPase)<span class="hidden"></span>.</p>
                    </div>
                    <div class="bg-slate-700/50 p-4 rounded-xl border border-slate-600 flex items-center gap-4">
                        <div class="bg-amber-500/20 text-amber-400 w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm">Out ⬆️</div>
                        <p class="text-sm text-slate-300"><strong>فلاپاز (Floppase):</strong> انتقال فسفولیپیدها از لایه داخل به لایه <strong>خارج</strong> (خانواده ناقلین ABC)<span class="hidden"></span>.</p>
                    </div>
                    <div class="bg-slate-700/50 p-4 rounded-xl border border-slate-600 flex items-center gap-4">
                        <div class="bg-fuchsia-500/20 text-fuchsia-400 w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm">↕️</div>
                        <p class="text-sm text-slate-300"><strong>اسکرامبلاز (Scramblase):</strong> انتقال تصادفی و غیر اختصاصی لیپیدها در <strong>هر دو جهت</strong> برای به هم زدن تعادل و تقارن<span class="hidden"></span>.</p>
                    </div>
                </div>
            </div>

            <!-- آپوپتوز (باکس هشدار) -->
            <div class="bg-red-900/10 border border-red-500/30 rounded-3xl p-8 relative shadow-inner mt-8">
                <div class="flex items-center gap-3 mb-4">
                    <span class="text-3xl">☠️</span>
                    <h4 class="text-xl font-black text-red-700">سیگنال «مرا بخور!» در مرگ سلولی (آپوپتوز)</h4>
                </div>
                <p class="text-red-900 leading-loose text-justify text-sm">
                    «فسفاتیدیل سرین» به طور طبیعی فقط در لایه <strong>داخلی</strong> غشا وجود دارد. اما وقتی سلول تصمیم به خودکشی برنامه‌ریزی‌شده (آپوپتوز) می‌گیرد، آنزیم <em>فلیپاز</em> غیرفعال شده و <em>اسکرامبلاز</em> فعال می‌شود! این کار باعث می‌شود فسفاتیدیل سرین به لایه <strong>بیرونی</strong> بیاید. قرار گرفتن این لیپید در سطح سلول، مثل یک پرچم قرمز برای ماکروفاژها عمل می‌کند که می‌گوید: <strong>«من مرده‌ام، مرا فاگوسیتوز کن!»</strong><span class="hidden"></span>.
                </p>
            </div>

        </div>
    `,
    quiz: [
        {
            question: "کدام یک از حرکات لیپیدی در غشای سلول بسیار کند و نادر است (حدود ۱ بار در ماه به صورت خودبه‌خودی)؟",
            options: [
                "چرخش حول محور طولی (Rotation)",
                "انتشار جانبی در یک لایه (Lateral diffusion)",
                "جابجایی عرضی یا فلیپ‌فلاپ (Flip-flop)",
                "هیچکدام، تمام حرکات در کسری از ثانیه رخ می‌دهند."
            ],
            answer: 2,
            explanation: "جابجایی عرضی یا پریدن از یک لایه به لایه مقابل (Flip-flop) بسیار نادر است، زیرا سر قطبی و آب‌دوست فسفولیپید باید از میان هسته به شدت آب‌گریز (چرب) غشا عبور کند<span class=\"hidden\"></span>."
        },
        {
            question: "سرعت جابجایی جانبی (Lateral diffusion) مولکول‌های لیپیدی با همسایگان خود در یک لایه غشا چقدر است؟",
            options: [
                "تقریباً ۱ بار در روز",
                "حدود ۱۰۰ بار در دقیقه",
                "۱۰ به توان ۷ بار در ثانیه",
                "هیچگاه جابجا نمی‌شوند."
            ],
            answer: 2,
            explanation: "مولکول‌های لیپیدی به راحتی و با سرعت سرسام‌آوری در لایه خود جابجا می‌شوند؛ آن‌ها با سرعت حدود ۱۰ به توان ۷ (ده میلیون) بار در ثانیه جای خود را با همسایه کناری عوض می‌کنند<span class=\"hidden\"></span>."
        },
        {
            question: "فسفولیپیدهای جدید در کدام بخش از سلول ساخته می‌شوند و مشکل توزیع آن‌ها چگونه حل می‌شود؟",
            options: [
                "در هسته ساخته شده و توسط رناترانسفرازها منتقل می‌شوند.",
                "در لایه خارجی غشای پلاسما ساخته شده و خودبه‌خود فلیپ‌فلاپ می‌کنند.",
                "عمدتاً در سمت سیتوزولی شبکه آندوپلاسمی (ER) ساخته شده و توسط ترانسلوکاتورهای فسفولیپید (مثل فلیپاز) به لایه دیگر منتقل می‌شوند.",
                "در لیزوزوم ساخته شده و توسط ماکروفاژها در غشا توزیع می‌شوند."
            ],
            answer: 2,
            explanation: "مولکول‌های فسفولیپید جدید عمدتاً در سمت سیتوزولی (تک‌لایه داخلی) شبکه آندوپلاسمی ساخته می‌شوند. برای رشد متقارن غشا، آنزیم‌های متصل به غشا به نام ترانسلوکاتورها (فلیپاز/فلاپاز) آن‌ها را به سرعت به لایه مقابل منتقل می‌کنند<span class=\"hidden\"></span>."
        },
        {
            question: "آنزیم «فلیپاز» (Flippase) دقیقاً چه عملکردی در غشای سلول دارد؟",
            options: [
                "لیپیدها را به طور تصادفی در هر دو جهت مخلوط می‌کند.",
                "فسفولیپیدها (مثل فسفاتیدیل‌سرین) را با مصرف ATP از لایه خارجی به لایه داخلی (سیتوزولی) منتقل می‌کند.",
                "فسفولیپیدها را از لایه داخلی به لایه خارجی پرتاب می‌کند.",
                "باعث قطع زنجیره هیدروکربنی لیپید می‌شود."
            ],
            answer: 1,
            explanation: "فلیپازها (مثل P4-ATPase) فسفولیپیدها را از لایه خارجی (Outer) به لایه داخلی (Inner/Cytosolic) منتقل می‌کنند. در حالی که فلاپازها عکس این عمل را انجام می‌دهند<span class=\"hidden\"></span>."
        },
        {
            question: "کدام آنزیم مسئول انتقال تصادفی و غیر اختصاصی لیپیدها در هر دو جهت بین دو لایه غشا است؟",
            options: [
                "فلیپاز",
                "فلاپاز",
                "اسکرامبلاز (Scramblase)",
                "لیپاز"
            ],
            answer: 2,
            explanation: "اسکرامبلازها آنزیم‌هایی هستند که فسفولیپیدها را به طور غیراختصاصی و در هر دو جهت بین دولایه غشا جابجا می‌کنند (جهت از بین بردن تقارن یا در مواقع خاص مثل آپوپتوز)<span class=\"hidden\"></span>."
        },
        {
            question: "در حالت طبیعی (سلامت سلول)، کدام فسفولیپید منحصراً در تک‌لایه داخلی (سیتوزولی) غشا متمرکز است و بار منفی خالص ایجاد می‌کند؟",
            options: [
                "فسفاتیدیل کولین",
                "اسفنگومیلین",
                "فسفاتیدیل سرین",
                "کلسترول"
            ],
            answer: 2,
            explanation: "فسفاتیدیل سرین تنها فسفولیپیدِ دارای بار منفی در pH فیزیولوژیک است که به صورت نامتقارن، در حالت طبیعی فقط در لایه داخلی (سیتوزولی) غشا حضور دارد<span class=\"hidden\"></span>."
        },
        {
            question: "سلول‌های ماکروفاژ از چه طریقی سلول‌های در حال مرگ (آپوپتوزی) را از سلول‌های زنده و سالم تشخیص می‌دهند؟",
            options: [
                "بر اساس ترشح هیالورونان توسط سلول مرده.",
                "قرار گرفتن «فسفاتیدیل سرین» در لایه خارجی غشای سلول آپوپتوزی.",
                "افزایش ضخامت غشای پایه به بیش از ۲۰۰ نانومتر.",
                "ترشح آنزیم کلاژناز از سلول مرده."
            ],
            answer: 1,
            explanation: "در هنگام مرگ برنامه‌ریزی شده سلول (آپوپتوز)، فسفاتیدیل سرین که به طور معمول در لایه داخلی است، به سرعت به لایه خارجی منتقل می‌شود. این امر به عنوان یک سیگنال «مرا بخور» برای ماکروفاژها عمل می‌کند تا سلول مرده را فاگوسیتوز کنند<span class=\"hidden\"></span>."
        },
        {
            question: "در هنگام فرآیند آپوپتوز (مرگ سلولی)، تغییرات آنزیم‌های جابجاگر لیپید چگونه است؟",
            options: [
                "فلیپاز فعال شده و اسکرامبلاز غیرفعال می‌شود.",
                "فلیپاز غیرفعال شده و اسکرامبلاز فعال می‌شود.",
                "هر دو آنزیم فلیپاز و فلاپاز غیرفعال می‌شوند.",
                "آنزیم‌های لیزوزومی جایگزین اسکرامبلاز می‌شوند."
            ],
            answer: 1,
            explanation: "برای اینکه فسفاتیدیل سرین به لایه خارجی منتقل شود، ترانسلوکاتور طبیعی آن یعنی «فلیپاز» (که آن را در لایه داخل نگه می‌دارد) غیرفعال شده، و در عوض «اسکرامبلاز» فعال می‌شود تا لیپیدها را به هر دو سو پراکنده کند<span class=\"hidden\"></span>."
        },
        {
            question: "اکثر ناقلین خانواده ABC در پستانداران (مانند پمپ‌های مقاومت دارویی)، به عنوان کدام آنزیم غشایی عمل می‌کنند؟",
            options: [
                "فلیپاز",
                "فلاپاز",
                "اسکرامبلاز",
                "کلاژناز"
            ],
            answer: 1,
            explanation: "اکثر انتقال‌دهنده‌های ABC (ATP-Binding Cassette) در پستانداران به عنوان «فلاپاز» (Floppase) عمل می‌کنند، یعنی مواد (از جمله فسفولیپیدها یا داروها) را از داخل به سمت خارج سلول پمپ می‌کنند<span class=\"hidden\"></span>."
        },
        {
            question: "چه عاملی باعث ایجاد «عدم تقارن» در غشای پلاسمایی یوکاریوت‌ها می‌شود؟",
            options: [
                "تجمع تمام پروتئین‌ها در لایه خارجی.",
                "توزیع نامساوی فسفولیپیدها (مثل تجمع فسفاتیدیل‌کولین در بیرون و فسفاتیدیل‌سرین در درون).",
                "حذف کامل کلسترول از لایه داخلی.",
                "فقدان پیوندهای دوگانه در اسیدهای چرب لایه خارجی."
            ],
            answer: 1,
            explanation: "عدم تقارن غشا به دلیل توزیع متفاوت لیپیدها در دو لایه است. مثلاً فسفاتیدیل کولین و اسفنگومیلین عمدتاً در تک‌لایه بیرونی، و فسفاتیدیل اتانول‌آمین و فسفاتیدیل سرین در تک‌لایه داخلی قرار دارند که این عدم تقارن برای عملکردهای سلولی به شدت حیاتی است<span class=\"hidden\"></span>."
        }
    ]
},
{
id: "module_10",
    title: "ماژول دهم: سیالیت غشا و جادوی کلسترول",
    subtitle: "عوامل مؤثر بر چسبندگی غشا، فاز ژل و بافر کلسترول",
    shortTitle: "۱۰. کلسترول و سیالیت",
    content: `
        <div class="space-y-12">
            
            <!-- بنر بلاگری -->
            <div class="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-yellow-700 to-amber-900 p-10 text-white shadow-2xl">
                <div class="absolute -left-10 -bottom-10 opacity-10 text-[12rem] leading-none">🧈</div>
                <div class="relative z-10">
                    <span class="inline-block py-1 px-3 rounded-full bg-amber-500/30 border border-amber-400/50 text-amber-100 text-sm font-bold mb-4 backdrop-blur-sm">ترمودینامیک سلولی</span>
                    <h3 class="text-3xl font-black mb-4 leading-tight">چرا غشای سلول یخ نمی‌زند؟!</h3>
                    <p class="text-lg text-amber-50 leading-relaxed text-justify opacity-95 max-w-3xl">
                        غشای سلول باید شبیه روغن زیتون روان باشد! اگر ویسکوزیته (چسبندگی) غشا از حد آستانه بیشتر شود، پمپ‌ها و آنزیم‌های غشایی از کار می‌افتند و سلول می‌میرد. با کاهش دما، غشا تمایل دارد مثل کره منجمد شود (تبدیل به ژل). اما سلول ترفندهایی برای مقابله با این «فاز انتقالی» دارد که قهرمان اصلی آن <strong>کلسترول</strong> است<span class="hidden"></span>.
                    </p>
                </div>
            </div>

            <!-- عوامل موثر بر سیالیت -->
            <div class="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
                <div class="absolute top-0 right-0 w-2 h-full bg-yellow-500"></div>
                <h4 class="text-xl font-black text-slate-800 mb-6 flex items-center gap-3">
                    <span class="text-2xl">🌡️</span> چه چیزی سیالیت غشا را کنترل می‌کند؟
                </h4>
                <p class="text-slate-600 leading-loose mb-6 text-justify">
                    دمایی که در آن غشا از حالت مایع به حالت کریستالی سخت (ژل) تغییر می‌کند، دمای <strong>فاز انتقالی (Phase Transition)</strong> نام دارد<span class="hidden"></span>. دو عامل ساختاری در دمِ فسفولیپیدها این دما را تعیین می‌کنند:
                </p>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center">
                        <div class="text-3xl mb-3">📏</div>
                        <h5 class="font-bold text-slate-800 mb-2">۱. طول زنجیره کربنی</h5>
                        <p class="text-sm text-slate-600 leading-relaxed">هرچه دم هیدروکربنی <strong>کوتاه‌تر</strong> باشد، تعامل بین دم‌ها کمتر شده و غشا <strong>سیال‌تر</strong> (روان‌تر) می‌شود<span class="hidden"></span>.</p>
                    </div>
                    <div class="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center">
                        <div class="text-3xl mb-3">➰</div>
                        <h5 class="font-bold text-slate-800 mb-2">۲. پیوند دوگانه سیس (Cis)</h5>
                        <p class="text-sm text-slate-600 leading-relaxed">پیوندهای دوگانه در زنجیره اسید چرب، «پیچ‌خوردگی» ایجاد می‌کنند. این پیچ‌ها مانع از کیپ شدن لیپیدها شده و <strong>سیالیت را افزایش</strong> می‌دهند<span class="hidden"></span>.</p>
                    </div>
                </div>
                <div class="mt-4 p-4 bg-emerald-50 rounded-xl border border-emerald-100 text-sm text-emerald-800 text-center">
                    <em>باکتری‌ها در محیط سرد، اسیدهای چرب با پیوند دوگانه بیشتر تولید می‌کنند تا یخ نزنند!</em><span class="hidden"></span>
                </div>
            </div>

            <!-- کلسترول (باکس دیپ دایو) -->
            <div class="bg-slate-800 text-slate-200 p-8 rounded-3xl shadow-lg relative overflow-hidden mt-8">
                <div class="absolute -right-20 -bottom-20 w-64 h-64 bg-yellow-500/20 rounded-full blur-3xl"></div>
                <h4 class="text-xl font-black text-yellow-400 mb-4 flex items-center gap-3">
                    <span class="text-3xl">💍</span> کلسترول؛ بافر سیالیت و محافظ غشا
                </h4>
                <p class="text-slate-300 leading-loose text-justify mb-6">
                    کلسترول یک استروئید متشکل از ۴ حلقه صلب (سخت) است<span class="hidden"></span>. این مولکول در غشای پستانداران بسیار فراوان است (تا ۵۰٪ در گلبول‌های قرمز<span class="hidden"></span>). کلسترول نقش یک <strong>«بافر سیالیت دوجانبه»</strong> را بازی می‌کند:
                </p>

                <div class="space-y-4">
                    <div class="bg-slate-700/50 p-4 rounded-xl border border-slate-600 flex items-start gap-4">
                        <div class="text-2xl mt-1">🔥</div>
                        <div>
                            <strong class="text-yellow-300 block mb-1">در دمای بالا (گرما):</strong>
                            <p class="text-sm text-slate-400">حلقه‌های استروئیدی سخت آن با زنجیره‌های لیپیدی تعامل کرده، آن‌ها را بی‌حرکت می‌کند و <strong>مانع از روان شدن بیش از حد</strong> و از هم پاشیدن غشا می‌شود<span class="hidden"></span>.</p>
                        </div>
                    </div>
                    <div class="bg-slate-700/50 p-4 rounded-xl border border-slate-600 flex items-start gap-4">
                        <div class="text-2xl mt-1">❄️</div>
                        <div>
                            <strong class="text-yellow-300 block mb-1">در دمای پایین (سرما):</strong>
                            <p class="text-sm text-slate-400">از چسبیدن و تبلور (کریستاله شدن) زنجیره‌های هیدروکربنی به هم جلوگیری کرده و <strong>مانع از یخ زدن (کاهش سیالیت)</strong> می‌شود<span class="hidden"></span>.</p>
                        </div>
                    </div>
                    <div class="bg-slate-700/50 p-4 rounded-xl border border-slate-600 flex items-start gap-4">
                        <div class="text-2xl mt-1">🛡️</div>
                        <div>
                            <strong class="text-yellow-300 block mb-1">کاهش نفوذپذیری:</strong>
                            <p class="text-sm text-slate-400">کلسترول فضاهای خالی بین فسفولیپیدها را پر کرده و غشا را متراکم می‌کند. در نتیجه، غشا در برابر عبور غیرفعال آب و مولکول‌های کوچک <strong>غیرقابل نفوذتر</strong> می‌شود<span class="hidden"></span>.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    `,
    quiz: [
        {
            question: "اگر ویسکوزیته (چسبندگی) غشای سلولی فراتر از سطح آستانه افزایش یابد، چه اتفاقی برای عملکردهای غشا می‌افتد؟",
            options: [
                "سیالیت غشا افزایش یافته و سلول تکثیر می‌شود.",
                "برخی از فرآیندهای انتقال غشایی و فعالیت‌های آنزیمی متوقف می‌شوند.",
                "آنزیم فلیپاز با سرعت بیشتری فسفولیپیدها را منتقل می‌کند.",
                "آب با سرعت بسیار بیشتری از غشا عبور می‌کند."
            ],
            answer: 1,
            explanation: "سیالیت غشا باید دقیقاً تنظیم شود. افزایش ویسکوزیته (سفت شدن غشا) باعث اختلال در حرکت مولکول‌ها شده و در نتیجه بسیاری از فعالیت‌های آنزیمی غشا و فرآیندهای انتقال متوقف می‌شوند<span class=\"hidden\"></span>."
        },
        {
            question: "دمای فاز انتقالی (Phase transition) در یک غشای دولایه لیپیدی به چه معناست؟",
            options: [
                "دمایی که در آن غشا تبخیر می‌شود.",
                "دمایی که در آن کلسترول از غشا خارج می‌شود.",
                "دمایی که در آن غشا از حالت مایع به حالت کریستالی سخت (ژل) تغییر می‌کند.",
                "دمایی که در آن غشا پاره شده و ترمیم نمی‌شود."
            ],
            answer: 2,
            explanation: "با کاهش دما، غشای لیپیدی در یک نقطه انجماد مشخص از حالت مایع (سیال) به حالت ژل یا کریستالی سخت در می‌آید که به آن دمای فاز انتقالی می‌گویند<span class=\"hidden\"></span>."
        },
        {
            question: "کدام یک از تغییرات ساختاری زیر باعث «افزایش سیالیت» (کاهش دمای فاز انتقالی) غشا می‌شود؟",
            options: [
                "افزایش طول زنجیره‌های هیدروکربنی لیپیدها.",
                "کاهش تعداد پیوندهای دوگانه در اسیدهای چرب.",
                "کوتاه‌تر شدن زنجیره‌های هیدروکربنی و افزایش پیوندهای دوگانه سیس (Cis).",
                "جایگزینی تمام اسیدهای چرب غیراشباع با اسیدهای چرب اشباع."
            ],
            answer: 2,
            explanation: "زنجیره‌های کوتاه‌تر، تماس کمتری با یکدیگر دارند. همچنین پیوندهای دوگانه سیس، پیچ‌خوردگی ایجاد کرده و از کیپ شدن لیپیدها جلوگیری می‌کنند. هر دو عامل باعث افزایش سیالیت می‌شوند<span class=\"hidden\"></span>."
        },
        {
            question: "باکتری‌ها و مخمرها برای حفظ سیالیت غشای خود در هنگام «کاهش دمای محیط» (سرد شدن) چه سازگاری انجام می‌دهند؟",
            options: [
                "اسیدهای چرب با پیوندهای دوگانه بیشتر سنتز می‌کنند.",
                "مقدار زیادی کلسترول به غشای خود اضافه می‌کنند.",
                "اسیدهای چرب با زنجیره بسیار بلند و کاملاً اشباع تولید می‌کنند.",
                "لایه پپتیدوگلیکان دیواره را تجزیه می‌کنند."
            ],
            answer: 0,
            explanation: "موجوداتی که دمایشان با محیط نوسان دارد، در سرما اسیدهای چرب دارای پیوند دوگانه بیشتر (غیراشباع) تولید می‌کنند. این پیوندهای دوگانه از کیپ شدن و انجماد غشا جلوگیری کرده و سیالیت را حفظ می‌کند<span class=\"hidden\"></span>."
        },
        {
            question: "کدام یک از ویژگی‌های زیر مربوط به مولکول «کلسترول» در غشای پلاسمایی سلول‌های حیوانی است؟",
            options: [
                "ساختاری کاملاً خطی و بدون حلقه دارد.",
                "دارای ۴ حلقه استروئیدی صلب، یک گروه هیدروکسیل قطبی کوچک و یک دم هیدروکربنی کوتاه است.",
                "فقط در لایه داخلی (سیتوزولی) غشا وجود دارد.",
                "در غشای باکتری‌ها بسیار فراوان است."
            ],
            answer: 1,
            explanation: "کلسترول یک استروئید است که سیستم حلقوی آن از ۴ حلقه (سه حلقه ۶ کربنه و یک حلقه ۵ کربنه) تشکیل شده است. دارای یک گروه هیدروکسیل در کربن شماره ۳ (سر قطبی) و یک زنجیره هیدروکربنی کوتاه در کربن ۱۷ است<span class=\"hidden\"></span>."
        },
        {
            question: "مقدار کلسترول در غشای پلاسمایی سلول‌های پستانداران چقدر است؟",
            options: [
                "کمتر از ۱ درصد",
                "حدود ۵ درصد",
                "در غلظت‌های بالا، حدود ۲۰ تا ۳۰ مول درصد (در گلبول‌های قرمز تا ۵۰ مول درصد).",
                "بیش از ۹۰ درصد کل غشا را تشکیل می‌دهد."
            ],
            answer: 2,
            explanation: "برخلاف سایر لیپیدها، کلسترول در غشای سلول‌های حیوانی در غلظت‌های بسیار بالایی یافت می‌شود (معمولاً ۲۰-۳۰٪ و در غشای گلبول قرمز تا ۵۰٪). در حالی که باکتری‌ها فاقد کلسترول هستند<span class=\"hidden\"></span>."
        },
        {
            question: "تأثیر کلسترول بر «نفوذپذیری» غشای دولایه لیپیدی چیست؟",
            options: [
                "نفوذپذیری غشا را به شدت افزایش داده و غشا را پاره می‌کند.",
                "با پر کردن فضاهای خالی و ایجاد تراکم، نفوذپذیری غشا را در برابر عبور غیرفعال آب و مولکول‌های کوچک کاهش می‌دهد.",
                "هیچ تأثیری بر نفوذپذیری آب ندارد و فقط برای یون‌ها سد ایجاد می‌کند.",
                "منحصراً نفوذپذیری در برابر پروتئین‌های درشت را افزایش می‌دهد."
            ],
            answer: 1,
            explanation: "از جنبه مکانیکی، کلسترول باعث افزایش استحکام و تراکم غشا می‌شود و با پر کردن فضاها، مقاومت غشا را در مقابل ورود غیرفعال آب، مولکول‌های کوچک و گازها به شدت افزایش می‌دهد (نفوذپذیری کاهش می‌یابد)<span class=\"hidden\"></span>."
        },
        {
            question: "عملکرد دوگانه کلسترول به عنوان «بافر سیالیت» در دماهای پایین (سرما) چگونه است؟",
            options: [
                "با بی‌حرکت کردن زنجیره‌های اسید چرب، غشا را سریع‌تر منجمد می‌کند.",
                "از تجمع و تبلور (کریستاله شدن) زنجیره‌های هیدروکربنی جلوگیری کرده و مانع از فاز انتقالی و یخ‌زدگی غشا می‌شود.",
                "گرما تولید کرده و سلول را گرم می‌کند.",
                "باعث فعالیت شدید فلیپاز می‌شود."
            ],
            answer: 1,
            explanation: "اگرچه کلسترول در حالت عادی غشا را متراکم می‌کند، اما در دماهای پایین (سرما) با قرار گرفتن بین زنجیره‌های هیدروکربنی لیپیدها، از چسبیدن و تبلور آن‌ها جلوگیری کرده و غشا را سیال نگه می‌دارد<span class=\"hidden\"></span>."
        },
        {
            question: "وجه صاف و بدون جانشینِ سیستم حلقه کلسترول چه نام دارد؟",
            options: [
                "وجه بتا",
                "وجه سیس",
                "وجه ترانس",
                "وجه آلفا"
            ],
            answer: 3,
            explanation: "سیستم حلقه کلسترول نامتقارن است. وجه مسطح و بدون جانشین (صاف) آن، وجه آلفا نامیده می‌شود. در مقابل، وجه خشن که دارای گروه‌های متیل جانشین است، وجه بتا نام دارد<span class=\"hidden\"></span>."
        },
        {
            question: "باکتری‌ها فاقد کلسترول هستند، در حالی که غشای سلول‌های یوکاریوتی (مثل انسان) مخلوطی از فسفولیپیدها و مقادیر بالای کلسترول است. دلیل این تنوع لیپیدی در یوکاریوت‌ها چیست؟",
            options: [
                "باکتری‌ها نیازی به غشا ندارند.",
                "لیپیدهای غشایی در یوکاریوت‌ها به عنوان یک «حلال دو بعدی» و محیط اختصاصی برای عملکرد بهتر پروتئین‌ها و آنزیم‌های مختلف غشایی عمل می‌کنند.",
                "کلسترول فقط برای ساخت دیواره سلولی گیاهان لازم است.",
                "تنوع لیپیدی صرفاً برای افزایش وزن سلول حیوانی است."
            ],
            answer: 1,
            explanation: "غشاهای یوکاریوتی حاوی تنوع عظیمی از لیپیدها و کلسترول هستند. این تنوع باعث می‌شود غشا به عنوان یک حلال دو بعدی عمل کند تا پروتئین‌ها و آنزیم‌های غشاییِ مختلف بتوانند در محیط‌های لیپیدیِ اختصاصی خود به بهترین شکل عمل کنند<span class=\"hidden\"></span>."
        }
    ]
},
{
id: "module_11",
    title: "ماژول یازدهم: جزایر شناور در اقیانوس سلول",
    subtitle: "آشنایی با اسفنگولیپیدها و ریزدامنه‌های لیپید رفت (Lipid Rafts)",
    shortTitle: "۱۱. اسفنگولیپیدها و رفت‌ها",
    content: `
        <div class="space-y-12">
            
            <!-- بنر بلاگری -->
            <div class="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-indigo-900 to-slate-900 p-10 text-white shadow-2xl">
                <div class="absolute -left-10 -bottom-10 opacity-10 text-[12rem] leading-none">🏝️</div>
                <div class="relative z-10">
                    <span class="inline-block py-1 px-3 rounded-full bg-indigo-500/30 border border-indigo-400/50 text-indigo-200 text-sm font-bold mb-4 backdrop-blur-sm">میکرودامین‌های غشایی</span>
                    <h3 class="text-3xl font-black mb-4 leading-tight">قایق‌های نجات در دریای طوفانی غشا!</h3>
                    <p class="text-lg text-indigo-100 leading-relaxed text-justify opacity-95 max-w-3xl">
                        غشای سلولی کاملاً تصادفی و درهم‌ریخته نیست! در میان دریای روان فسفولیپیدها، جزایر کوچک و فشرده‌ای وجود دارند که مثل «قایق‌های نجات» شناورند. این قایق‌ها که <strong>لیپید رفت (Lipid Raft)</strong> نامیده می‌شوند، پر از گیرنده‌های پیام‌رسان هستند و بدون آن‌ها سلول‌های ما کاملاً کور و کر می‌شوند<span class="hidden"></span>!
                    </p>
                </div>
            </div>

            <!-- ساختار اسفنگولیپیدها -->
            <div class="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
                <div class="absolute top-0 right-0 w-2 h-full bg-indigo-500"></div>
                <h4 class="text-xl font-black text-slate-800 mb-6 flex items-center gap-3">
                    <span class="text-2xl">🧩</span> خانواده اسفنگولیپیدها
                </h4>
                <p class="text-slate-600 leading-loose mb-6 text-justify">
                    برخلاف گلیسروفسفولیپیدها که اسکلت «گلیسرولی» دارند، این گروه روی یک الکلِ آمین‌دارِ بلند به نام <strong>اسفنگوزین</strong> سوار می‌شوند<span class="hidden"></span>.
                </p>
                
                <div class="space-y-4">
                    <div class="bg-slate-50 p-5 rounded-2xl border border-slate-200 flex flex-col md:flex-row gap-4 items-center hover:shadow-md transition-shadow">
                        <div class="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-black text-xl shrink-0">۱</div>
                        <div>
                            <h5 class="font-bold text-slate-800 mb-1">سرآمید (Ceramide)</h5>
                            <p class="text-sm text-slate-600 leading-relaxed text-justify">پایه‌ای‌ترین اسفنگولیپید. از اتصال یک اسید چرب (با پیوند آمیدی) به اسفنگوزین ساخته می‌شود<span class="hidden"></span>.</p>
                        </div>
                    </div>
                    <div class="bg-slate-50 p-5 rounded-2xl border border-slate-200 flex flex-col md:flex-row gap-4 items-center hover:shadow-md transition-shadow">
                        <div class="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-black text-xl shrink-0">۲</div>
                        <div>
                            <h5 class="font-bold text-slate-800 mb-1">اسفنگومیلین (Sphingomyelin)</h5>
                            <p class="text-sm text-slate-600 leading-relaxed text-justify">وقتی یک گروه <em>فسفوکولین</em> به کربن شماره یک سرآمید وصل شود، این مولکول ساخته می‌شود (فراوان در لایه خارجی غشا و غلاف میلین)<span class="hidden"></span>.</p>
                        </div>
                    </div>
                    <div class="bg-slate-50 p-5 rounded-2xl border border-slate-200 flex flex-col md:flex-row gap-4 items-center hover:shadow-md transition-shadow">
                        <div class="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-black text-xl shrink-0">۳</div>
                        <div>
                            <h5 class="font-bold text-slate-800 mb-1">سربروزید (Cerebroside)</h5>
                            <p class="text-sm text-slate-600 leading-relaxed text-justify">یک گلیکولیپید ساده! اگر به جای فسفات، یک مولکول <em>کربوهیدرات (قند)</em> به کربن شماره یکِ سرآمید بچسبد، سربروزید شکل می‌گیرد<span class="hidden"></span>.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- دیپ دایو: لیپید رفت‌ها -->
            <div class="bg-slate-800 text-slate-200 p-8 rounded-3xl shadow-lg relative overflow-hidden mt-8">
                <div class="absolute -right-20 -bottom-20 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl"></div>
                <h4 class="text-xl font-black text-cyan-400 mb-4 flex items-center gap-3">
                    <span class="text-3xl">🚤</span> لیپید رفت‌ها (Lipid Rafts) چطور کار می‌کنند؟
                </h4>
                <p class="text-slate-300 leading-loose text-justify mb-6">
                    بیشتر چربی‌های غشا به طور تصادفی پخش شده‌اند. اما نیروهای جاذبه باعث می‌شوند برخی لیپیدها دور هم جمع شوند و یک میکرودامین تخصصی (کوچکتر از ۷۰ نانومتر) بسازند. ویژگی‌های این «قایق‌های شناور» چیست؟<span class="hidden"></span>
                </p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="bg-slate-700/50 p-5 rounded-2xl border border-slate-600">
                        <h5 class="text-cyan-300 font-bold mb-2">ترکیبات اصلی</h5>
                        <p class="text-sm text-slate-400">به شدت غنی از <strong>کلسترول</strong> و <strong>اسفنگولیپیدها</strong> هستند<span class="hidden"></span>.</p>
                    </div>
                    <div class="bg-slate-700/50 p-5 rounded-2xl border border-slate-600">
                        <h5 class="text-cyan-300 font-bold mb-2">شکل فیزیکی دم‌ها</h5>
                        <p class="text-sm text-slate-400">اسفنگولیپیدهای این ناحیه، زنجیره‌های اسید چرب <strong>بلندتر و صاف‌تر (اشباع)</strong> دارند. پس این قسمت از غشا <strong>ضخیم‌تر و فشرده‌تر</strong> است<span class="hidden"></span>.</p>
                    </div>
                </div>
                
                <div class="mt-6 bg-indigo-900/40 border border-indigo-500/50 rounded-xl p-5 relative z-10">
                    <h5 class="font-bold text-indigo-300 mb-2">🎯 عملکرد حیاتی</h5>
                    <p class="text-sm text-indigo-100 leading-relaxed text-justify">
                        این فشردگی باعث می‌شود پروتئین‌های خاصی (مثل گیرنده‌های سیگنال یا پروتئین‌های لنگردار GPI) در این قایق‌ها متمرکز شوند. در واقع لیپید رفت‌ها <strong>پلتفرم‌هایی برای انتقال سیگنال</strong> (مثل انتقال عصبی توسط GDNF) و طبقه‌بندی پروتئین‌ها در سلول هستند<span class="hidden"></span>.
                    </p>
                </div>
            </div>

        </div>
    `,
    quiz: [
        {
            question: "کدام یک از مولکول‌های زیر جزء لیپیدهای غشایی با پایه و اسکلت «گلیسرول» نمی‌باشد؟",
            options: [
                "فسفاتیدیل کولین",
                "فسفاتیدیل سرین",
                "پلاسمالوژن",
                "اسفنگومیلین"
            ],
            answer: 3,
            explanation: "اسفنگومیلین به خانواده اسفنگولیپیدها تعلق دارد و اسکلت اصلی آن به جای گلیسرول، یک الکل آمین‌دار بلند به نام «اسفنگوزین» است<span class=\"hidden\"></span>."
        },
        {
            question: "ساختار مولکول «سرآمید (Ceramide)» از اتصال کدام اجزا به یکدیگر تشکیل می‌شود؟",
            options: [
                "یک مولکول گلیسرول + سه اسید چرب",
                "اسفنگوزین + یک اسید چرب (با پیوند آمیدی)",
                "سرآمید + یک مولکول قند (کربوهیدرات)",
                "اسفنگوزین + یک گروه فسفات"
            ],
            answer: 1,
            explanation: "در ساختار اسفنگولیپیدها، اگر به الکلِ اسفنگوزین یک اسید چرب از طریق پیوند آمیدی متصل شود، ساختار پایه‌ای به نام سرآمید تشکیل می‌گردد<span class=\"hidden\"></span>."
        },
        {
            question: "مولکول «سربروزید (Cerebroside)» در کدام دسته از لیپیدهای غشایی قرار می‌گیرد و تفاوت آن با اسفنگومیلین چیست؟",
            options: [
                "گلیکولیپید است - در کربن شماره ۱ به جای فسفوکولین، دارای یک مولکول کربوهیدرات (قند) است.",
                "گلیسروفسفولیپید است - دارای سه زنجیره اسید چرب است.",
                "استروئید است - از ۴ حلقه صلب تشکیل شده است.",
                "پلاسمالوژن است - دارای پیوند وینیل اتر می‌باشد."
            ],
            answer: 0,
            explanation: "اگر به کربن شماره یکِ سرآمید یک کربوهیدرات (قند) متصل شود، گلیکولیپیدِ ساده‌ای به نام سربروزید شکل می‌گیرد. در حالی که اتصال فسفوکولین باعث تولید اسفنگومیلین می‌شود<span class=\"hidden\"></span>."
        },
        {
            question: "«لیپید رفت‌ها» (Lipid Rafts) به صورت کلاسیک میکرودامین‌هایی در غشا هستند که به شدت از کدام دو مولکول لیپیدی غنی شده‌اند؟",
            options: [
                "فسفاتیدیل‌سرین و هیالورونان",
                "کلسترول و اسفنگولیپیدها",
                "پلاسمالوژن‌ها و تری‌گلیسریدها",
                "کاردیولیپین و گلیکوپروتئین‌ها"
            ],
            answer: 1,
            explanation: "لیپید رفت‌ها میکرودامین‌های غشاییِ پلاسماییِ غنی از کلسترول و اسفنگولیپیدها هستند که محیط لیپیدی منظمی را در میان دریای سیال غشا فراهم می‌کنند<span class=\"hidden\"></span>."
        },
        {
            question: "ویژگی فیزیکی زنجیره‌های اسید چرب در ناحیه «لیپید رفت» چه تفاوتی با سایر بخش‌های غشا دارد؟",
            options: [
                "بسیار کوتاه و به شدت غیراشباع (پر از خمیدگی) هستند.",
                "دارای اسیدهای چرب با زنجیره بلندتر و صاف‌تر (اشباع) هستند که باعث فشردگی و ضخامت بیشتر این ناحیه می‌شود.",
                "کاملاً فاقد اسید چرب بوده و فقط از حلقه‌های کلسترول ساخته شده‌اند.",
                "فقط از اسیدهای چرب آزاد تشکیل شده‌اند."
            ],
            answer: 1,
            explanation: "رفت‌ها دارای اسیدهای چرب با زنجیره بلندتر و صاف‌تر (اشباع) نسبت به اسیدهای چرب در سایر فسفولیپیدها هستند. این ویژگی باعث می‌شود قسمتی که رفت قرار دارد فشرده‌تر و ضخیم‌تر از سایر قسمت‌ها باشد<span class=\"hidden\"></span>."
        },
        {
            question: "کدام یک از پروتئین‌های غشایی زیر به وفور در لیپید رفت‌ها متمرکز شده و با آن‌ها غنی می‌شوند؟",
            options: [
                "پروتئین‌های متصل به گلیکوزیل فسفاتیدیل اینوزیتول (GPI) و پروتئین‌های دخیل در انتقال سیگنال",
                "کلاژنازها و پمپ‌های سدیم-پتاسیم",
                "صرفاً آنزیم‌های فلیپاز و فلاپاز",
                "رشته‌های کلاژن نوع IV"
            ],
            answer: 0,
            explanation: "به دلیل فشردگی لیپید رفت‌ها، آن‌ها می‌توانند پروتئین‌های بیشتری را در خود جای دهند. رفت‌ها با پروتئین‌های لنگردار GPI و همچنین پروتئین‌های دخیل در انتقال سیگنال غنی می‌شوند و به عنوان مراکز سازمان‌دهی عمل می‌کنند<span class=\"hidden\"></span>."
        },
        {
            question: "ارتباط دولایه غشایی (لایه داخلی و خارجی) در ناحیه «لیپید رفت‌ها» چگونه است؟",
            options: [
                "هیچ ارتباطی با هم ندارند و کاملاً مستقل می‌لغزند.",
                "توسط پروتئین‌های کلاترین به هم دوخته شده‌اند.",
                "زنجیره‌های بلند هیدروکربنی اسفنگولیپیدهای یک لایه، با زنجیره‌های لایه مقابل تعامل (Interdigitation) دارند.",
                "توسط پیوندهای دی‌سولفیدیِ کلسترول به هم متصلند."
            ],
            answer: 2,
            explanation: "در بیشتر قسمت‌های غشا، مولکول‌های دو لایه مستقل جابجا می‌شوند، اما در لیپید رفت‌ها، زنجیره‌های بلند هیدروکربنی اسفنگولیپیدهای یک لایه با زنجیره‌های لایه دیگر تعامل دارند و دو لایه از طریق دم‌های چربی خود با هم ارتباط برقرار می‌کنند<span class=\"hidden\"></span>."
        },
        {
            question: "کدام یک از عبارات زیر در مورد دینامیک و حرکت مولکول‌ها در «لیپید رفت‌ها» صحیح است؟",
            options: [
                "رفت‌ها ساختارهایی کاملاً منجمد (فاز کریستالی) بوده و هیچ‌گونه تحرکی ندارند.",
                "با وجود فشردگی، رفت‌ها ساختارهای پویایی هستند و اجزای آن‌ها مقداری تحرک جانبی و چرخشی را حفظ کرده‌اند.",
                "مولکول‌ها در لیپید رفت فقط با سرعت بسیار بالا فلیپ‌فلاپ می‌کنند.",
                "لیپید رفت‌ها به طور دائم از غشا جدا شده و وارد هسته می‌شوند."
            ],
            answer: 1,
            explanation: "علیرغم ساختار بسته‌بندی شده و فشرده‌ی رفت‌ها، این میکرودامین‌ها نیز ساختارهای پویایی هستند، زیرا اجزای آن‌ها هنوز مقداری تحرک جانبی و چرخشی را در غشا حفظ کرده‌اند<span class=\"hidden\"></span>."
        },
        {
            question: "کدام فاکتور عصبی برای انتقال سیگنال خود از پلتفرم‌های «لیپید رفت» در غشای پلاسمایی نورون‌ها استفاده می‌کند؟",
            options: [
                "فاکتور رشد فیبروبلاست (FGF)",
                "آگرین (Agrin)",
                "لیگاندهای خانواده فاکتور نوروتروفیک مشتق از گلیال (GDNF)",
                "اندوستاتین"
            ],
            answer: 2,
            explanation: "در نورون‌ها، لیپید رفت‌ها به عنوان پلتفرم‌هایی برای انتقال سیگنال عمل می‌کنند که توسط چندین کلاس از عوامل نوروتروفیک از جمله لیگاندهای خانواده فاکتور نوروتروفیک مشتق از گلیال (GDNF) آغاز می‌شود<span class=\"hidden\"></span>."
        },
        {
            question: "حدود اندازه قطر یک «لیپید رفت» معمولی در غشای پلاسمایی سلول حیوانی چقدر است؟",
            options: [
                "حدود ۱ میکرومتر",
                "بیش از ۵۰۰ نانومتر",
                "کوچک و معمولاً در حدود ۷۰ نانومتر",
                "کمتر از ۱ نانومتر"
            ],
            answer: 2,
            explanation: "تصور می‌شود که غشای پلاسمایی سلول‌های حیوانی حاوی بسیاری از رفت‌های لیپیدی کوچک است که اندازه آن‌ها در حدود ۷۰ نانومتر قطر می‌باشد<span class=\"hidden\"></span>."
        }
    ]
},
{
id: "module_12",
    title: "ماژول دوازدهم: روکش‌های قندی و غلاف‌های عصبی",
    subtitle: "پلاسمالوژن‌ها، بیماری RCDP و گیرنده مرگبار باکتری وبا",
    shortTitle: "۱۲. پلاسمالوژن و گلیکولیپید",
    content: `
        <div class="space-y-12">
            
            <!-- بنر بلاگری -->
            <div class="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-fuchsia-900 to-pink-900 p-10 text-white shadow-2xl">
                <div class="absolute -right-10 -bottom-10 opacity-10 text-[12rem] leading-none">🍬</div>
                <div class="relative z-10">
                    <span class="inline-block py-1 px-3 rounded-full bg-pink-500/30 border border-pink-400/50 text-pink-100 text-sm font-bold mb-4 backdrop-blur-sm">گلیکوکالیکس و بیماری‌ها</span>
                    <h3 class="text-3xl font-black mb-4 leading-tight">چرا باکتری وبا فقط به سلول‌های روده حمله می‌کند؟</h3>
                    <p class="text-lg text-pink-50 leading-relaxed text-justify opacity-95 max-w-3xl">
                        سطح سلول‌های ما برهنه نیست، بلکه با لایه‌ای ضخیم از قندها (گلیکوکالیکس) پوشیده شده است. این قندها که به لیپیدها متصلند (گلیکولیپیدها)، مثل «کد ملی» سلول عمل می‌کنند. متاسفانه برخی باکتری‌های قاتل مثل عامل <strong>بیماری وبا</strong>، یاد گرفته‌اند چطور این کدهای هویتی را به عنوان دستگیره برای نفوذ به سلول استفاده کنند<span class="hidden"></span>!
                    </p>
                </div>
            </div>

            <!-- پلاسمالوژن‌ها و غلاف میلین -->
            <div class="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
                <div class="absolute top-0 right-0 w-2 h-full bg-fuchsia-500"></div>
                <h4 class="text-xl font-black text-slate-800 mb-6 flex items-center gap-3">
                    <span class="text-2xl">⚡</span> پلاسمالوژن‌ها: لیپیدهای پرسرعت عصبی
                </h4>
                <p class="text-slate-600 leading-loose mb-6 text-justify">
                    پلاسمالوژن‌ها زیرگروهی از گلیسروفسفولیپیدها هستند. با این تفاوت که به جای پیوند استری معمولی، دارای یک <strong>پیوند وینیل اتر</strong> می‌باشند<span class="hidden"></span>. این تغییر کوچک تفاوت بزرگی ایجاد می‌کند:
                </p>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="bg-fuchsia-50 p-6 rounded-2xl border border-fuchsia-100">
                        <h5 class="font-bold text-fuchsia-800 mb-2">محل ساخت و حضور</h5>
                        <p class="text-sm text-fuchsia-700 leading-relaxed">آنزیم‌های سازنده این پیوندِ اتری در <strong>پراکسی‌زوم‌ها</strong> قرار دارند. این لیپیدها جزء اصلی <strong>غلاف میلین</strong> در سلول‌های عصبی هستند<span class="hidden"></span>.</p>
                    </div>
                    <div class="bg-rose-50 p-6 rounded-2xl border border-rose-100">
                        <h5 class="font-bold text-rose-800 mb-2">بیماری RCDP</h5>
                        <p class="text-sm text-rose-700 leading-relaxed">جهش در ژن‌های بیوسنتز پلاسمالوژن باعث بیماری کشنده <strong>RCDP</strong> (ریزوملیک کندرودیسپلازی پونکتاتا) همراه با تاخیر رشد شدید و آب‌مروارید می‌شود<span class="hidden"></span>.</p>
                    </div>
                </div>
                <div class="mt-4 p-4 bg-slate-50 rounded-xl text-sm text-slate-600 text-center font-bold">
                    نکته: غشاهای حاوی پلاسمالوژن متراکم‌تر و سفت‌ترند، زیرا پیوند وینیل اتر اجازه می‌دهد زنجیره‌های چربی نزدیک‌تر به هم قرار گیرند<span class="hidden"></span>.
                </div>
            </div>

            <!-- گلیکولیپیدها و گانگلیوزیدها -->
            <div class="bg-slate-800 text-slate-200 p-8 rounded-3xl shadow-lg relative overflow-hidden mt-8">
                <div class="absolute -left-20 -top-20 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl"></div>
                <h4 class="text-xl font-black text-pink-400 mb-4 flex items-center gap-3">
                    <span class="text-3xl">🍭</span> گلیکولیپیدها؛ روکش شیرین اما خطرناک
                </h4>
                <p class="text-slate-300 leading-loose text-justify mb-6">
                    گلیکولیپیدها نامتقارن‌ترین لیپیدهای غشا هستند. آن‌ها <strong>منحصراً در لایه خارجی (غیر سیتوزولی)</strong> قرار دارند تا قندهایشان را به محیط بیرون ارائه دهند<span class="hidden"></span>. 
                </p>

                <div class="space-y-4">
                    <div class="bg-slate-700/50 p-5 rounded-2xl border border-slate-600">
                        <h5 class="text-pink-300 font-bold mb-2">گانگلیوزیدها (پیچیده‌ترین گلیکولیپیدها)</h5>
                        <p class="text-sm text-slate-400 leading-relaxed text-justify">
                            این مولکول‌ها حاوی الیگوساکاریدهایی با یک یا چند مولکول <strong>اسید سیالیک</strong> هستند. اسید سیالیک به گانگلیوزید <strong>بار منفی خالص</strong> می‌دهد<span class="hidden"></span>. این لیپیدها در غشای سلول‌های عصبی بسیار فراوانند (تا ۱۰٪ توده چربی).
                        </p>
                    </div>
                    
                    <div class="bg-red-900/30 p-5 rounded-2xl border border-red-500/50 flex items-start gap-4">
                        <div class="text-3xl mt-1">🦠</div>
                        <div>
                            <h5 class="text-red-300 font-bold mb-2">گانگلیوزید GM1 و سم وبا (Cholera)</h5>
                            <p class="text-sm text-red-100 leading-relaxed text-justify">
                                سم باکتری وبا برای ورود به سلول انسان، به طور اختصاصی به گیرنده‌ی <strong>گانگلیوزید GM1</strong> که در سطح سلول‌های اپیتلیال روده قرار دارد متصل می‌شود. ورود این سم باعث افزایش شدید cAMP داخل سلولی شده که نتیجه آن خروج شدید سدیم و آب به روده و <strong>اسهال کشنده</strong> است<span class="hidden"></span>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    `,
    quiz: [
        {
            question: "پلاسمالوژن‌ها (Plasmalogens) به عنوان زیرگروهی از گلیسروفسفولیپیدها، دارای کدام ویژگی ساختاری منحصر‌به‌فرد هستند؟",
            options: [
                "به جای گلیسرول دارای اسفنگوزین هستند.",
                "دارای یک پیوند وینیل اتر (Vinyl ether bond) در اتصال یکی از اسیدهای چرب خود می‌باشند.",
                "کاملاً فاقد دم‌های آب‌گریز هستند.",
                "در سر قطبی خود همیشه دارای یک مولکول گلوکز می‌باشند."
            ],
            answer: 1,
            explanation: "پلاسمالوژن‌ها زیرگروهی از گلیسروفسفولیپیدها هستند که در آن یکی از اسیدهای چرب با یک آلدئید چرب جایگزین شده و در نتیجه به جای پیوند استری معمولی، پیوند وینیل اتری دارند<span class=\"hidden\"></span>."
        },
        {
            question: "آنزیم‌های لازم برای ایجاد «پیوند اتری» جهت سنتز پلاسمالوژن‌ها در کدام اندامک سلولی قرار دارند؟",
            options: [
                "هسته",
                "میتوکندری",
                "پراکسی‌زوم",
                "لیزوزوم"
            ],
            answer: 2,
            explanation: "پلاسمالوژن‌ها در یک اندامک درون‌سلولی به نام پراکسی‌زوم سنتز می‌شوند که حاوی آنزیم‌هایی برای ایجاد پیوند اتری است<span class=\"hidden\"></span>."
        },
        {
            question: "بیماری ژنتیکی کشنده RCDP (ریزوملیک کندرودیسپلازی پونکتاتا) ناشی از نقص در چه فرآیندی است؟",
            options: [
                "نقص در بیوسنتز الاستین",
                "جهش در ژن‌های ضروری برای بیوسنتز پلاسمالوژن‌ها",
                "فقدان کامل کلسترول در غشای پلاسمایی",
                "تجزیه بی‌رویه کلاژن نوع IV در غشای پایه"
            ],
            answer: 1,
            explanation: "جهش در ژن‌های ضروری برای بیوسنتز پلاسمالوژن منجر به کاهش شدید سطح این لیپید شده و باعث بیماری ژنتیکی RCDP می‌گردد که با تاخیر رشد، کوتاه شدن اندام و آب‌مروارید همراه است<span class=\"hidden\"></span>."
        },
        {
            question: "دلیل تراکم و سفتی بیشترِ غشاهای حاوی «پلاسمالوژن» چیست؟",
            options: [
                "رسوب کلسیم در لابه‌لای این لیپیدها.",
                "پیوند وینیل اتر باعث می‌شود زنجیره‌های جانبی اسیدهای چرب نزدیک‌تر به هم قرار گرفته و ساختار محکم‌تری ایجاد کنند.",
                "داشتن ۴ حلقه استروئیدی مشابه کلسترول.",
                "پیوند متقاطع (Cross-link) با پروتئین‌های کلاژن در خارج سلول."
            ],
            answer: 1,
            explanation: "غشاهای سلولی حاوی پلاسمالوژن متراکم‌تر، مرتب‌تر و سفت‌تر از سایر غشاها هستند، به این دلیل که زنجیره‌های جانبی به دلیل داشتن پیوند وینیل اتر نزدیک‌تر به هم قرار می‌گیرند<span class=\"hidden\"></span>."
        },
        {
            question: "توزیع «گلیکولیپیدها» در دو لایه غشای پلاسمایی چگونه است؟",
            options: [
                "به طور مساوی در هر دو لایه پخش شده‌اند.",
                "بیشترین عدم تقارن را دارند و منحصراً در تک‌لایه خارجی (غیر سیتوزولی) یافت می‌شوند.",
                "منحصراً در تک‌لایه داخلی (سیتوزولی) قرار دارند تا با اسکلت سلولی تعامل کنند.",
                "فقط در غشای داخلی میتوکندری حضور دارند."
            ],
            answer: 1,
            explanation: "گلیکولیپیدها نامتقارن‌ترین لیپیدهای غشا هستند. این مولکول‌ها منحصراً در تک‌لایه غیرسیتوزولی (خارجی) غشا یافت می‌شوند و قندهای خود را به فضای خارج سلول ارائه می‌دهند<span class=\"hidden\"></span>."
        },
        {
            question: "پیچیده‌ترین گلیکولیپیدهای غشا که «گانگلیوزید» نامیده می‌شوند، دارای کدام ویژگی شیمیایی بارز هستند؟",
            options: [
                "حاوی یک یا چند مولکول «اسید سیالیک» هستند که به آن‌ها بار منفی خالص می‌دهد.",
                "دارای بار مثبت بسیار قوی به دلیل حضور اسفنگوزین هستند.",
                "فاقد هرگونه قند می‌باشند.",
                "مانند هیالورونان مستقیماً توسط آنزیم‌های غشایی پمپ می‌شوند."
            ],
            answer: 0,
            explanation: "گانگلیوزیدها پیچیده‌ترین گلیکولیپیدها هستند که حاوی الیگوساکاریدهایی با یک یا چند مولکول اسید سیالیک (Sialic acid) می‌باشند. این اسید سیالیک به گانگلیوزید بار منفی خالص می‌دهد<span class=\"hidden\"></span>."
        },
        {
            question: "سم باکتری وبا (Cholera) برای ورود به سلول‌های اپیتلیال روده و ایجاد بیماری، دقیقاً به کدام گیرنده روی سطح سلول انسان متصل می‌شود؟",
            options: [
                "گیرنده فاکتور رشد فیبروبلاست (FGF Receptor)",
                "کانال‌های یونی سدیم-پتاسیم",
                "گانگلیوزید GM1",
                "اینتگرین‌ها"
            ],
            answer: 2,
            explanation: "سم باکتری وبا به عنوان یک گیرنده اختصاصی سطح سلول، به گانگلیوزید GM1 که روی سلول‌های اپیتلیال روده قرار دارد متصل شده و از این طریق وارد سلول می‌شود<span class=\"hidden\"></span>."
        },
        {
            question: "پیامد داخل سلولیِ اتصال سم وبا به گیرنده GM1 و ورود آن به سلول روده چیست؟",
            options: [
                "تخریب کامل هسته سلول.",
                "افزایش طولانی‌مدت غلظت cAMP داخل سلولی که باعث هجوم سدیم و آب به روده و اسهال می‌شود.",
                "توقف پمپ‌های کلسیمی و انقباض عضلات روده.",
                "تبدیل گلیکولیپیدها به لیپوپروتئین (LDL)."
            ],
            answer: 1,
            explanation: "ورود سم وبا به سلول منجر به افزایش طولانی‌مدت غلظت AMP حلقوی (cAMP) داخل سلولی می‌شود. این امر باعث هجوم شدید یون سدیم و آب به داخل فضای روده شده و در نتیجه اسهال شدید و خطرناک ایجاد می‌کند<span class=\"hidden\"></span>."
        },
        {
            question: "اصطلاح «گلیکوکالیکس» (Glycocalyx) یا پوشش سلولی به چه چیزی اشاره دارد؟",
            options: [
                "لایه ضخیم پپتیدوگلیکان در باکتری‌های گرم مثبت.",
                "ناحیه‌ای غنی از کربوهیدرات در سطح خارجی سلول‌های یوکاریوتی که از گلیکولیپیدها، گلیکوپروتئین‌ها و پروتئوگلیکان‌ها تشکیل شده است.",
                "غلاف میلین پیچیده شده دور آکسون‌ها.",
                "فضای آب‌گریز بین دو لایه فسفولیپیدی غشا."
            ],
            answer: 1,
            explanation: "پروتئین‌ها و لیپیدهای غشایی در سطح خارج با کربوهیدرات‌ها پوشیده شده‌اند. اصطلاح پوشش سلولی یا گلیکوکالیکس به این ناحیه غنی از کربوهیدرات (شامل گلیکوپروتئین، گلیکولیپید و پروتئوگلیکان جذب شده) روی سطح سلول گفته می‌شود<span class=\"hidden\"></span>."
        },
        {
            question: "فراوان‌ترین محل حضور «گانگلیوزیدها» (که ۵ تا ۱۰ درصد کل توده چربی غشا را تشکیل می‌دهند) در کدام بافت بدن است؟",
            options: [
                "بافت استخوانی",
                "کبد",
                "غشای پلاسمایی سلول‌های عصبی (سیستم عصبی)",
                "بافت چربی (آدیپوسیت‌ها)"
            ],
            answer: 2,
            explanation: "گانگلیوزیدها بیشتر در غشای پلاسمایی سلول‌های عصبی (نورون‌ها) متمرکز هستند، به طوری که در این مناطق ۵ تا ۱۰ درصد از کل توده چربی را تشکیل می‌دهند<span class=\"hidden\"></span>."
        }
    ]
},
{
id: "module_13",
    title: "ماژول سیزدهم: معماری شاهکار گلبول قرمز",
    subtitle: "اسپکترین، باند ۳ و ترفندهای مطالعه غشای پلاسمایی",
    shortTitle: "۱۳. غشای گلبول قرمز",
    content: `
        <div class="space-y-12">
            
            <!-- بنر بلاگری -->
            <div class="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-red-700 to-rose-950 p-10 text-white shadow-2xl">
                <div class="absolute -right-10 -bottom-10 opacity-20 text-[12rem] leading-none">🩸</div>
                <div class="relative z-10">
                    <span class="inline-block py-1 px-3 rounded-full bg-red-500/30 border border-red-400/50 text-red-100 text-sm font-bold mb-4 backdrop-blur-sm">مدل ایده‌آل تحقیقاتی</span>
                    <h3 class="text-3xl font-black mb-4 leading-tight">چرا گلبول قرمز موش آزمایشگاهی دانشمندان است؟</h3>
                    <p class="text-lg text-rose-50 leading-relaxed text-justify opacity-95 max-w-3xl">
                        برای کشف رازهای غشای سلول، دانشمندان به یک سلول ساده و خالص نیاز داشتند. گلبول قرمز (RBC) ایده‌آل است! چرا؟ چون هیچ هسته و اندامک داخلی ندارد. غشای آن را به راحتی می‌توان جدا کرد و با استفاده از محلول هیپوتونیک، آن را ترکاند تا به یک پوسته توخالی به نام <strong>«شبح گلبول قرمز» (Ghost)</strong> تبدیل شود. بیایید اسکلت این شبح را بررسی کنیم<span class="hidden"></span>!
                    </p>
                </div>
            </div>

            <!-- اسکلت سلولی و اسپکترین -->
            <div class="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
                <div class="absolute top-0 right-0 w-2 h-full bg-red-500"></div>
                <h4 class="text-xl font-black text-slate-800 mb-6 flex items-center gap-3">
                    <span class="text-2xl">🕸️</span> اسپکترین: توری منعطف گلبول قرمز
                </h4>
                <p class="text-slate-600 leading-loose mb-6 text-justify">
                    فراوان‌ترین پروتئین مرتبط با غشای گلبول قرمز، پروتئینی رشته‌ای به نام <strong>اسپکترین (Spectrin)</strong> است (۲۵٪ کل توده پروتئینی)<span class="hidden"></span>. این پروتئین در سطح داخلی (سیتوزولی) غشا یک شبکه توری و منعطف می‌سازد.
                </p>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="bg-rose-50 p-6 rounded-2xl border border-rose-100">
                        <h5 class="font-bold text-rose-800 mb-2">حفظ شکل دیسکی</h5>
                        <p class="text-sm text-rose-700 leading-relaxed">اسپکترین باعث می‌شود گلبول قرمز شکل مقعرالطرفین خود را حفظ کند و آنقدر منعطف باشد که در مویرگ‌های بسیار باریک خم شود و عبور کند<span class="hidden"></span>.</p>
                    </div>
                    <div class="bg-rose-50 p-6 rounded-2xl border border-rose-100">
                        <h5 class="font-bold text-rose-800 mb-2">بیماری کم‌خونی</h5>
                        <p class="text-sm text-rose-700 leading-relaxed">جهش در ژن اسپکترین باعث می‌شود گلبول‌های قرمز شکل کروی پیدا کنند و به شدت شکننده شوند. نتیجه این امر <strong>کم‌خونی همولیتیک</strong> است<span class="hidden"></span>.</p>
                    </div>
                </div>
            </div>

            <!-- پروتئین‌های غشایی کلیدی -->
            <div class="bg-slate-800 text-slate-200 p-8 rounded-3xl shadow-lg relative overflow-hidden mt-8">
                <h4 class="text-xl font-black text-emerald-400 mb-4 flex items-center gap-3">
                    <span class="text-3xl">⚓</span> لنگرگاه‌ها: باند ۳ و گلیکوفورین
                </h4>
                <p class="text-slate-300 leading-loose text-justify mb-6">
                    شبکه اسپکترین برای اینکه به غشا بچسبد، به نقاط اتصالی (لنگر) نیاز دارد. این کار توسط پروتئین‌های واسط و پروتئین‌های گذرنده از غشا (Transmembrane) انجام می‌شود:
                </p>

                <div class="space-y-4">
                    <div class="bg-slate-700/50 p-4 rounded-xl border border-slate-600">
                        <strong class="text-emerald-300 text-lg block mb-2">۱. پروتئین باند ۳ (Band 3) و آنکیرین</strong>
                        <p class="text-sm text-slate-400 leading-relaxed text-justify">
                            پروتئین <strong>باند ۳</strong> یک پروتئین چندبارگذر (Multipass) غشایی است که ۱۲ بار از غشا عبور می‌کند. وظیفه اصلی آن مبادله آنیون‌هاست (خروج بی‌کربنات و ورود کلر) تا CO2 در خون حمل شود. پروتئین واسطی به نام <strong>آنکیرین (Ankyrin)</strong>، شبکه اسپکترین را به باند ۳ قلاب می‌کند<span class="hidden"></span>.
                        </p>
                    </div>
                    
                    <div class="bg-slate-700/50 p-4 rounded-xl border border-slate-600">
                        <strong class="text-emerald-300 text-lg block mb-2">۲. گلیکوفورین A و باند 4.1</strong>
                        <p class="text-sm text-slate-400 leading-relaxed text-justify">
                            <strong>گلیکوفورین</strong> یک پروتئین تک‌بارگذر (Single-pass) است که سطح بیرونی آن به شدت با قندها (اسید سیالیک) پوشیده شده و بار منفی زیادی به گلبول قرمز می‌دهد تا سلول‌ها به هم نچسبند. پروتئین واسط <strong>باند 4.1</strong>، شبکه اسپکترین را به اکتین و گلیکوفورین متصل می‌کند<span class="hidden"></span>.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    `,
    quiz: [
        {
            question: "چرا گلبول‌های قرمز انسان (RBC) به عنوان مدل ایده‌آل برای مطالعه غشای پلاسمایی استفاده می‌شوند؟",
            options: [
                "زیرا بزرگترین سلول‌های بدن انسان هستند.",
                "چون هیچ هسته و اندامک داخلی ندارند و غشای پلاسمایی آن‌ها را می‌توان بدون آلودگی به غشاهای داخلی جدا کرد.",
                "زیرا دارای ضخیم‌ترین دیواره سلولی در بین سلول‌های حیوانی هستند.",
                "چون به طور مداوم در حال تقسیم و تکثیر هستند."
            ],
            answer: 1,
            explanation: "گلبول‌های قرمز بالغ فاقد هسته و اندامک‌های غشادار داخلی (مثل میتوکندری و گلژی) هستند. بنابراین، تنها غشای آن‌ها غشای پلاسمایی است که استخراج آن به صورت کاملاً خالص بسیار آسان است<span class=\"hidden\"></span>."
        },
        {
            question: "تهیه «شبح گلبول قرمز» (RBC Ghost) در آزمایشگاه چگونه انجام می‌شود؟",
            options: [
                "قرار دادن گلبول‌ها در محیط هیپوتونیک (رقیق‌تر از داخل سلول) که باعث تورم، ترکیدن و خروج هموگلوبین می‌شود.",
                "قرار دادن سلول‌ها در محیط هایپرتونیک (غلیظ) که باعث چروکیده شدن آن‌ها می‌شود.",
                "حل کردن کامل غشا توسط شوینده‌های قوی مثل SDS.",
                "استفاده از آنزیم‌های پروتئولیتیک برای از بین بردن تمام پروتئین‌ها."
            ],
            answer: 0,
            explanation: "اگر گلبول‌های قرمز در محیط هیپوتونیک قرار گیرند، آب به دلیل اسمز وارد سلول شده و سلول می‌ترکد. محتویات سیتوزولی (مثل هموگلوبین) خارج شده و تنها پوسته توخالی غشا باقی می‌ماند که به آن شبح (Ghost) می‌گویند<span class=\"hidden\"></span>."
        },
        {
            question: "فراوان‌ترین پروتئین مرتبط با غشای گلبول قرمز که ساختاری میله‌ای و انعطاف‌پذیر دارد و زیربنای غشا را می‌سازد، چه نام دارد؟",
            options: [
                "کلاژن",
                "گلیکوفورین",
                "اسپکترین (Spectrin)",
                "پلاسمین"
            ],
            answer: 2,
            explanation: "اسپکترین فراوان‌ترین پروتئین (حدود ۲۵٪ از توده پروتئینی غشا) است. این پروتئین هترودایمر، یک شبکه توری و منعطف در زیر سطح سیتوزولی غشا ایجاد می‌کند که یکپارچگی و شکل سلول را حفظ می‌کند<span class=\"hidden\"></span>."
        },
        {
            question: "کدام یک از پروتئین‌های زیر به عنوان یک «لنگر» عمل کرده و شبکه اسپکترین را به پروتئین غشایی «باند ۳» متصل می‌کند؟",
            options: [
                "اکتین",
                "آنکیرین (Ankyrin)",
                "پروتئین باند ۴.۱",
                "اینتگرین"
            ],
            answer: 1,
            explanation: "اسپکترین برای اتصال محکم به غشا، از یک پروتئین چسبنده درون‌سلولی بزرگ به نام آنکیرین استفاده می‌کند. آنکیرین از یک طرف به اسپکترین و از طرف دیگر به بخش سیتوزولی پروتئین غشایی باند ۳ متصل است<span class=\"hidden\"></span>."
        },
        {
            question: "جهش در ژن کدکننده پروتئین «اسپکترین» چه پیامد بالینی به دنبال دارد؟",
            options: [
                "باعث تجمع شدید آهن در کبد می‌شود.",
                "گلبول‌های قرمز شکل کروی پیدا کرده و شکننده می‌شوند (کم‌خونی همولیتیک).",
                "باعث پارگی آئورت به دلیل افزایش فشار خون می‌شود.",
                "توانایی گلبول‌های سفید را برای فاگوسیتوز از بین می‌برد."
            ],
            answer: 1,
            explanation: "اگر اسپکترین دچار نقص شود، گلبول قرمز شکل مقعرالطرفین و انعطاف‌پذیری خود را از دست داده، کروی و به شدت شکننده می‌شود. این حالت منجر به تخریب سریع آن‌ها و بروز کم‌خونی می‌شود<span class=\"hidden\"></span>."
        },
        {
            question: "پروتئین «گلیکوفورین» (Glycophorin) در غشای گلبول قرمز دارای کدام ویژگی ساختاری است؟",
            options: [
                "یک پروتئین دوازده‌بارگذر (12-pass) است که منافذ آبی تشکیل می‌دهد.",
                "یک پروتئین محیطی (Peripheral) است که کاملاً در سیتوزول قرار دارد.",
                "یک پروتئین تک‌بارگذر (Single-pass) است که سطح خارجی آن به شدت گلیکوزیله شده است.",
                "آنزیمی است که وظیفه پمپاژ یون کلسیم را بر عهده دارد."
            ],
            answer: 2,
            explanation: "گلیکوفورین یک پروتئین تک‌بارگذر (یک مارپیچ آلفا) است که بخش اعظم آن در سطح خارجی سلول قرار دارد. این بخش به شدت با قندها (الیگوساکاریدها) پوشیده شده و ۶۰ درصد وزن مولکول را کربوهیدرات تشکیل می‌دهد<span class=\"hidden\"></span>."
        },
        {
            question: "حضور مقادیر زیاد کدام مولکول قندی در گلیکوفورین باعث ایجاد «بار منفی» قابل توجه در سطح گلبول قرمز می‌شود؟",
            options: [
                "گالاکتوز",
                "اسید سیالیک (Sialic acid)",
                "گلوکزامین",
                "هیالورونان"
            ],
            answer: 1,
            explanation: "اکثریت کربوهیدرات‌های سطح گلبول‌های قرمز خون دارای اسید سیالیک هستند. این قند به گلیکوفورین و در نتیجه به کل سطح سلول، بار منفی خالصی می‌دهد که مانع چسبیدن گلبول‌ها به یکدیگر در رگ‌ها می‌شود<span class=\"hidden\"></span>."
        },
        {
            question: "وظیفه اصلی پروتئین غشایی «باند ۳» (Band 3) در گلبول قرمز چیست؟",
            options: [
                "مبادله آنیون‌ها (ورود یون کلر و خروج یون بی‌کربنات) برای کمک به حمل CO2 در خون.",
                "پمپاژ فعال سدیم به خارج و پتاسیم به داخل سلول.",
                "اتصال گلبول قرمز به لامینای پایه در مویرگ‌ها.",
                "شناسایی سموم باکتریایی و فاگوسیتوز آن‌ها."
            ],
            answer: 0,
            explanation: "پروتئین باند ۳ یک ناقل آنیونی چندبارگذر (۱۲ بار عبور از غشا) است که با خروج HCO3- (بی‌کربنات) در ازای ورود یون Cl-، نقش حیاتی در انتقال CO2 از بافت‌ها به ریه‌ها ایفا می‌کند<span class=\"hidden\"></span>."
        },
        {
            question: "کدام پروتئین وظیفه دارد شبکه اسپکترین را به رشته‌های اکتین و همچنین به پروتئین گلیکوفورین متصل کند؟",
            options: [
                "باند ۳",
                "آنکیرین",
                "پروتئین باند ۴.۱",
                "میوزین"
            ],
            answer: 2,
            explanation: "اسکلت سلولی علاوه بر آنکیرین، توسط مکانیسم دومی به غشا متصل می‌شود: پروتئین باند ۴.۱ که به اسپکترین، اکتین کوتاه و همچنین به حوزه سیتوزولی گلیکوفورین و باند ۳ متصل می‌شود<span class=\"hidden\"></span>."
        },
        {
            question: "از نظر ساختاری، پروتئین گلیکوفورین معمولاً به چه شکلی در غشای گلبول قرمز وجود دارد؟",
            options: [
                "مونومر مجزا",
                "همودایمر (دو زنجیره یکسان متصل به هم از طریق مارپیچ‌های غشایی)",
                "تترامر (چهار زیرواحدی)",
                "بشکه بتا ۱۶ رشته‌ای"
            ],
            answer: 1,
            explanation: "گلیکوفورین به طور معمول به صورت یک همودایمر (Homodimer) وجود دارد که دو زنجیره کاملاً یکسان آن عمدتاً از طریق فعل و انفعالات غیرکووالانسی بین مارپیچ‌های آلفای غشایی‌شان به هم متصل می‌شوند<span class=\"hidden\"></span>."
        }
    ]
},
{
id: "module_14",
    title: "ماژول چهاردهم: نگهبانان و دروازه‌های پروتئینی",
    subtitle: "پروتئین‌های انتگرال، محیطی، لنگرهای GPI و بشکه‌های بتا",
    shortTitle: "۱۴. انواع پروتئین غشایی",
    content: `
        <div class="space-y-12">
            
            <!-- بنر بلاگری -->
            <div class="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-blue-700 to-indigo-950 p-10 text-white shadow-2xl">
                <div class="absolute -right-10 -bottom-10 opacity-20 text-[12rem] leading-none">🚪</div>
                <div class="relative z-10">
                    <span class="inline-block py-1 px-3 rounded-full bg-blue-500/30 border border-blue-400/50 text-blue-100 text-sm font-bold mb-4 backdrop-blur-sm">ماشین‌های سلولی</span>
                    <h3 class="text-3xl font-black mb-4 leading-tight">پروتئین‌ها؛ موتورها و دروازه‌های غشا!</h3>
                    <p class="text-lg text-indigo-50 leading-relaxed text-justify opacity-95 max-w-3xl">
                        اگر لیپیدها دیوارهای غشا هستند، پروتئین‌ها در و پنجره، گیرنده، پمپ و موتورهای آن به شمار می‌روند! تا ۳۰ درصد از ژنوم ما فقط برای ساخت این ماشین‌های غشایی اختصاص یافته است. اما این پروتئین‌ها چگونه در یک دریای چرب و لیز شناور می‌مانند و غرق نمی‌شوند؟ راز این کار در «اسیدهای آمینه آب‌گریز» و «لنگرهای لیپیدی» نهفته است<span class="hidden"></span>.
                    </p>
                </div>
            </div>

            <!-- نحوه اتصال پروتئین‌ها به غشا -->
            <div class="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
                <div class="absolute top-0 right-0 w-2 h-full bg-blue-500"></div>
                <h4 class="text-xl font-black text-slate-800 mb-6 flex items-center gap-3">
                    <span class="text-2xl">🧩</span> پروتئین‌ها چگونه به غشا متصل می‌شوند؟
                </h4>
                
                <div class="space-y-6">
                    <!-- گذرنده از غشا -->
                    <div class="bg-blue-50 p-5 rounded-2xl border border-blue-100">
                        <strong class="text-blue-800 text-lg block mb-2">۱. گذرنده از غشا (Transmembrane)</strong>
                        <p class="text-sm text-blue-700 leading-relaxed text-justify mb-3">
                            این پروتئین‌ها کاملاً از عرض غشا عبور می‌کنند و باید یک بخش آب‌گریز (برای ماندن در چربی) و بخش‌های آب‌دوست (در دو طرف غشا) داشته باشند. آن‌ها دو شکل اصلی دارند<span class="hidden"></span>:
                        </p>
                        <ul class="list-disc list-inside text-sm text-blue-800 space-y-2 ml-4 font-bold">
                            <li><strong>مارپیچ آلفا (Alpha Helix):</strong> رایج‌ترین شکل. می‌تواند تک‌بارگذر (مثل گلیکوفورین) یا چندبارگذر (مثل باند ۳ و باکتریورودوپسین) باشد.</li>
                            <li><strong>بشکه بتا (Beta-barrel):</strong> زنجیره‌های بتا به شکل یک بشکه لوله‌ای در می‌آیند (مثل پروتئین‌های پورین در باکتری و میتوکندری) تا منافذ بزرگ پر از آب بسازند<span class="hidden"></span>.</li>
                        </ul>
                    </div>

                    <!-- متصل به لیپید (لنگردار) -->
                    <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
                        <strong class="text-emerald-800 text-lg block mb-2">۲. پروتئین‌های لنگردار (Lipid-anchored)</strong>
                        <p class="text-sm text-emerald-700 leading-relaxed text-justify mb-2">
                            این پروتئین‌ها اصلاً وارد بخش چرب غشا نمی‌شوند! بلکه بیرون غشا هستند و با یک «طناب کووالانسی» به لیپیدها وصلند:
                        </p>
                        <ul class="list-disc list-inside text-sm text-emerald-800 space-y-1 ml-4">
                            <li><strong>لنگر GPI:</strong> پروتئین را منحصراً به سطح <em>خارجی</em> غشا وصل می‌کند (توسط آنزیم فسفولیپاز C بریده می‌شود)<span class="hidden"></span>.</li>
                            <li><strong>گروه پرنیل یا اسید چرب:</strong> پروتئین را به سطح <em>داخلی (سیتوزولی)</em> متصل می‌کند<span class="hidden"></span>.</li>
                        </ul>
                    </div>

                    <!-- محیطی -->
                    <div class="bg-rose-50 p-5 rounded-2xl border border-rose-100">
                        <strong class="text-rose-800 text-lg block mb-2">۳. پروتئین‌های محیطی (Peripheral)</strong>
                        <p class="text-sm text-rose-700 leading-relaxed text-justify">
                            این پروتئین‌ها اصلاً به لیپیدها وصل نیستند! آن‌ها با پیوندهای ضعیف (غیرکووالانسی) به سایر پروتئین‌های غشایی چسبیده‌اند و خیلی راحت با تغییر نمک یا pH جدا می‌شوند<span class="hidden"></span>.
                        </p>
                    </div>
                </div>
            </div>

            <!-- استخراج پروتئین‌ها (دیپ دایو) -->
            <div class="bg-slate-800 text-slate-200 p-8 rounded-3xl shadow-lg relative overflow-hidden mt-8">
                <h4 class="text-xl font-black text-cyan-400 mb-4 flex items-center gap-3">
                    <span class="text-3xl">🧪</span> چگونه پروتئین‌ها را از غشا جدا کنیم؟
                </h4>
                <p class="text-slate-300 leading-loose text-justify mb-6">
                    برای مطالعه پروتئین‌ها باید آن‌ها را از غشا بکنیم. بسته به نوع اتصال، روش استخراج متفاوت است:
                </p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="bg-slate-700/50 p-5 rounded-2xl border border-slate-600">
                        <h5 class="text-cyan-300 font-bold mb-2">پروتئین‌های انتگرال (یکپارچه)</h5>
                        <p class="text-sm text-slate-400 leading-relaxed text-justify">
                            شامل پروتئین‌های گذرنده از غشا و لنگردارها. چون در چربی فرو رفته‌اند، برای جدا کردنشان باید غشا را نابود کنیم! این کار فقط با <strong>شوینده‌ها (Detergents)</strong> مثل <strong>SDS</strong> (قوی) یا <strong>تریتون X-100</strong> (ملایم) امکان‌پذیر است<span class="hidden"></span>.
                        </p>
                    </div>
                    <div class="bg-slate-700/50 p-5 rounded-2xl border border-slate-600">
                        <h5 class="text-cyan-300 font-bold mb-2">پروتئین‌های محیطی</h5>
                        <p class="text-sm text-slate-400 leading-relaxed text-justify">
                            چون با پیوندهای ضعیف یونی وصلند، نیازی به تخریب غشا نیست. با روش‌های ملایم مثل <strong>تغییر pH یا استفاده از محلول‌های نمکی قوی</strong> به راحتی جدا می‌شوند و غشا سالم می‌ماند<span class="hidden"></span>.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    `,
    quiz: [
        {
            question: "کدام گروه از پروتئین‌های غشایی به طور کامل در سیتوزول یا فضای خارج سلول قرار دارند و تنها از طریق اتصال کووالانسی به یک لیپیدِ غشا متصل شده‌اند؟",
            options: [
                "پروتئین‌های عبورکننده از غشا (Transmembrane)",
                "پروتئین‌های لنگردار لیپیدی (Lipid-anchored)",
                "پروتئین‌های محیطی (Peripheral)",
                "پورین‌ها (Porins)"
            ],
            answer: 1,
            explanation: "پروتئین‌های متصل به لیپید (لنگردار)، کاملاً در محیط آبی بیرون یا درون سلول قرار دارند و اصلاً وارد بخش آب‌گریز غشا نمی‌شوند، بلکه با یک پیوند کووالانسی به یک گروه لیپیدی (مثل اسید چرب، گروه پرنیل یا لنگر GPI) متصلند<span class=\"hidden\"></span>."
        },
        {
            question: "پروتئین‌هایی که با لنگر «گلیکوزیل فسفاتیدیل اینوزیتول (GPI)» به غشا متصل می‌شوند، معمولاً در کدام سمت غشای پلاسمایی قرار می‌گیرند؟",
            options: [
                "فقط در سمت داخل (سیتوزولی)",
                "فقط در سمت خارج سلولی (Non-cytosolic)",
                "درون بخش آب‌گریز (میان دو لایه لیپیدی)",
                "به طور مساوی در هر دو سمت"
            ],
            answer: 1,
            explanation: "لنگرهای GPI در شبکه آندوپلاسمی به پروتئین‌ها اضافه می‌شوند و این پروتئین‌ها پس از انتقال به غشای پلاسمایی، منحصراً به بخش خارجی غشا (رو به محیط خارج سلولی) متصل می‌شوند<span class=\"hidden\"></span>."
        },
        {
            question: "کدام آنزیم به طور اختصاصی قادر است پروتئین‌های متصل به لنگر GPI را از غشای پلاسمایی جدا و آزاد کند؟",
            options: [
                "اسکرامبلاز",
                "پلاسمین",
                "فسفولیپاز C",
                "کلاژناز"
            ],
            answer: 2,
            explanation: "آنزیم فسفولیپاز C پیوند بین اینوزیتول و پروتئین را در لنگر GPI می‌شکند و در نتیجه پروتئین را به طور اختصاصی از سطح خارجی غشا آزاد می‌کند<span class=\"hidden\"></span>."
        },
        {
            question: "پروتئین‌های محیطی (Peripheral proteins) از طریق چه نوع برهم‌کنشی با غشای سلولی مرتبط می‌شوند؟",
            options: [
                "پیوندهای کووالانسی قوی با فسفولیپیدها.",
                "فرو رفتن کامل در بخش هیدروفوبیک غشا.",
                "تعاملات غیرکووالانسی (مثل پیوندهای یونی و واندروالس) با سطوح آب‌دوستِ سایر پروتئین‌های غشایی.",
                "اتصال دی‌سولفیدی با کلسترول."
            ],
            answer: 2,
            explanation: "پروتئین‌های محیطی اصلاً به داخل بخش هیدروفوبیک غشا نفوذ نمی‌کنند و پیوند کووالانسی هم ندارند. آن‌ها به صورت غیرکووالانسی و با پیوندهای ضعیف به سایر پروتئین‌های غشایی متصل می‌شوند<span class=\"hidden\"></span>."
        },
        {
            question: "برای جدا کردن «پروتئین‌های انتگرال (یکپارچه)» از غشا بدون آسیب رساندن به ساختار خود پروتئین، معمولاً از چه موادی استفاده می‌شود؟",
            options: [
                "محلول‌های نمکی با غلظت بسیار بالا",
                "تغییرات شدید pH",
                "شوینده‌ها (Detergents) مانند SDS یا تریتون X-100",
                "آنزیم‌های سرین پروتئاز"
            ],
            answer: 2,
            explanation: "پروتئین‌های انتگرال (گذرنده از غشا و لنگردار) محکم در غشا فرو رفته‌اند و فقط با عواملی که غشای دولایه لیپیدی را از بین می‌برند (مثل شوینده‌های آمفی‌پاتیک SDS یا Triton X-100) قابل استخراج هستند<span class=\"hidden\"></span>."
        },
        {
            question: "اکثریت قریب به اتفاق پروتئین‌های چندبارگذر (Multipass) در سلول‌های یوکاریوتی از چه ساختاری برای عبور از عرض غشا استفاده می‌کنند؟",
            options: [
                "بشکه بتا (Beta-barrel)",
                "مارپیچ آلفا (Alpha Helix)",
                "صفحات بتای مسطح",
                "پیچ‌خوردگی تصادفی (Random coil)"
            ],
            answer: 1,
            explanation: "در اکثریت قریب به اتفاق پروتئین‌های گذرنده از غشا در یوکاریوت‌ها (مثل گیرنده‌ها و پمپ‌ها)، زنجیره پلی‌پپتیدی به صورت یک مارپیچ آلفا از بخش هیدروفوب غشا عبور می‌کند (چون در این حالت پیوندهای هیدروژنی پپتیدی به حداکثر می‌رسد)<span class=\"hidden\"></span>."
        },
        {
            question: "پروتئین‌های «پورین» (Porins) که در غشای خارجی باکتری‌ها و میتوکندری‌ها کانال‌های پر از آب تشکیل می‌دهند، دارای کدام ساختار سه‌بعدی هستند؟",
            options: [
                "مارپیچ آلفای تک‌بارگذر",
                "بشکه بتا (Beta-barrel)",
                "لنگر GPI",
                "دایمرهای گلیکوزیله شده"
            ],
            answer: 1,
            explanation: "در پورین‌ها، زنجیره پلی‌پپتیدی به جای مارپیچ آلفا، از چندین رشته بتا (Beta strand) تشکیل شده که به صورت یک استوانه یا بشکه بتا (Beta-barrel) بسته می‌شوند تا منافذ بزرگ و پر از آبی ایجاد کنند<span class=\"hidden\"></span>."
        },
        {
            question: "دلیل اینکه پروتئین‌های «بشکه بتا» سفت و سخت بوده و نسبت به مارپیچ‌های آلفا تغییرات ساختاریِ (Conformational) کمتری می‌دهند چیست؟",
            options: [
                "چون هر رشته بتا با پیوند هیدروژنی به طور محکم به رشته‌های کناری خود متصل است.",
                "زیرا منحصراً از اسیدآمینه پرولین ساخته شده‌اند.",
                "چون فاقد هرگونه بخش هیدروفوب هستند.",
                "چون توسط یون‌های آهن به شدت رسوب می‌کنند."
            ],
            answer: 0,
            explanation: "در پروتئین‌های بشکه‌ای، هر رشته بتا با پیوند هیدروژنی به طور محکم به رشته‌های کناری خود متصل است که این امر بشکه را بسیار سفت و سخت کرده و تغییر شکل‌های خودبه‌خودی (مثل باز و بسته شدن کانال) را در آن‌ها بعید می‌سازد<span class=\"hidden\"></span>."
        },
        {
            question: "پروتئین «باکتریورودوپسین» که به عنوان پمپ پروتون وابسته به نور در آرکی‌ها عمل می‌کند، نمونه‌ای کلاسیک از کدام نوع پروتئین غشایی است؟",
            options: [
                "پروتئین محیطی (Peripheral)",
                "پروتئین چندبارگذر با ۷ مارپیچ آلفا",
                "بشکه بتای ۱۶ رشته‌ای",
                "پروتئین تک‌بارگذر متصل به GPI"
            ],
            answer: 1,
            explanation: "باکتریورودوپسین یک پروتئین غشایی چندبارگذر (Multipass) است که از ۷ مارپیچ آلفا تشکیل شده است. این ساختار، پروتون‌ها را با استفاده از انرژی نور به بیرون سلول پمپ می‌کند<span class=\"hidden\"></span>."
        },
        {
            question: "پروتئین FepA که در باکتری‌ها وجود دارد، نمونه‌ای پیچیده از بشکه بتا است. وظیفه اصلی این پروتئین چیست؟",
            options: [
                "انتقال یون‌های کلسیم به داخل",
                "وارد کردن یون‌های آهن به باکتری",
                "تجزیه آنتی‌بیوتیک پنی‌سیلین",
                "اتصال باکتری به لامینای پایه"
            ],
            answer: 1,
            explanation: "پروتئین FepA یک بشکه بتا بسیار پیچیده با ۲۲ رشته است که وظیفه اصلی آن انتقال انتخابی یون‌های آهن به داخل باکتری می‌باشد<span class=\"hidden\"></span>."
        }
    ]
},
{
id: "module_15",
    title: "ماژول پانزدهم: گمرک سلولی و انتقال مواد",
    subtitle: "نفوذپذیری غشا، انتشار ساده و رقابت ناقل‌ها با کانال‌ها",
    shortTitle: "۱۵. انتقال غشایی و کانال‌ها",
    content: `
        <div class="space-y-12">
            
            <!-- بنر بلاگری -->
            <div class="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-green-700 to-emerald-950 p-10 text-white shadow-2xl">
                <div class="absolute -left-10 -bottom-10 opacity-20 text-[12rem] leading-none">🚦</div>
                <div class="relative z-10">
                    <span class="inline-block py-1 px-3 rounded-full bg-emerald-500/30 border border-emerald-400/50 text-emerald-100 text-sm font-bold mb-4 backdrop-blur-sm">گمرک هوشمند غشا</span>
                    <h3 class="text-3xl font-black mb-4 leading-tight">چه موادی اجازه ورود به سلول را دارند؟</h3>
                    <p class="text-lg text-emerald-50 leading-relaxed text-justify opacity-95 max-w-3xl">
                        غشای چربی سلول مثل یک گمرک فوق‌العاده سخت‌گیر عمل می‌کند. گازهایی مثل اکسیژن بدون ویزا رد می‌شوند، اما یون‌ها حتی اگر خیلی ریز باشند، به هیچ وجه اجازه عبور مستقیم ندارند! برای عبور مواد قطبی و درشت، سلول باید دروازه‌های پروتئینی (ناقل‌ها و کانال‌ها) را باز کند. بیایید با قوانین این گمرک آشنا شویم<span class="hidden"></span>!
                    </p>
                </div>
            </div>

            <!-- نفوذپذیری غشا -->
            <div class="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
                <div class="absolute top-0 right-0 w-2 h-full bg-green-500"></div>
                <h4 class="text-xl font-black text-slate-800 mb-6 flex items-center gap-3">
                    <span class="text-2xl">🛂</span> قوانین عبور از دولایه لیپیدی (انتشار ساده)
                </h4>
                <p class="text-slate-600 leading-loose mb-6 text-justify">
                    انتشار ساده یعنی عبور مستقیم از لایه‌های چربی بدون کمک هیچ پروتئینی. سرعت این عبور به <strong>اندازه</strong> و <strong>حلالیت در چربی (ضریب توزیع)</strong> بستگی دارد<span class="hidden"></span>.
                </p>
                
                <div class="space-y-3">
                    <div class="flex items-center gap-4 bg-green-50 p-4 rounded-xl border border-green-100">
                        <span class="text-2xl">✅</span>
                        <p class="text-sm text-green-800"><strong>گازها و مولکول‌های هیدروفوب:</strong> اکسیژن (O2)، دی‌اکسید کربن (CO2) و بنزن به سرعت و آزادانه عبور می‌کنند.</p>
                    </div>
                    <div class="flex items-center gap-4 bg-lime-50 p-4 rounded-xl border border-lime-100">
                        <span class="text-2xl">☑️</span>
                        <p class="text-sm text-lime-800"><strong>مولکول‌های قطبی کوچک (بدون بار):</strong> آب (H2O)، اوره و گلیسرول عبور می‌کنند، اما با سرعت کم.</p>
                    </div>
                    <div class="flex items-center gap-4 bg-orange-50 p-4 rounded-xl border border-orange-100">
                        <span class="text-2xl">❌</span>
                        <p class="text-sm text-orange-800"><strong>مولکول‌های قطبی درشت:</strong> گلوکز و ساکارز به سختی عبور می‌کنند و نیازمند پروتئین هستند.</p>
                    </div>
                    <div class="flex items-center gap-4 bg-red-50 p-4 rounded-xl border border-red-100">
                        <span class="text-2xl">⛔</span>
                        <p class="text-sm text-red-800"><strong>یون‌ها (باردارها):</strong> سدیم (Na+)، پتاسیم (K+)، و کلر (Cl-) <strong>مطلقاً نفوذناپذیرند!</strong> بار الکتریکی و هیدراتاسیون آن‌ها مانع ورودشان به چربی می‌شود<span class="hidden"></span>.</p>
                    </div>
                </div>
            </div>

            <!-- نبرد ناقل‌ها و کانال‌ها -->
            <div class="bg-slate-800 text-slate-200 p-8 rounded-3xl shadow-lg relative overflow-hidden mt-8">
                <div class="absolute -right-20 -top-20 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl"></div>
                <h4 class="text-xl font-black text-teal-400 mb-6 flex items-center gap-3">
                    <span class="text-3xl">⚔️</span> انتشار تسهیل‌شده: ناقل (Carrier) در برابر کانال (Channel)
                </h4>
                <p class="text-slate-300 leading-loose text-justify mb-6">
                    برای عبور موادی که خودشان نمی‌توانند از چربی رد شوند، پروتئین‌ها وارد عمل می‌شوند. هر دو گروه <strong>بدون مصرف انرژی</strong> (در جهت شیب غلظت) کار می‌کنند، اما تفاوت‌های عمیقی دارند<span class="hidden"></span>:
                </p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <!-- ناقل‌ها (پرمئازها) -->
                    <div class="bg-slate-700/50 p-6 rounded-2xl border border-slate-600">
                        <h5 class="text-teal-300 font-black text-lg mb-3 flex items-center gap-2">🚕 ناقل‌ها (پرمئازها)</h5>
                        <ul class="space-y-3 text-sm text-slate-300">
                            <li><span class="text-teal-400">✔</span> <strong>مکانیسم:</strong> ماده به ناقل می‌چسبد، ناقل تغییر شکل می‌دهد و آن را آن‌طرف رها می‌کند.</li>
                            <li><span class="text-teal-400">✔</span> <strong>سرعت:</strong> کندتر هستند (چون باید تغییر شکل دهند).</li>
                            <li><span class="text-teal-400">✔</span> <strong>ویژگی‌ها:</strong> به شدت <strong>اختصاصی</strong> هستند. به دلیل تعداد محدود، <strong>اشباع‌پذیرند (Vmax دارند)</strong> و دچار <strong>رقابت</strong> می‌شوند<span class="hidden"></span>.</li>
                        </ul>
                    </div>

                    <!-- کانال‌ها -->
                    <div class="bg-slate-700/50 p-6 rounded-2xl border border-slate-600">
                        <h5 class="text-cyan-300 font-black text-lg mb-3 flex items-center gap-2">🚇 کانال‌ها</h5>
                        <ul class="space-y-3 text-sm text-slate-300">
                            <li><span class="text-cyan-400">✔</span> <strong>مکانیسم:</strong> یک تونل پر از آب باز می‌کنند تا یون‌ها به صورت قطاری عبور کنند.</li>
                            <li><span class="text-cyan-400">✔</span> <strong>سرعت:</strong> فوق‌العاده سریع! (تا ۱ میلیون یون در ثانیه، ۱۰۰۰ برابر سریع‌تر از ناقل‌ها)<span class="hidden"></span>.</li>
                            <li><span class="text-cyan-400">✔</span> <strong>ویژگی‌ها:</strong> اختصاصی بودن کمتری دارند و معمولاً دارای «دروازه» (Gated) هستند که با ولتاژ، لیگاند یا فشار باز و بسته می‌شود<span class="hidden"></span>.</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    `,
    quiz: [
        {
            question: "بر اساس قوانین نفوذپذیری دولایه لیپیدی غشا، کدام گروه از مواد زیر بالاترین سرعت عبور (انتشار ساده) را بدون نیاز به هیچ پروتئینی دارند؟",
            options: [
                "یون‌های کوچک مانند Na+ و K+",
                "مولکول‌های قطبی بزرگ مانند گلوکز و ساکارز",
                "گازهای غیرقطبی و کوچک مانند O2 و CO2",
                "اسیدهای آمینه باردار"
            ],
            answer: 2,
            explanation: "مولکول‌های کوچک غیرقطبی (آب‌گریز) مانند اکسیژن (O2)، دی‌اکسید کربن (CO2) و بنزن به راحتی در چربی حل شده و با بالاترین سرعت از غشا عبور می‌کنند<span class=\"hidden\"></span>."
        },
        {
            question: "چرا غشای لیپیدی سلول در برابر عبور یون‌ها (حتی یون‌های بسیار کوچک) کاملاً نفوذناپذیر است؟",
            options: [
                "زیرا یون‌ها توسط آنزیم‌های غشایی فورا تجزیه می‌شوند.",
                "بار الکتریکی بالا و درجه بالای هیدراتاسیون (پوشش آبی) این یون‌ها، از ورود آن‌ها به فاز هیدروکربنیِ چربِ غشا به شدت جلوگیری می‌کند.",
                "زیرا یون‌ها با کلسترول واکنش داده و رسوب می‌کنند.",
                "چون یون‌ها به لنگرهای GPI متصل شده و گیر می‌افتند."
            ],
            answer: 1,
            explanation: "دو لایه لیپیدی در برابر یون‌ها بسیار نفوذناپذیر است (صرف نظر از کوچکی اندازه یون). بار الکتریکی و پوشش آبی (هیدراتاسیون) شدیدِ این مولکول‌ها، مانعِ ورودِ آن‌ها به محیطِ به شدت آب‌گریزِ (غیرقطبی) درون غشا می‌شود<span class=\"hidden\"></span>."
        },
        {
            question: "تفاوت اصلی در مکانیسم انتقال بین «پروتئین‌های حامل (ناقل‌ها/پرمئازها)» و «کانال‌های پروتئینی» چیست؟",
            options: [
                "ناقل‌ها همیشه انرژی مصرف می‌کنند، اما کانال‌ها هرگز انرژی مصرف نمی‌کنند.",
                "ناقل‌ها به مولکول هدف متصل شده و با تغییر شکل ساختاری آن را عبور می‌دهند، اما کانال‌ها یک منفذ آبی پیوسته برای عبور سریع ایجاد می‌کنند.",
                "ناقل‌ها فقط یون‌ها را عبور می‌دهند و کانال‌ها فقط قندها را.",
                "کانال‌ها اشباع‌پذیرند (Vmax دارند) ولی ناقل‌ها هرگز اشباع نمی‌شوند."
            ],
            answer: 1,
            explanation: "پروتئین‌های حامل (پرمئازها) به مولکول متصل شده و یک سری تغییر شکل فضایی را پشت سر می‌گذارند تا مولکول را عبور دهند. اما کانال‌ها با مولکول تعامل ضعیفی داشته و فقط یک تونل (منفذ) پر از آب ایجاد می‌کنند تا مواد با سرعت رد شوند<span class=\"hidden\"></span>."
        },
        {
            question: "در ارتباط با انتقال از طریق پروتئین‌های ناقل (انتشار تسهیل‌شده)، ویژگی «اشباع‌پذیری» به چه معناست؟",
            options: [
                "ناقل‌ها آب می‌کشند و متورم می‌شوند.",
                "سرعت انتقال با افزایش غلظت ماده بی‌نهایت بالا می‌رود.",
                "تعداد جایگاه‌های اتصال ناقل‌ها محدود است، لذا در غلظت‌های بالا، سرعت انتقال به یک حد اکثر (Vmax) رسیده و ثابت می‌ماند.",
                "ناقل‌ها فقط در محیط‌های اشباع از اکسیژن کار می‌کنند."
            ],
            answer: 2,
            explanation: "چون حامل‌ها (ناقل‌ها) باید به ماده متصل شوند و تعدادشان در غشا محدود است، در غلظت‌های بالای ماده حمل‌شونده تمامی جایگاه‌های آن‌ها پر می‌شود و سرعت انتقال دیگر افزایش نمی‌یابد (به حداکثر می‌رسد که پدیده اشباع نام دارد)<span class=\"hidden\"></span>."
        },
        {
            question: "پدیده «انتخاب‌گری فضایی» (Stereospecificity) در حامل‌ها به چه معناست؟",
            options: [
                "حامل‌ها فقط مواد دارای بار مثبت را عبور می‌دهند.",
                "حامل‌ها می‌توانند بین ایزومرهای نوری یک ماده تمایز قائل شوند (مثلاً فقط D-گلوکز را عبور می‌دهند و L-گلوکز را نه).",
                "حامل‌ها همیشه مواد را از داخل به خارج سلول می‌برند.",
                "حامل‌ها فقط در فضای سیتوزول فعالیت می‌کنند."
            ],
            answer: 1,
            explanation: "حامل‌ها (پرمئازها) قدرت انتخاب بالایی دارند. جایگاه‌های اتصالی آن‌ها به قدری دقیق است که می‌توانند ایزومرهای نوری را تشخیص دهند؛ مثلاً حاملی که فقط به نوع D-گلوکز متصل می‌شود و به نوع L-گلوکز متصل نمی‌شود<span class=\"hidden\"></span>."
        },
        {
            question: "سرعت انتقال مواد از طریق «کانال‌های یونی» در مقایسه با «پروتئین‌های حامل» چگونه است؟",
            options: [
                "کانال‌ها بسیار کندتر هستند زیرا باید مولکول‌ها را یکی‌یکی بررسی کنند.",
                "سرعت هر دو دقیقاً برابر است.",
                "کانال‌ها بسیار سریع‌ترند (حدود ۱۰۰۰ برابر سریع‌تر) و می‌توانند تا ۱ میلیون یون در ثانیه عبور دهند.",
                "کانال‌ها اصلاً مواد را منتقل نمی‌کنند، فقط پیام می‌دهند."
            ],
            answer: 2,
            explanation: "در بهره‌وری حمل و نقل، کانال‌ها برتری مطلقی بر حامل‌ها دارند. کانال‌ها می‌توانند تا ۱ میلیون یون در هر ثانیه عبور دهند که این سرعت ۱۰۰۰ برابر بیشتر از سریع‌ترین پروتئین‌های حامل است (زیرا نیازی به تغییر شکل فضایی مکرر ندارند)<span class=\"hidden\"></span>."
        },
        {
            question: "کدام یک از عبارات زیر در مورد جهت انتقال در انتشار تسهیل‌شده (چه با ناقل، چه با کانال) صحیح است؟",
            options: [
                "همیشه همراه با مصرف مستقیم ATP است.",
                "انتقال مواد همیشه برخلاف شیب غلظت (از غلظت کم به زیاد) انجام می‌شود.",
                "انتقال غیرفعال است و مواد منحصراً در جهت شیب غلظت (از غلظت زیاد به کم) حرکت می‌کنند.",
                "جهت انتقال کاملاً تصادفی است."
            ],
            answer: 2,
            explanation: "همه کانال‌های پروتئینی و بسیاری از ناقل‌ها اجازه می‌دهند مواد به صورت غیرفعال (Passive) و بدون مصرف انرژی، صرفاً در جهت شیب غلظت یا الکتروشیمیایی (به سمت پایین یا Downhill) از غشا عبور کنند که به آن انتشار تسهیل‌شده می‌گویند<span class=\"hidden\"></span>."
        },
        {
            question: "کدام یک از عوامل زیر بر سرعت «انتشار ساده» مواد محلول در چربی از غشا تأثیر مستقیم دارد؟",
            options: [
                "میزان مصرف ATP توسط سلول",
                "قدرت انحلال ماده در چربی که به آن ضریب توزیع (Partition Coefficient یا K) می‌گویند.",
                "تعداد پمپ‌های سدیم-پتاسیم فعال در غشا",
                "وضعیت باز یا بسته بودن کانال‌های آکواپورین"
            ],
            answer: 1,
            explanation: "در انتشار آزاد، مواد محلول در چربی به راحتی از غشا عبور می‌کنند. سرعت این انتشار مستقیماً به قدرت انحلال آن ماده در چربی بستگی دارد که این ویژگی به نام ضریب توزیع (K) شناخته می‌شود<span class=\"hidden\"></span>."
        },
        {
            question: "کانال‌های نشت پتاسیم (K+ leak channels) چه نقشی در سلول دارند؟",
            options: [
                "آن‌ها همیشه بسته‌اند و فقط در زمان مرگ سلول باز می‌شوند.",
                "آن‌ها حتی در یک سلول تحریک‌نشده یا در حال استراحت نیز باز هستند و نقش کلیدی در ایجاد پتانسیل استراحت غشا دارند.",
                "پتاسیم را با مصرف ATP به داخل سلول پمپ می‌کنند.",
                "فقط اجازه خروج آب را می‌دهند."
            ],
            answer: 1,
            explanation: "شاید رایج‌ترین کانال‌های یونی، آن‌هایی باشند که به پتاسیم نفوذپذیرند. زیرمجموعه مهمی از این کانال‌ها حتی در سلولِ در حال استراحت باز هستند (کانال‌های نشت K) و با نشت پتاسیم به خارج، باعث ایجاد پتانسیل منفی در داخل غشا (پتانسیل استراحت) می‌شوند<span class=\"hidden\"></span>."
        },
        {
            question: "تأثیر «دما» بر سرعت انتقال از طریق «ناقل‌ها» در مقایسه با «کانال‌ها» چگونه است؟",
            options: [
                "هیچ‌کدام از تغییر دما تأثیر نمی‌پذیرند.",
                "سرعت کانال‌ها به شدت به دما وابسته است، اما ناقل‌ها بی‌تأثیرند.",
                "سرعت انتشار توسط حامل‌ها (ناقل‌ها) تأثیرپذیری بسیار بیشتری نسبت به دما دارد، در حالی که کانال‌ها کمتر تأثیرپذیرند.",
                "دما فقط بر انتشار ساده گازها اثر دارد."
            ],
            answer: 2,
            explanation: "ناقل‌ها برای انتقال مواد نیازمند تغییر شکل فضایی (Conformational change) هستند که این حرکت به سیالیت غشا و انرژی جنبشی بستگی دارد؛ بنابراین تغییرات دما تأثیر بسیار شدیدی بر سرعت ناقل‌ها دارد، در حالی که کانال‌ها (که فقط یک لوله باز هستند) کمتر از دما متأثر می‌شوند<span class=\"hidden\"></span>."
        }
    ]
},
{
id: "module_16",
    title: "ماژول شانزدهم: دروازه‌های هوشمند و الکتریسیته سلول",
    subtitle: "انواع کانال‌های یونی دریچه‌دار و راز پتانسیل استراحت",
    shortTitle: "۱۶. کانال‌های یونی و پتانسیل",
    content: `
        <div class="space-y-12">
            
            <!-- بنر بلاگری -->
            <div class="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-blue-600 to-indigo-900 p-10 text-white shadow-2xl">
                <div class="absolute -right-10 -bottom-10 opacity-20 text-[12rem] leading-none">⚡</div>
                <div class="relative z-10">
                    <span class="inline-block py-1 px-3 rounded-full bg-indigo-500/30 border border-indigo-400/50 text-indigo-100 text-sm font-bold mb-4 backdrop-blur-sm">نوروفیزیولوژی پایه</span>
                    <h3 class="text-3xl font-black mb-4 leading-tight">باتری زنده: سلول چگونه برق تولید می‌کند؟</h3>
                    <p class="text-lg text-indigo-50 leading-relaxed text-justify opacity-95 max-w-3xl">
                        اگر کانال‌های یونی همیشه باز بمانند، سلول در کسری از ثانیه منفجر می‌شود! به همین دلیل، کانال‌ها دارای «دروازه» (Gate) هستند و فقط با دریافت یک رمز عبور خاص (مثل تغییر ولتاژ، فشار یا مواد شیمیایی) باز می‌شوند. باز و بسته شدن همین دروازه‌هاست که به سلول‌های ما اجازه می‌دهد مثل یک <strong>باتری</strong> عمل کرده و پیام‌های الکتریکی تولید کنند<span class="hidden"></span>!
                    </p>
                </div>
            </div>

            <!-- ویژگی‌های کانال‌های یونی -->
            <div class="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
                <div class="absolute top-0 right-0 w-2 h-full bg-blue-500"></div>
                <h4 class="text-xl font-black text-slate-800 mb-6 flex items-center gap-3">
                    <span class="text-2xl">🚪</span> دو ویژگی حیاتی کانال‌های یونی
                </h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                        <h5 class="text-blue-700 font-bold mb-3 text-lg">۱. گزینش‌پذیری (Selectivity)</h5>
                        <p class="text-sm text-slate-600 leading-relaxed text-justify">کانال‌ها لوله‌های ساده نیستند! منافذ آن‌ها در بخش‌هایی به قدری <strong>باریک</strong> می‌شود که یون عبوری مجبور است مستقیماً با دیواره تماس پیدا کند. به این ترتیب، کانال دقیقاً یون را بر اساس <strong>اندازه و بار الکتریکی</strong> گزینش می‌کند (مثلاً کانال سدیم فقط سدیم را راه می‌دهد)<span class="hidden"></span>.</p>
                    </div>
                    <div class="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                        <h5 class="text-blue-700 font-bold mb-3 text-lg">۲. دریچه‌دار بودن (Gating)</h5>
                        <p class="text-sm text-slate-600 leading-relaxed text-justify">کانال‌ها به طور پیوسته باز نیستند. آن‌ها در پاسخ به یک محرک خاص باز می‌شوند (فقط انتقال <strong>غیرفعال</strong> انجام می‌دهند و نمی‌توانند به ATP متصل شوند)<span class="hidden"></span>.</p>
                    </div>
                </div>
            </div>

            <!-- انواع کانال‌های دریچه‌دار -->
            <div class="bg-slate-800 text-slate-200 p-8 rounded-3xl shadow-lg relative overflow-hidden mt-8">
                <div class="absolute -left-20 -bottom-20 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl"></div>
                <h4 class="text-xl font-black text-cyan-400 mb-6 flex items-center gap-3">
                    <span class="text-3xl">🔑</span> رمز عبور کانال‌ها چیست؟
                </h4>
                
                <div class="space-y-4">
                    <div class="bg-slate-700/50 p-5 rounded-2xl border border-slate-600 flex items-start gap-4">
                        <div class="text-3xl mt-1">🧪</div>
                        <div>
                            <h5 class="text-cyan-300 font-bold mb-1">۱. کانال‌های وابسته به لیگاند (شیمیایی)</h5>
                            <p class="text-sm text-slate-400 leading-relaxed text-justify">با اتصال یک ماده شیمیایی (مثل انتقال‌دهنده عصبی استیل‌کولین) باز می‌شوند. بیشتر روی <strong>دندریت‌های سلول عصبی</strong> قرار دارند<span class="hidden"></span>.</p>
                        </div>
                    </div>
                    
                    <div class="bg-slate-700/50 p-5 rounded-2xl border border-slate-600 flex items-start gap-4">
                        <div class="text-3xl mt-1">🔋</div>
                        <div>
                            <h5 class="text-cyan-300 font-bold mb-1">۲. کانال‌های وابسته به ولتاژ (Voltage-gated)</h5>
                            <p class="text-sm text-slate-400 leading-relaxed text-justify">با تغییر پتانسیل الکتریکی غشا باز یا بسته می‌شوند. مسئول اصلی <strong>تولید پتانسیل عمل</strong> در طول آکسون‌ها هستند. (نکته: کانال سدیمی ولتاژی، دو دریچه مستقل برای فعال‌سازی و غیرفعال‌سازی دارد!)<span class="hidden"></span>.</p>
                        </div>
                    </div>

                    <div class="bg-slate-700/50 p-5 rounded-2xl border border-slate-600 flex items-start gap-4">
                        <div class="text-3xl mt-1">🖐️</div>
                        <div>
                            <h5 class="text-cyan-300 font-bold mb-1">۳. کانال‌های وابسته به مکانیک (فشار)</h5>
                            <p class="text-sm text-slate-400 leading-relaxed text-justify">با کشش فیزیکی غشا یا فشار مکانیکی باز می‌شوند. در گیرنده‌های حسی لمس، فشار و ارتعاش پوست کاربرد دارند<span class="hidden"></span>.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- پتانسیل استراحت -->
            <div class="bg-emerald-50 border border-emerald-200 rounded-3xl p-8 mt-8">
                <h4 class="text-xl font-black text-emerald-800 mb-4 flex items-center gap-2">
                    <span class="text-3xl">🪫</span> پتانسیل استراحت غشا (Resting Potential)
                </h4>
                <p class="text-emerald-700 leading-loose text-justify text-sm mb-4">
                    سلول عصبی در حالت عادی (وقتی پیامی منتقل نمی‌کند) دارای ولتاژ <strong>۷۰- میلی‌ولت</strong> است (داخل سلول نسبت به بیرون منفی‌تر است). اما این باتری ۷۰- ولتی چگونه شارژ می‌ماند؟ ۳ عامل اصلی دخیلند<span class="hidden"></span>:
                </p>
                <ul class="list-disc list-inside space-y-2 text-sm text-emerald-800 ml-2 font-bold">
                    <li>تفاوت غلظت یون‌ها: سدیم (Na+) در بیرون زیاد و پتاسیم (K+) در داخل سلول زیاد است.</li>
                    <li>پروتئین‌های منفی: سیتوپلاسم پر از پروتئین‌های درشتی است که بار منفی دارند و نمی‌توانند از غشا خارج شوند.</li>
                    <li><strong>کانال‌های نشت پتاسیم (K+ leak):</strong> این کانال‌های استثنایی <strong>همیشه باز هستند!</strong> خروج مداوم پتاسیمِ مثبت از طریق این کانال‌ها، عامل اصلی منفی شدنِ داخل سلول است<span class="hidden"></span>.</li>
                </ul>
            </div>

        </div>
    `,
    quiz: [
        {
            question: "کانال‌های یونی با وجود اینکه یک منفذ باز در غشا ایجاد می‌کنند، چگونه بین یون‌ها (مثلاً سدیم و پتاسیم) تبعیض قائل شده و «گزینش‌پذیری» (Selectivity) نشان می‌دهند؟",
            options: [
                "آن‌ها به ATP متصل شده و یون‌ها را وزن می‌کنند.",
                "در بخشی از مسیر به قدری باریک می‌شوند که یون مجبور است با دیواره تماس فیزیکی پیدا کند تا بر اساس اندازه و بار الکتریکی فیلتر شود.",
                "دارای آنزیم‌هایی هستند که یون‌های اشتباه را تجزیه می‌کنند.",
                "گزینش‌پذیری ندارند و هر یونی از آن‌ها عبور می‌کند."
            ],
            answer: 1,
            explanation: "منافذ کانال‌ها در مکان‌هایی به اندازه کافی باریک است تا یون‌های نفوذی را مجبور به تماس نزدیک با دیواره‌های کانال کند. به این ترتیب، فقط یون‌هایی با اندازه و بار الکتریکی کاملاً مناسب می‌توانند عبور کنند<span class=\"hidden\"></span>."
        },
        {
            question: "کدام یک از عبارات زیر در مورد کانال‌های یونی صحیح است؟",
            options: [
                "همیشه انتقال فعال (Active transport) انجام می‌دهند.",
                "می‌توانند مواد را برخلاف شیب غلظت جابجا کنند.",
                "هرگز نمی‌توانند به یک منبع انرژی (مثل ATP) متصل شوند، بنابراین انتقال آن‌ها همیشه غیرفعال (Passive) است.",
                "سرعت انتقال آن‌ها بسیار کندتر از پروتئین‌های ناقل (پرمئازها) است."
            ],
            answer: 2,
            explanation: "کانال‌ها نمی‌توانند به منابع انرژی متصل شوند، بنابراین حمل و نقلی که انجام می‌دهند همیشه «منفعل» (غیرفعال) است و فقط در جهت شیب الکتروشیمیایی انجام می‌شود<span class=\"hidden\"></span>."
        },
        {
            question: "کانال‌های یونی «وابسته به لیگاند» (شیمیایی) در کدام بخش از یک نورون (سلول عصبی) تراکم بیشتری دارند؟",
            options: [
                "در طول غشای آکسون",
                "در پایانه‌های آکسون",
                "روی دندریت‌ها و جسم سلولی",
                "درون هسته نورون"
            ],
            answer: 2,
            explanation: "کانال‌های دارای دروازه شیمیایی (وابسته به لیگاند) بیشتر روی دندریت‌ها (و جسم سلولی) قرار دارند تا پیام‌ها (انتقال‌دهنده‌های عصبی) را از سلول‌های قبلی دریافت کنند<span class=\"hidden\"></span>."
        },
        {
            question: "کدام نوع از کانال‌های یونی در امتداد آکسون نورون‌ها قرار داشته و مسئول اصلی تولید و انتشار «پتانسیل عمل» (پیام عصبی) هستند؟",
            options: [
                "کانال‌های وابسته به لیگاند",
                "کانال‌های وابسته به ولتاژ (Voltage-gated)",
                "کانال‌های مکانیکی",
                "کانال‌های همیشه باز کلسیم"
            ],
            answer: 1,
            explanation: "کانال‌های یونی وابسته به ولتاژ (به ویژه کانال‌های ولتاژی سدیم و پتاسیم) در امتداد آکسون‌ها قرار دارند و باز و بسته شدن آن‌ها عامل اصلی ایجاد پتانسیل عمل است<span class=\"hidden\"></span>."
        },
        {
            question: "کانال‌های ولتاژی سدیم (Na+) دارای چه نوع سیستم دریچه‌ای هستند؟",
            options: [
                "فقط یک دریچه دارند که همیشه باز است.",
                "دو دریچه مستقل دارند: یک دریچه فعال‌سازی (که باز می‌شود) و یک دریچه غیرفعال‌سازی (که برای جلوگیری از ورود سدیم بسته می‌شود).",
                "با اتصال استیل‌کولین باز می‌شوند.",
                "دریچه‌هایی دارند که فقط در پاسخ به فشار مکانیکی عمل می‌کنند."
            ],
            answer: 1,
            explanation: "کانال‌های یون سدیمی ولتاژدار، دارای دو دروازه مستقل هستند. اولی یک دروازه فعال‌سازی است (با تحریک باز می‌شود) و دومی یک دروازه غیرفعال است (که پس از مدت کوتاهی برای توقف جریان سدیم بسته می‌شود)<span class=\"hidden\"></span>."
        },
        {
            question: "گیرنده‌های حسی موجود در پوست که به «لمس و ارتعاش» پاسخ می‌دهند، مجهز به کدام نوع کانال‌های یونی هستند؟",
            options: [
                "کانال‌های وابسته به مکانیک (Mechanically-gated)",
                "کانال‌های وابسته به ولتاژ",
                "کانال‌های وابسته به لیگاند",
                "کانال‌های نشت"
            ],
            answer: 0,
            explanation: "کانال‌های یونی دارای دروازه مکانیکی در اثر تغییرات فیزیکی و مکانیکی غشا (مانند کشش یا فشار) باز یا بسته می‌شوند و در گیرنده‌های حسی لمس و فشار کاربرد دارند<span class=\"hidden\"></span>."
        },
        {
            question: "پتانسیل استراحت غشا (Resting Membrane Potential) در سلول‌های عصبی به طور متوسط چقدر است و معنای آن چیست؟",
            options: [
                "۷۰+ میلی‌ولت (داخل سلول مثبت‌تر از خارج است).",
                "۷۰- میلی‌ولت (داخل سلول نسبت به خارج منفی‌تر است).",
                "صفر ولت (بار دو طرف کاملاً مساوی است).",
                "۱۲۰+ میلی‌ولت."
            ],
            answer: 1,
            explanation: "پتانسیل استراحت در غشای سلول‌های عصبی حدود ۷۰- میلی‌ولت است. علامت منفی نشان‌دهنده این است که سطح داخلی غشا (سیتوزول) نسبت به سطح خارجی، دارای بار منفی بیشتری است<span class=\"hidden\"></span>."
        },
        {
            question: "کدام گروه از کانال‌های یونی، حتی در یک سلول تحریک‌نشده یا در حال استراحت نیز به طور پیوسته «باز» هستند؟",
            options: [
                "کانال‌های ولتاژی سدیم",
                "کانال‌های لیگاندی کلسیم",
                "کانال‌های نشت پتاسیم (K+ leak channels)",
                "کانال‌های مکانیکی کلر"
            ],
            answer: 2,
            explanation: "رایج‌ترین کانال‌های یونی، کانال‌های نشت پتاسیم هستند که حتی در حالت استراحت سلول نیز باز هستند. خروج مداوم کاتیون پتاسیم از این کانال‌ها، عامل اصلی ایجاد بار منفی در داخل سلول است<span class=\"hidden\"></span>."
        },
        {
            question: "در حالت استراحت سلول، غلظت کدام یون‌ها در مایع خارج سلولی (ECF) بسیار بیشتر از سیتوپلاسم است؟",
            options: [
                "یون‌های پتاسیم (K+) و پروتئین‌ها",
                "یون‌های سدیم (Na+) و کلرید (Cl-)",
                "اسیدهای آمینه و گلوکز",
                "یون‌های هیدروژن (H+)"
            ],
            answer: 1,
            explanation: "در حالت استراحت، مایع خارج سلولی (ECF) دارای غلظت بالایی از یون‌های سدیم (Na+) و کلرید (Cl-) است. در حالی که داخل سلول (سیتوپلاسم) غنی از پتاسیم (K+) و پروتئین‌های دارای بار منفی است<span class=\"hidden\"></span>."
        },
        {
            question: "چرا پروتئین‌های داخل سلولی (سیتوپلاسم) نقش مهمی در ایجاد «پتانسیل استراحت منفی» دارند؟",
            options: [
                "زیرا با مصرف ATP برق تولید می‌کنند.",
                "زیرا دارای بار منفی هستند و به دلیل اندازه بزرگشان قادر به عبور از غشا و خروج از سلول نیستند.",
                "زیرا یون‌های سدیم را از خارج به داخل پمپ می‌کنند.",
                "زیرا مستقیماً به کانال‌های نشتی متصل شده و آن‌ها را می‌بندند."
            ],
            answer: 1,
            explanation: "پروتئین‌های داخل سلول دارای بار منفی (آنیون‌های ثابت) هستند و به دلیل اندازه بزرگشان به هیچ وجه نمی‌توانند از غشا عبور کنند. این بارهای منفیِ محبوس شده در سلول، یکی از عوامل اصلی منفی ماندن داخل سلول در پتانسیل استراحت هستند<span class=\"hidden\"></span>."
        }
    ]
},
{
id: "module_17",
    title: "ماژول هفدهم: طوفان الکتریکی در سلول عصبی",
    subtitle: "پتانسیل عمل، کانال‌های تأخیری و شتاب‌دهنده میلین",
    shortTitle: "۱۷. پتانسیل عمل و میلین",
    content: `
        <div class="space-y-12">
            
            <!-- بنر بلاگری -->
            <div class="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-yellow-500 to-red-600 p-10 text-white shadow-2xl">
                <div class="absolute -left-10 -bottom-10 opacity-20 text-[12rem] leading-none">🌩️</div>
                <div class="relative z-10">
                    <span class="inline-block py-1 px-3 rounded-full bg-red-900/30 border border-red-200/50 text-yellow-100 text-sm font-bold mb-4 backdrop-blur-sm">شلیک عصبی</span>
                    <h3 class="text-3xl font-black mb-4 leading-tight">پتانسیل عمل: وقتی باتری سلول منفجر می‌شود!</h3>
                    <p class="text-lg text-red-50 leading-relaxed text-justify opacity-95 max-w-3xl">
                        سلول عصبی در حالت استراحت مثل یک فنر فشرده شده است (-۷۰ میلی‌ولت). وقتی یک محرک قوی به سلول می‌رسد، ناگهان دروازه‌های سدیم باز می‌شوند و سیلی از بارهای مثبت وارد سلول می‌شود. این طوفان الکتریکی که <strong>پتانسیل عمل (Action Potential)</strong> نام دارد، با سرعت ۱۰۰ متر در ثانیه در طول آکسون شلیک می‌شود تا پیام به مغز یا عضله برسد<span class="hidden"></span>!
                    </p>
                </div>
            </div>

            <!-- مراحل پتانسیل عمل -->
            <div class="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
                <div class="absolute top-0 right-0 w-2 h-full bg-red-500"></div>
                <h4 class="text-xl font-black text-slate-800 mb-6 flex items-center gap-3">
                    <span class="text-2xl">📉</span> کالبدشکافی یک شلیک عصبی
                </h4>
                
                <div class="space-y-4">
                    <div class="bg-rose-50 p-5 rounded-2xl border border-rose-100">
                        <strong class="text-rose-800 text-lg block mb-2">۱. دپولاریزاسیون (Depolarization): حمله سدیم!</strong>
                        <p class="text-sm text-rose-700 leading-relaxed text-justify">
                            محرک باعث باز شدن سریع <strong>کانال‌های ولتاژی سدیم (Na+)</strong> می‌شود. سدیم به داخل سلول هجوم می‌آورد و ولتاژ غشا از حالت منفی خارج شده و به سمت مثبت (حدود +۵۰ میلی‌ولت) می‌رود<span class="hidden"></span>. 
                        </p>
                    </div>
                    
                    <div class="bg-amber-50 p-5 rounded-2xl border border-amber-100">
                        <strong class="text-amber-800 text-lg block mb-2">۲. نجات از اسپاسم دائمی (غیرفعال شدن)</strong>
                        <p class="text-sm text-amber-700 leading-relaxed text-justify">
                            اگر کانال سدیم باز بماند، سلول در حالت اسپاسم قفل می‌شود! اما کانال سدیمی یک ترفند دارد: یک <strong>دروازه غیرفعال‌کننده</strong> دارد که در کسری از میلی‌ثانیه کانال را مسدود می‌کند، حتی اگر ولتاژ هنوز مثبت باشد<span class="hidden"></span>.
                        </p>
                    </div>

                    <div class="bg-blue-50 p-5 rounded-2xl border border-blue-100">
                        <strong class="text-blue-800 text-lg block mb-2">۳. رپولاریزاسیون: ناجیانِ تأخیری (پتاسیم)</strong>
                        <p class="text-sm text-blue-700 leading-relaxed text-justify">
                            برای برگرداندن سلول به حالت استراحت (-۷۰)، <strong>کانال‌های ولتاژی پتاسیم (K+)</strong> باز می‌شوند. چون این کانال‌ها کمی کندتر باز می‌شوند به آن‌ها <strong>کانال‌های تأخیری</strong> می‌گویند. خروج پتاسیم باعث می‌شود داخل سلول دوباره منفی شود<span class="hidden"></span>.
                        </p>
                    </div>
                </div>
            </div>

            <!-- غلاف میلین و بیماری MS -->
            <div class="bg-slate-800 text-slate-200 p-8 rounded-3xl shadow-lg relative overflow-hidden mt-8">
                <div class="absolute -right-20 -bottom-20 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl"></div>
                <h4 class="text-xl font-black text-emerald-400 mb-6 flex items-center gap-3">
                    <span class="text-3xl">🚄</span> غلاف میلین و هدایت جهشی (Saltatory)
                </h4>
                <p class="text-slate-300 leading-loose text-justify mb-6">
                    اگر قرار باشد پتانسیل عمل میلی‌متر به میلی‌متر در طول یک آکسون یک متری طی شود، خیلی کند می‌شود! سلول‌های ما از یک کابل عایق‌بندی شده استفاده می‌کنند:
                </p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="bg-slate-700/50 p-6 rounded-2xl border border-slate-600">
                        <h5 class="text-emerald-300 font-black text-lg mb-3">عایق میلین</h5>
                        <p class="text-sm text-slate-400 leading-relaxed text-justify">
                            <strong>سلول‌های شوان</strong> (در اعصاب محیطی) و <strong>الیگودندروسیت‌ها</strong> (در مغز و نخاع)، غشای خود را به دور آکسون می‌پیچند تا نشت جریان را متوقف کنند<span class="hidden"></span>.
                        </p>
                    </div>

                    <div class="bg-slate-700/50 p-6 rounded-2xl border border-slate-600">
                        <h5 class="text-emerald-300 font-black text-lg mb-3">گره‌های رانویه (Nodes of Ranvier)</h5>
                        <p class="text-sm text-slate-400 leading-relaxed text-justify">
                            عایق میلین در فواصل منظم قطع می‌شود (گره رانویه). <strong>تمام کانال‌های ولتاژی سدیم</strong> در این گره‌ها جمع شده‌اند. پیام عصبی به جای حرکت پیوسته، از یک گره به گره بعدی می‌پرد! این <strong>هدایت نمکی (جهشی)</strong>، سرعت را به شدت بالا می‌برد و انرژی کمتری مصرف می‌کند<span class="hidden"></span>.
                        </p>
                    </div>
                </div>
                
                <div class="mt-6 p-4 bg-red-900/30 border border-red-500/50 rounded-xl flex items-start gap-4">
                    <span class="text-2xl mt-1">⚠️</span>
                    <p class="text-sm text-red-200 leading-relaxed text-justify">
                        <strong>بیماری مالتیپل اسکلروزیس (MS):</strong> یک بیماری ویرانگر (دمیلینه کننده) است که در آن سیستم ایمنی به غلاف میلین در سیستم عصبی مرکزی حمله می‌کند. با نابودی میلین، انتشار تکانه‌های عصبی به شدت کند شده یا متوقف می‌شود<span class="hidden"></span>.
                    </p>
                </div>
            </div>

            <!-- یونوفورها -->
            <div class="bg-teal-50 border border-teal-200 rounded-3xl p-8 mt-8">
                <h4 class="text-xl font-black text-teal-800 mb-4 flex items-center gap-2">
                    <span class="text-3xl">🦠</span> سلاح باکتری‌ها: یونوفورها (Ionophores)
                </h4>
                <p class="text-teal-700 leading-loose text-justify text-sm">
                    میکروارگانیسم‌ها برای حمله به رقبا، مولکول‌های آب‌گریز و کوچکی به نام <strong>یونوفور</strong> می‌سازند. این مولکول‌ها در غشای هدف حل شده و نفوذپذیری آن را به یون‌ها افزایش می‌دهند. آن‌ها با پوشاندن بارِ یون، اجازه می‌دهند یون از چربی غشا عبور کند. یونوفورها دو نوعند: <strong>حامل‌های متحرک</strong> و <strong>تشکیل‌دهنده کانال</strong> (فقط انتقال غیرفعال انجام می‌دهند)<span class="hidden"></span>.
                </p>
            </div>

        </div>
    `,
    quiz: [
        {
            question: "شروع پتانسیل عمل (تکانه عصبی) با کدام رویداد در غشای نورون همراه است؟",
            options: [
                "خروج شدید یون‌های پتاسیم از طریق کانال‌های نشتی.",
                "بسته شدن تمام کانال‌های ولتاژی.",
                "باز شدن کانال‌های ولتاژی سدیم (Na+)، هجوم سدیم به داخل سلول و دپولاریزاسیون (مثبت شدن) غشا.",
                "توقف فعالیت پمپ سدیم-پتاسیم."
            ],
            answer: 2,
            explanation: "محرک باعث دپولاریزاسیون غشا شده و کانال‌های ولتاژی سدیم باز می‌شوند. هجوم بار مثبت سدیم به داخل سلول، غشا را بیشتر دپولاریزه کرده و این فرآیند خودتقویت‌کننده باعث شلیک پتانسیل عمل می‌شود<span class=\"hidden\"></span>."
        },
        {
            question: "سلول عصبی برای جلوگیری از قرار گرفتن در حالت «اسپاسم الکتریکی دائمی» پس از باز شدن کانال‌های سدیمی چه مکانیسمی دارد؟",
            options: [
                "کانال‌های سدیمی دارای یک دروازه غیرفعال‌کننده (Inactivation gate) هستند که حتی اگر غشا هنوز دپولاریزه باشد، در کسری از میلی‌ثانیه کانال را مسدود می‌کند.",
                "سلول فوراً تمام سدیم‌ها را از طریق پمپ‌ها خارج می‌کند.",
                "سلول از طریق اندوسیتوز، کانال‌های سدیمی را می‌بلعد.",
                "یون‌های کلر وارد سلول شده و سدیم‌ها را خنثی می‌کنند."
            ],
            answer: 0,
            explanation: "کانال‌های سدیمِ ولتاژدار، مکانیزم غیرفعال‌سازی خودکار دارند که باعث بسته شدن سریع آن‌ها می‌شود. در این حالت غیرفعال، تا زمانی که پتانسیل غشا به حالت استراحت برنگردد، کانال نمی‌تواند دوباره باز شود<span class=\"hidden\"></span>."
        },
        {
            question: "دلیل نام‌گذاری «کانال‌های تأخیری پتاسیم» چیست و نقش آن‌ها در پتانسیل عمل چیست؟",
            options: [
                "چون همیشه بسته‌اند؛ آن‌ها فقط در زمان خواب سلول باز می‌شوند.",
                "زیرا نسبت به کانال‌های سدیم با سرعت کمتری (تأخیر) باز می‌شوند؛ نقش آن‌ها خروج پتاسیم و بازگرداندن سریع غشا به پتانسیل منفی اولیه (رپولاریزاسیون) است.",
                "چون انتقال پتاسیم را متوقف (به تأخیر) می‌اندازند تا سدیم وارد شود.",
                "زیرا فقط در افراد مبتلا به آلزایمر عمل می‌کنند."
            ],
            answer: 1,
            explanation: "کانال‌های ولتاژی پتاسیم به تغییرات ولتاژ مشابه کانال سدیم پاسخ می‌دهند اما با سینتیک کندتر (تأخیری). باز شدن آن‌ها باعث خروج پتاسیم شده و به بازگشت سریع غشا به پتانسیل منفی (Repolarization) کمک می‌کند<span class=\"hidden\"></span>."
        },
        {
            question: "کدام بخش از پروتئین کانال ولتاژی پتاسیم برای فرآیند «غیرفعال‌سازی سریع» آن ضروری است؟",
            options: [
                "قندهای متصل به سطح خارجی آن",
                "لنگر GPI متصل به غشا",
                "۲۰ اسیدآمینه ابتدایی در N-ترمینال (پایانه آمینی)",
                "حلقه حاوی اسید سیالیک"
            ],
            answer: 2,
            explanation: "مطالعات روی کانال‌های جهش‌یافته نشان می‌دهد که حدود ۲۰ اسیدآمینه در N-ترمینال (پایانه آمینی) پروتئینِ کانالِ پتاسیم، برای غیرفعال‌سازی سریع آن مورد نیاز است. اگر این منطقه حذف شود، غیرفعال‌سازی لغو می‌شود<span class=\"hidden\"></span>."
        },
        {
            question: "کدام سلول‌ها وظیفه ایجاد «غلاف میلین» را در اعصاب محیطی و سیستم عصبی مرکزی به ترتیب بر عهده دارند؟",
            options: [
                "سلول‌های اپیتلیال / فیبروبلاست‌ها",
                "استئوبلاست‌ها / کندروبلاست‌ها",
                "سلول‌های شوان (محیطی) / الیگودندروسیت‌ها (مرکزی)",
                "ماکروفاژها / آستروصیت‌ها"
            ],
            answer: 2,
            explanation: "آکسون‌ها در اعصاب محیطی توسط سلول‌های شوان (Schwann cells) و در سیستم عصبی مرکزی (مغز و نخاع) توسط الیگودندروسیت‌ها میلین‌دار می‌شوند تا سرعت هدایت پیام الکتریکی افزایش یابد<span class=\"hidden\"></span>."
        },
        {
            question: "پدیده «هدایت نمکی یا جهشی» (Saltatory conduction) در آکسون‌های میلین‌دار چه مزیتی برای سلول عصبی دارد؟",
            options: [
                "باعث کاهش سرعت پیام عصبی برای دقت بیشتر می‌شود.",
                "به سلول اجازه می‌دهد تا اکسیژن بیشتری ذخیره کند.",
                "باعث پرش پتانسیل عمل از یک گره رانویه به گره دیگر شده، که هم سرعت را افزایش می‌دهد و هم انرژی متابولیکی کمتری مصرف می‌کند.",
                "سلول را وادار به تولید یونوفور می‌کند."
            ],
            answer: 2,
            explanation: "به جای انتشار پیوسته و میلی‌متری، در هدایت جهشی، پتانسیل عمل از یک گره رانویه به گره بعدی می‌پرد. این امر سرعت هدایت را بسیار بالا برده و چون پمپ‌ها فقط در گره‌ها کار می‌کنند، انرژی متابولیکی کمتری مصرف می‌شود<span class=\"hidden\"></span>."
        },
        {
            question: "تجمع کانال‌های ولتاژی سدیم در یک آکسون میلین‌دار دقیقاً در کجا صورت می‌گیرد؟",
            options: [
                "به طور یکنواخت در تمام طول آکسون پخش شده‌اند.",
                "منحصراً در زیر غلاف میلین.",
                "فقط در گره‌های رانویه (فضاهای فاقد میلین بین سلول‌های شوان).",
                "فقط در پایانه‌های آکسون."
            ],
            answer: 2,
            explanation: "غلاف میلین در فواصل منظم در نقاطی به نام گره‌های رانویه (Nodes of Ranvier) قطع می‌شود. تقریباً تمام کانال‌های ولتاژی سدیم در آکسون، در همین گره‌ها متمرکز شده‌اند تا دپولاریزاسیون فقط در این نقاط انجام شود<span class=\"hidden\"></span>."
        },
        {
            question: "مکانیسم اصلی آسیب‌زا در بیماری «مالتیپل اسکلروزیس» (MS) چیست؟",
            options: [
                "حمله سیستم ایمنی به غلاف میلین در سیستم عصبی مرکزی (دمیلی‌ناسیون) که انتشار تکانه‌های عصبی را کند یا متوقف می‌کند.",
                "از بین رفتن دائمی پمپ‌های سدیم-پتاسیم.",
                "ایجاد لخته‌های خونی در رگ‌های مغزی.",
                "جهش در ژن کلاژن نوع یک."
            ],
            answer: 0,
            explanation: "بیماری MS یک بیماری دمیلینه‌کننده (از بین برنده میلین) است. با تخریب غلاف‌های میلین توسط سیستم ایمنی، عایق‌بندی آکسون از بین رفته و سرعت و کارایی انتشار پتانسیل عمل مختل یا متوقف می‌شود<span class=\"hidden\"></span>."
        },
        {
            question: "«یونوفورها» (Ionophores) که توسط میکروارگانیسم‌ها ترشح می‌شوند، چگونه عمل می‌کنند؟",
            options: [
                "آن‌ها پمپ‌های سدیم-پتاسیم سلول هدف را خاموش می‌کنند.",
                "مولکول‌های آب‌گریزی هستند که در دولایه لیپیدی حل شده و با محافظت از بار الکتریکی یون، به آن اجازه عبور (انتشار غیرفعال) از غشا را می‌دهند.",
                "دیواره باکتری را کاملاً متلاشی می‌کنند.",
                "کربوهیدرات‌های سطح سلول را تجزیه می‌کنند."
            ],
            answer: 1,
            explanation: "یونوفورها مولکول‌های کوچک آب‌گریزی هستند (شامل دو دسته حامل متحرک و تشکیل‌دهنده کانال) که با پوشاندن بار یون، به آن اجازه می‌دهند از محیط چرب غشا عبور کند. این انتقال همیشه در جهت شیب غلظت (غیرفعال) است<span class=\"hidden\"></span>."
        },
        {
            question: "سرعت هدایت پتانسیل عمل در یک آکسون سالم و میلین‌دار می‌تواند به چه مقداری برسد؟",
            options: [
                "حداکثر ۱ متر در ساعت.",
                "حداکثر ۱۰ سانتی‌متر در ثانیه.",
                "به اندازه ۱۰۰ متر در ثانیه یا بیشتر.",
                "نزدیک به سرعت نور."
            ],
            answer: 2,
            explanation: "موج متحرک تحریک الکتریکی (پتانسیل عمل) می‌تواند پیامی را بدون تضعیف از یک انتهای نورون به انتهای دیگر با سرعتی به اندازه ۱۰۰ متر در ثانیه یا بیشتر منتقل کند (به لطف وجود غلاف میلین و هدایت جهشی)<span class=\"hidden\"></span>."
        }
    ]
},
{
id: "module_18",
    title: "ماژول هجدهم: موتورهای سلولی و پمپ‌های انرژی",
    subtitle: "پمپ سدیم-پتاسیم، توربین‌های میتوکندری و مقاومت سرطان (ABC)",
    shortTitle: "۱۸. انتقال فعال و پمپ‌ها",
    content: `
        <div class="space-y-12">
            
            <!-- بنر بلاگری -->
            <div class="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-orange-600 to-red-900 p-10 text-white shadow-2xl">
                <div class="absolute -right-10 -bottom-10 opacity-20 text-[12rem] leading-none">⚙️</div>
                <div class="relative z-10">
                    <span class="inline-block py-1 px-3 rounded-full bg-red-900/40 border border-red-200/50 text-orange-100 text-sm font-bold mb-4 backdrop-blur-sm">انتقال فعال اولیه</span>
                    <h3 class="text-3xl font-black mb-4 leading-tight">پمپ‌ها: شنا کردن خلاف جهت آب!</h3>
                    <p class="text-lg text-red-50 leading-relaxed text-justify opacity-95 max-w-3xl">
                        کانال‌ها و ناقل‌های معمولی مثل یک سرسره عمل می‌کنند و مواد را فقط در جهت شیب غلظت (از زیاد به کم) جابجا می‌کنند. اما اگر سلول بخواهد زباله‌ای را بیرون بیندازد یا ماده‌ای را به زور وارد کند چه؟ اینجاست که <strong>انتقال فعال (Active Transport)</strong> وارد می‌شود. پمپ‌ها با مصرف مستقیم انرژی (ATP، نور یا شیب الکتروشیمیایی) مواد را <strong>برخلاف شیب غلظت</strong> جابجا می‌کنند<span class="hidden"></span>.
                    </p>
                </div>
            </div>

            <!-- پمپ سدیم-پتاسیم -->
            <div class="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
                <div class="absolute top-0 right-0 w-2 h-full bg-orange-500"></div>
                <h4 class="text-xl font-black text-slate-800 mb-6 flex items-center gap-3">
                    <span class="text-2xl">🔋</span> شاهکار خلقت: پمپ سدیم-پتاسیم (Na+/K+ ATPase)
                </h4>
                <p class="text-slate-600 leading-loose mb-6 text-justify">
                    تقریباً یک‌سوم کل انرژی (ATP) بدن شما فقط برای راه‌اندازی همین یک پمپ مصرف می‌شود! این پمپ یک پروتئین چهار زیرواحدی (۲ آلفا و ۲ بتا) است. زیرواحد آلفا نقش کاتالیزوری دارد و زیرواحد بتا گلیکوزیله است<span class="hidden"></span>. 
                </p>
                
                <div class="bg-orange-50 p-6 rounded-2xl border border-orange-200 relative">
                    <h5 class="font-bold text-orange-800 mb-4">چرخه ۳ مرحله‌ای پمپ:</h5>
                    <ul class="space-y-4 text-sm text-orange-900 font-medium">
                        <li class="flex items-start gap-3">
                            <span class="bg-orange-200 text-orange-800 w-6 h-6 rounded-full flex items-center justify-center shrink-0">۱</span>
                            <p><strong>اتصال سدیم و فسفریلاسیون:</strong> ۳ یون سدیم (Na+) در داخل سلول به پمپ وصل می‌شوند. پمپ یک ATP مصرف کرده و خودش را <strong>فسفریله</strong> می‌کند.</p>
                        </li>
                        <li class="flex items-start gap-3">
                            <span class="bg-orange-200 text-orange-800 w-6 h-6 rounded-full flex items-center justify-center shrink-0">۲</span>
                            <p><strong>شلیک سدیم به بیرون:</strong> فسفریله شدن باعث تغییر شکل (Conformational change) پمپ شده و <strong>۳ سدیم به خارج سلول</strong> پرتاب می‌شوند.</p>
                        </li>
                        <li class="flex items-start gap-3">
                            <span class="bg-orange-200 text-orange-800 w-6 h-6 rounded-full flex items-center justify-center shrink-0">۳</span>
                            <p><strong>ورود پتاسیم و دفسفریلاسیون:</strong> حالا ۲ یون پتاسیم (K+) از بیرون به پمپ وصل می‌شوند. پمپ فسفات خود را از دست می‌دهد (نیاز به یون <strong>Mg2+</strong> دارد)، به شکل اول برمی‌گردد و <strong>۲ پتاسیم به داخل سلول</strong> وارد می‌شوند<span class="hidden"></span>.</p>
                        </li>
                    </ul>
                    <div class="mt-4 p-3 bg-red-100 text-red-800 rounded-lg text-center font-black">
                        نتیجه: خروج ۳ بار مثبت و ورود ۲ بار مثبت = پمپ الکتروژنیک (سازنده اختلاف پتانسیل منفی در داخل سلول)<span class="hidden"></span>!
                    </div>
                </div>
            </div>

            <!-- خانواده پمپ‌ها -->
            <div class="bg-slate-800 text-slate-200 p-8 rounded-3xl shadow-lg relative overflow-hidden mt-8">
                <div class="absolute -left-20 -bottom-20 w-64 h-64 bg-fuchsia-500/20 rounded-full blur-3xl"></div>
                <h4 class="text-xl font-black text-fuchsia-400 mb-6 flex items-center gap-3">
                    <span class="text-3xl">🗂️</span> ۴ خانواده بزرگ پمپ‌های ATPase
                </h4>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="bg-slate-700/50 p-5 rounded-2xl border border-slate-600">
                        <h5 class="text-fuchsia-300 font-bold mb-2">۱. خانواده P (P-type)</h5>
                        <p class="text-sm text-slate-400 leading-relaxed text-justify">در حین کار خودشان را فسفریله می‌کنند. شامل پمپ Na+/K+، پمپ کلسیم (در شبکه سارکوپلاسمی عضله برای استراحت عضلانی) و پمپ H+/K+ (برای ترشح اسید معده)<span class="hidden"></span>.</p>
                    </div>
                    <div class="bg-slate-700/50 p-5 rounded-2xl border border-slate-600">
                        <h5 class="text-fuchsia-300 font-bold mb-2">۲. خانواده V (V-type)</h5>
                        <p class="text-sm text-slate-400 leading-relaxed text-justify">پمپ‌های پروتونی (H+) که در غشای <strong>لیزوزوم‌ها، واکوئل‌ها و دستگاه گلژی</strong> قرار دارند و داخل این اندامک‌ها را اسیدی نگه می‌دارند<span class="hidden"></span>.</p>
                    </div>
                    <div class="bg-slate-700/50 p-5 rounded-2xl border border-slate-600">
                        <h5 class="text-fuchsia-300 font-bold mb-2">۳. خانواده F (F-type / ATP Synthase)</h5>
                        <p class="text-sm text-slate-400 leading-relaxed text-justify">ساختاری شبیه <strong>توربین</strong> دارند! در میتوکندری و کلروپلاست، این پمپ‌ها <strong>برعکس کار می‌کنند</strong>؛ یعنی به جای مصرف ATP برای پمپاژ H+، اجازه می‌دهند H+ عبور کند و از نیروی آن برای <strong>ساختن ATP</strong> استفاده می‌کنند<span class="hidden"></span>!</p>
                    </div>
                    
                    <!-- ABC Transporters / مقاومت دارویی -->
                    <div class="bg-red-900/40 p-5 rounded-2xl border border-red-500/50 flex flex-col justify-center">
                        <h5 class="text-red-300 font-bold mb-2 flex items-center gap-2">۴. ناقلین ABC <span class="text-xl">☠️</span></h5>
                        <p class="text-sm text-red-100 leading-relaxed text-justify">
                            وظیفه عادی آن‌ها خروج سموم از سلول است. اما <strong>در سلول‌های سرطانی</strong> بیش از حد بیان می‌شوند و داروهای شیمی‌درمانی را به عنوان سم شناسایی کرده و به بیرون پمپ می‌کنند! این عامل اصلی <strong>مقاومت دارویی سرطان (MDR)</strong> است<span class="hidden"></span>.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    `,
    quiz: [
        {
            question: "اصلی‌ترین تفاوت «انتقال فعال» (Active Transport) با انتقال غیرفعال (انتشار تسهیل‌شده) چیست؟",
            options: [
                "انتقال فعال فقط برای گازها کاربرد دارد.",
                "در انتقال فعال، مواد با مصرف انرژی (مثل هیدرولیز ATP) همواره در جهت شیب غلظت حرکت می‌کنند.",
                "در انتقال فعال، مواد با مصرف انرژی می‌توانند برخلاف شیب غلظت (از غلظت کم به زیاد) جابجا شوند.",
                "انتقال فعال نیازی به پروتئین ناقل در غشا ندارد."
            ],
            answer: 2,
            explanation: "انتقال فعال فرآیندی است که طی آن یک پروتئین ناقل (پمپ) با مصرف انرژی (مانند ATP) یک مولکول را اغلب برخلاف شیب غلظت (از محیط رقیق به غلیظ) در دو لایه لیپیدی منتقل می‌کند<span class=\"hidden\"></span>."
        },
        {
            question: "استوکیومتری (نسبت انتقال) در پمپ سدیم-پتاسیم (Na+/K+ ATPase) به چه صورت است؟",
            options: [
                "۳ یون سدیم به داخل و ۲ یون پتاسیم به خارج",
                "۳ یون سدیم به خارج و ۲ یون پتاسیم به داخل",
                "۲ یون سدیم به خارج و ۳ یون پتاسیم به داخل",
                "۱ یون سدیم به خارج و ۱ یون پتاسیم به داخل"
            ],
            answer: 1,
            explanation: "پمپ سدیم-پتاسیم با هیدرولیز یک مولکول ATP، ۳ یون سدیم را از سلول خارج کرده و ۲ یون پتاسیم را به داخل سلول وارد می‌کند<span class=\"hidden\"></span>."
        },
        {
            question: "چرا پمپ سدیم-پتاسیم یک پمپ «الکتروژنیک» (Electrogenic) نامیده می‌شود؟",
            options: [
                "زیرا در حین فعالیت، نور فلورسانس ساطع می‌کند.",
                "چون ۳ بار مثبت (Na+) را خارج و فقط ۲ بار مثبت (K+) را وارد می‌کند، که منجر به منفی‌تر شدن داخل سلول و ایجاد اختلاف پتانسیل می‌شود.",
                "زیرا فقط با جریان برق فعال می‌شود.",
                "چون الکترون‌ها را مستقیماً به میتوکندری منتقل می‌کند."
            ],
            answer: 1,
            explanation: "خروج نامتوازن بارها (۳ سدیم مثبت به بیرون در برابر ورود تنها ۲ پتاسیم مثبت به داخل) باعث از دست رفتن یک بار مثبت خالص در هر چرخه می‌شود که به ایجاد اختلاف پتانسیل الکتریکی منفی در داخل سلول کمک می‌کند<span class=\"hidden\"></span>."
        },
        {
            question: "کدام مرحله از چرخه پمپ سدیم-پتاسیم، باعث «تغییر ساختار فضایی (Conformational change)» پمپ و پرتاب سدیم به خارج از سلول می‌شود؟",
            options: [
                "اتصال یون‌های کلسیم به زیرواحد بتا",
                "دفسفریلاسیون پمپ توسط یون منیزیم",
                "فسفریله شدن (Autophosphorylation) پمپ با استفاده از ATP",
                "اتصال کلسترول به بخش آب‌گریز پمپ"
            ],
            answer: 2,
            explanation: "پس از اتصال ۳ یون سدیم در داخل سلول، پمپ با استفاده از ATP فسفریله می‌شود. این فسفریلاسیون باعث تغییر آرایش فضایی پمپ شده و منجر به انتقال و آزادسازی سدیم‌ها در سمت خارج غشا می‌گردد<span class=\"hidden\"></span>."
        },
        {
            question: "مرحله «دفسفریلاسیون» (جدا شدن گروه فسفات) در پمپ سدیم-پتاسیم چه زمانی رخ می‌دهد و به حضور کدام یون نیاز دارد؟",
            options: [
                "پس از اتصال سدیم در داخل سلول / نیاز به یون آهن دارد.",
                "پس از اتصال پتاسیم در خارج سلول / نیاز به یون کلسیم دارد.",
                "پس از اتصال پتاسیم در خارج سلول / نیاز به حضور یون منیزیم (Mg2+) دارد.",
                "همزمان با تولید ATP / نیاز به یون کلر دارد."
            ],
            answer: 2,
            explanation: "پس از اتصال سوبسترا در خارج سلول (پتاسیم) به پمپ، مرحله دفسفریلاسیون صورت می‌گیرد. در این مرحله وجود یون منیزیم (Mg2+) در محیط الزامی است. این عمل باعث برگشت پمپ به شکل اولیه و ورود پتاسیم به داخل سلول می‌شود<span class=\"hidden\"></span>."
        },
        {
            question: "پمپ کلسیم (Ca2+ pump) که در غشای شبکه سارکوپلاسمی عضلات قرار دارد و کلسیم را از سیتوزول جمع‌آوری می‌کند، در کدام خانواده از پمپ‌های ATPase قرار می‌گیرد؟",
            options: [
                "خانواده V-type",
                "خانواده P-type",
                "خانواده F-type",
                "ناقلین ABC"
            ],
            answer: 1,
            explanation: "پمپ کلسیم، همانند پمپ سدیم-پتاسیم و پمپ پروتون-پتاسیم معده، در خانواده پمپ‌های نوع P (P-type) قرار دارد که ویژگی بارز آن‌ها اتوفسفریلاسیون در حین چرخه انتقال است<span class=\"hidden\"></span>."
        },
        {
            question: "پمپ‌های خانواده V (V-type ATPase) عمدتاً در کدام بخش‌های سلول یافت می‌شوند و وظیفه آن‌ها چیست؟",
            options: [
                "در غشای داخلی میتوکندری قرار دارند و ATP می‌سازند.",
                "در غشای لیزوزوم‌ها، واکوئل‌ها و دستگاه گلژی قرار داشته و به عنوان پمپ پروتون (H+) محیط درون آن‌ها را اسیدی نگه می‌دارند.",
                "در غشای گلبول قرمز قرار داشته و اکسیژن پمپ می‌کنند.",
                "مسئول پمپاژ داروهای شیمی‌درمانی به خارج از سلول هستند."
            ],
            answer: 1,
            explanation: "پمپ‌های خانواده V، پمپ‌های پروتونی هستند که در غشای واکوئل‌ها، لیزوزوم‌ها، دستگاه گلژی و وزیکول‌های ترشحی قرار دارند و با پمپاژ H+، pH داخل این اندامک‌ها را پایین (اسیدی) نگه می‌دارند<span class=\"hidden\"></span>."
        },
        {
            question: "ویژگی منحصر‌به‌فرد پمپ‌های خانواده F (F-type ATPase / ATP Synthase) که در میتوکندری و کلروپلاست وجود دارند چیست؟",
            options: [
                "آن‌ها فقط در تاریکی مطلق کار می‌کنند.",
                "به جای مصرف ATP برای پمپاژ پروتون، به طور معمول برعکس کار کرده و با عبور دادن پروتون‌ها در جهت شیب غلظت، از نیروی آن‌ها برای «ساخت ATP» استفاده می‌کنند.",
                "ساختاری کاملاً خطی داشته و فاقد زیرواحد چرخان هستند.",
                "فقط یون‌های سدیم را از میتوکندری خارج می‌کنند."
            ],
            answer: 1,
            explanation: "آنزیم‌های F-type (سنتازهای ATP) ساختاری توربین‌مانند دارند و معمولاً برعکس سایر پمپ‌ها عمل می‌کنند؛ آن‌ها از گرادیان (شیب) پروتون برای سنتز ATP از ADP و فسفات استفاده می‌کنند<span class=\"hidden\"></span>."
        },
        {
            question: "دلیل اصلی «مقاومت دارویی چندگانه» (MDR) در سلول‌های سرطانی در برابر داروهای شیمی‌درمانی چیست؟",
            options: [
                "کاهش شدید تعداد میتوکندری‌ها در سلول سرطانی.",
                "بیان بیش از حد پمپ‌های ABC (ABC-Transporters) که داروهای شیمی‌درمانی را به عنوان سم شناسایی کرده و آن‌ها را به طور فعال از سلول خارج می‌کنند.",
                "تغییر در ساختار کلاژن نوع یک.",
                "غیرفعال شدن کامل پمپ سدیم-پتاسیم."
            ],
            answer: 1,
            explanation: "پمپ‌های ABC-Transporter در حالت عادی وظیفه خروج سموم از سلول را دارند. در سلول‌های سرطانی، این پمپ‌ها بیش از حد بیان شده و داروهای شیمی‌درمانی را از سلول به بیرون پمپ می‌کنند، که منجر به ایجاد مقاومت دارویی می‌شود<span class=\"hidden\"></span>."
        },
        {
            question: "منبع انرژی پروتئین باکتریورودوپسین (Bacteriorhodopsin) در آرکی‌ها برای پمپاژ پروتون به خارج از سلول چیست؟",
            options: [
                "هیدرولیز مستقیم ATP",
                "نور (فوتون‌ها) که توسط کروموفور «رتینال» جذب می‌شود.",
                "شیب غلظت یون سدیم",
                "واکنش‌های بی‌هوازی گلیکولیز"
            ],
            answer: 1,
            explanation: "باکتریورودوپسین یک پمپ پروتونی فعال‌شونده با نور است. با جذب فوتون‌های نور توسط گروه کروموفور آن (رتینال)، پروتئین تغییر شکل داده و پروتون‌ها را به خارج سلول پمپ می‌کند تا شیب H+ برای تولید ATP فراهم شود<span class=\"hidden\"></span>."
        }
    ]
},
{
id: "module_19",
    title: "ماژول نوزدهم: موج‌سواری غشایی و تنظیم اسیدیته",
    subtitle: "انتقال فعال ثانویه، سیمپورت، آنتی‌پورت و نجات سلول از اسید",
    shortTitle: "۱۹. انتقال فعال ثانویه",
    content: `
        <div class="space-y-12">
            
            <!-- بنر بلاگری -->
            <div class="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-lime-700 to-green-900 p-10 text-white shadow-2xl">
                <div class="absolute -left-10 -bottom-10 opacity-20 text-[12rem] leading-none">🏄</div>
                <div class="relative z-10">
                    <span class="inline-block py-1 px-3 rounded-full bg-green-900/40 border border-green-200/50 text-lime-100 text-sm font-bold mb-4 backdrop-blur-sm">انتقال فعال ثانویه</span>
                    <h3 class="text-3xl font-black mb-4 leading-tight">سواری مجانی روی امواج سدیم!</h3>
                    <p class="text-lg text-green-50 leading-relaxed text-justify opacity-95 max-w-3xl">
                        پمپ سدیم-پتاسیم با مصرف کلی ATP، سدیم‌ها را بیرون می‌ریزد و یک «سد» پر از سدیم پشت غشا می‌سازد. حالا سلول از این فشار ذخیره شده استفاده می‌کند! وقتی سدیم می‌خواهد با سرعت به داخل سلول برگردد، ناقل‌های هوشمند <strong>انتقال فعال ثانویه</strong> در مسیرش قرار می‌گیرند و از انرژی حرکت سدیم برای وارد کردن زوری قندها یا خارج کردن اسیدها استفاده می‌کنند<span class="hidden"></span>!
                    </p>
                </div>
            </div>

            <!-- انواع انتقال‌دهنده‌ها -->
            <div class="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
                <div class="absolute top-0 right-0 w-2 h-full bg-lime-500"></div>
                <h4 class="text-xl font-black text-slate-800 mb-6 flex items-center gap-3">
                    <span class="text-2xl">🔄</span> روش‌های هم‌سفری در غشا
                </h4>
                <p class="text-slate-600 leading-loose mb-6 text-justify">
                    برخی ناقل‌ها فقط یک ماده را عبور می‌دهند (<strong>یونی‌پورت - Uniporter</strong>). اما در انتقال فعال ثانویه، انتقال دو ماده به هم گره خورده است (حاملین جفت‌شونده). انرژی این انتقال از شیب غلظت یک یون (هدایت‌گر) تأمین می‌شود<span class="hidden"></span>.
                </p>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="bg-lime-50 p-6 rounded-2xl border border-lime-200">
                        <h5 class="font-bold text-lime-800 mb-3 text-lg flex items-center gap-2">🤝 سیمپورت (Symport)</h5>
                        <p class="text-sm text-lime-700 leading-relaxed text-justify">
                            هر دو ماده (یون هدایت‌گر و مولکول مسافر) در <strong>یک جهت</strong> حرکت می‌کنند. 
                            <br><br><strong>مثال:</strong> ناقل سدیم-گلوکز در روده. سدیم می‌خواهد وارد شود، گلوکز را هم همراه خودش به داخل می‌کشد<span class="hidden"></span>.
                        </p>
                    </div>
                    <div class="bg-rose-50 p-6 rounded-2xl border border-rose-200">
                        <h5 class="font-bold text-rose-800 mb-3 text-lg flex items-center gap-2">🔀 آنتی‌پورت (Antiport)</h5>
                        <p class="text-sm text-rose-700 leading-relaxed text-justify">
                            دو ماده در <strong>جهت مخالف هم</strong> حرکت می‌کنند (یکی وارد، دیگری خارج می‌شود).
                            <br><br><strong>مثال:</strong> ناقل کلر-بی‌کربنات، یا ناقل سدیم-پروتون که سدیم را وارد و اسید را خارج می‌کند<span class="hidden"></span>.
                        </p>
                    </div>
                </div>
                
                <div class="mt-4 p-4 bg-slate-100 rounded-xl text-sm text-slate-700 text-center font-bold">
                    نیروی محرکه اصلی در سلول‌های حیوانی شیب <strong>سدیم (Na+)</strong> است، اما در باکتری‌ها، مخمرها و گیاهان، نیروی محرکه اصلی شیب <strong>پروتون (H+)</strong> است<span class="hidden"></span>!
                </div>
            </div>

            <!-- تنظیم pH سلولی -->
            <div class="bg-slate-800 text-slate-200 p-8 rounded-3xl shadow-lg relative overflow-hidden mt-8">
                <div class="absolute -left-20 -top-20 w-64 h-64 bg-yellow-500/20 rounded-full blur-3xl"></div>
                <h4 class="text-xl font-black text-yellow-400 mb-4 flex items-center gap-3">
                    <span class="text-3xl">🧪</span> تنظیم pH: نجات سلول از خفگی اسیدی!
                </h4>
                <p class="text-slate-300 leading-loose text-justify mb-6">
                    آنزیم‌های سیتوزول برای کار کردن به pH دقیقاً خنثی (حدود ۷.۲) نیاز دارند. اما متابولیسم سلول مدام پروتون (H+) تولید می‌کند که سلول را اسیدی می‌کند! سلول چطور pH خود را تنظیم می‌کند؟<span class="hidden"></span>
                </p>

                <div class="space-y-4">
                    <div class="bg-slate-700/50 p-5 rounded-2xl border border-slate-600 flex items-start gap-4">
                        <div class="text-3xl mt-1">🚿</div>
                        <div>
                            <h5 class="text-yellow-300 font-bold mb-2">آنتی‌پورت سدیم-پروتون (Na+/H+ Exchanger)</h5>
                            <p class="text-sm text-slate-400 leading-relaxed text-justify">
                                این پروتئین ناقل در غشای پلاسما، از انرژی ورود سدیم استفاده می‌کند تا پروتون‌های اضافی (H+) را به <strong>بیرون از سلول پمپ کند</strong> و سیتوزول را از اسیدی شدن نجات دهد<span class="hidden"></span>.
                            </p>
                        </div>
                    </div>
                    
                    <div class="bg-slate-700/50 p-5 rounded-2xl border border-slate-600 flex items-start gap-4">
                        <div class="text-3xl mt-1">🧯</div>
                        <div>
                            <h5 class="text-yellow-300 font-bold mb-2">کمک از بی‌کربنات (HCO3-)</h5>
                            <p class="text-sm text-slate-400 leading-relaxed text-justify">
                                علاوه بر خروج پروتون، سلول از آنتی‌پورت‌های دیگری استفاده می‌کند تا <strong>یون بی‌کربنات</strong> (که خاصیت بازی دارد) را وارد سیتوزول کند. بی‌کربنات با پروتون‌ها ترکیب شده و اثر اسیدی آن‌ها را خنثی می‌کند<span class="hidden"></span>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    `,
    quiz: [
        {
            question: "منبع انرژی در «انتقال فعال ثانویه» (Secondary Active Transport) از کجا تأمین می‌شود؟",
            options: [
                "از هیدرولیز مستقیم ATP توسط خود ناقل",
                "از نور خورشید و فوتون‌ها",
                "از گرادیان (شیب) غلظت الکتروشیمیایی یک یون (مثل سدیم) که قبلاً توسط پمپ‌های اولیه ایجاد شده است.",
                "از حرارت محیط (انرژی جنبشی ساده)"
            ],
            answer: 2,
            explanation: "در انتقال فعال ثانویه، ناقل مستقیماً ATP مصرف نمی‌کند، بلکه از انرژی ذخیره شده در شیب غلظت یونی (مانند شیب سدیم که توسط پمپ سدیم-پتاسیم ایجاد شده) استفاده می‌کند تا ماده دیگری را برخلاف شیب غلظتش جابجا کند<span class=\"hidden\"></span>."
        },
        {
            question: "اگر یک پروتئین حامل (Carrier) تنها یک نوع مولکول یا یون را در جهت شیب غلظتش عبور دهد، به آن چه می‌گویند؟",
            options: [
                "سیمپورت (Symport)",
                "آنتی‌پورت (Antiport)",
                "یونی‌پورت (Uniporter)",
                "آکواپورین (Aquaporin)"
            ],
            answer: 2,
            explanation: "پروتئین حاملی که به سادگی یک یون یا مولکول را از یک طرف غشا به طرف دیگر (بدون وابستگی به انتقال ماده‌ای دیگر) منتقل می‌کند، یونی‌پورتر نامیده می‌شود<span class=\"hidden\"></span>."
        },
        {
            question: "در مکانیسم «آنتی‌پورت» (پادپورت)، حرکت مواد به چه شکلی انجام می‌پذیرد؟",
            options: [
                "یون هدایت‌گر و مولکول مسافر هر دو در یک جهت حرکت می‌کنند.",
                "یون‌ها و مولکول‌های هدایت‌گر و هدایت‌شونده در جهت مخالف یکدیگر حرکت می‌کنند (یکی وارد و دیگری خارج می‌شود).",
                "مواد فقط به صورت وزیکولی جابجا می‌شوند.",
                "ماده از بین دو لایه لیپیدی بدون نیاز به پروتئین عبور می‌کند."
            ],
            answer: 1,
            explanation: "در سیستم آنتی‌پورت (Antiport)، ناقل دو ماده را در جهت مخالف هم از غشا عبور می‌دهد؛ به عنوان مثال حرکت یون‌های کلرید و بی‌کربنات یا ورود سدیم و خروج پروتون<span class=\"hidden\"></span>."
        },
        {
            question: "در سلول‌های اپیتلیال روده، «گلوکز و اسیدهای آمینه» توسط کدام مکانیسم وارد سلول می‌شوند؟",
            options: [
                "انتشار ساده از طریق لیپیدها",
                "آنتی‌پورت با پتاسیم",
                "سیمپورت (هم‌انتقالی) با استفاده از شیب غلظت یون سدیم (Na+)",
                "پینوسیتوز"
            ],
            answer: 2,
            explanation: "سلول‌های اپیتلیال روده دارای سیستم‌های سیمپورت (Symport) هستند. از آنجا که سدیم تمایل شدیدی برای ورود به سلول دارد، در حین ورود، گلوکز یا اسید آمینه را نیز همراه خود (در همان جهت) به داخل می‌کشد<span class=\"hidden\"></span>."
        },
        {
            question: "اگر غلظت یون سدیم (Na+) در مایع خارج سلولیِ روده کاهش یابد، چه اتفاقی برای جذب گلوکز می‌افتد؟",
            options: [
                "جذب گلوکز به شدت افزایش می‌یابد.",
                "سرعت ورود (جذب) گلوکز کاهش می‌یابد.",
                "گلوکز به جای ورود، از سلول تبخیر می‌شود.",
                "هیچ تأثیری بر انتقال گلوکز ندارد."
            ],
            answer: 1,
            explanation: "چون نیروی محرکه برای سیمپورتِ سدیم-گلوکز، شیب غلظت سدیم است؛ اگر غلظت سدیم در خارج کاهش یابد، شیب الکتروشیمیایی سدیم ضعیف شده و در نتیجه سرعت ورود املاح (گلوکز) کاهش می‌یابد<span class=\"hidden\"></span>."
        },
        {
            question: "نیروی محرکه اصلی برای انتقال فعال ثانویه در باکتری‌ها، مخمرها و گیاهان چیست؟",
            options: [
                "شیب غلظت یون سدیم (Na+)",
                "شیب غلظت یون کلسیم (Ca2+)",
                "شیب غلظت پروتون (H+)",
                "شیب غلظت یون کلر (Cl-)"
            ],
            answer: 2,
            explanation: "برخلاف سلول‌های حیوانی که نیروی محرکه اصلی در آن‌ها سدیم است، در باکتری‌ها، قارچ‌ها و گیاهان، سیستم‌های حمل و نقل فعال ثانویه عمدتاً توسط شیب پروتون (H+) هدایت می‌شوند<span class=\"hidden\"></span>."
        },
        {
            question: "pH مطلوب برای عملکرد بهینه آنزیم‌های «سیتوزولی» چقدر است و چرا سلول باید آن را کنترل کند؟",
            options: [
                "بسیار اسیدی (حدود ۲)؛ زیرا آنزیم‌ها اسیددوست هستند.",
                "بسیار بازی (حدود ۱۰).",
                "نزدیک به خنثی (حدود ۷.۲)؛ زیرا ساختار و عملکرد ماکرومولکول‌ها به شدت تحت تأثیر pH است و در صورت اسیدی شدن از کار می‌افتند.",
                "سلول نیازی به کنترل pH سیتوزول ندارد."
            ],
            answer: 2,
            explanation: "آنزیم‌های سیتوزولی در pH نزدیک به خنثی (حدود ۷.۲) بهترین عملکرد را دارند (برخلاف آنزیم‌های لیزوزومی که در محیط اسیدی فعالند). متابولیسم سلول مدام اسید (H+) تولید می‌کند، بنابراین سلول باید سریعاً این پروتون‌ها را دفع یا خنثی کند<span class=\"hidden\"></span>."
        },
        {
            question: "پروتئین غشایی «آنتی‌پورت سدیم-پروتون (Na+/H+ Exchanger)» چگونه به حفظ pH سیتوزول کمک می‌کند؟",
            options: [
                "از انرژی گرادیان سدیم برای پمپاژ پروتون‌های اضافی (H+) به بیرون از سلول استفاده می‌کند.",
                "پروتون‌ها را به داخل هسته منتقل می‌کند.",
                "پروتون‌ها را به مولکول آب تبدیل می‌کند.",
                "سدیم را به همراه پروتون به داخل سلول سیمپورت می‌کند."
            ],
            answer: 0,
            explanation: "برای جلوگیری از اسیدی شدن سیتوزول، آنتی‌پورت Na+/H+ از انرژی ورود سدیم استفاده می‌کند تا پروتون‌ها (H+) را که در اثر متابولیسم تولید شده‌اند، به طور مداوم به خارج از سلول پمپ کند<span class=\"hidden\"></span>."
        },
        {
            question: "مکانیسم دوم سلول برای مقابله با اسیدی شدن سیتوزول (علاوه بر خروج پروتون) چیست؟",
            options: [
                "تولید اسید کلریدریدریک در سیتوزول.",
                "وارد کردن یون بی‌کربنات (HCO3-) به داخل سیتوزول جهت خنثی‌سازی پروتون‌ها.",
                "خارج کردن آب از سلول.",
                "جذب دی‌اکسید کربن به شکل گاز خالص."
            ],
            answer: 1,
            explanation: "علاوه بر پمپ کردن H+ به بیرون، سلول از آنتی‌پورت‌های خاصی استفاده می‌کند تا یون بی‌کربنات (HCO3-) را وارد سیتوزول کند. بی‌کربنات به عنوان یک بافر طبیعی با H+ ترکیب شده و آن را خنثی می‌کند<span class=\"hidden\"></span>."
        },
        {
            question: "در ناقلِ آنتی‌پورت کلر-بی‌کربنات (موجود در گلبول‌های قرمز که با نام باند ۳ نیز شناخته می‌شود)، حرکت یون‌ها چگونه است؟",
            options: [
                "کلر و بی‌کربنات هر دو از سلول خارج می‌شوند.",
                "ورود یک یون کلر در ازای خروج یک یون بی‌کربنات انجام می‌شود (در جهت‌های مخالف).",
                "کلر و بی‌کربنات هر دو به پمپ سدیم-پتاسیم متصل می‌شوند.",
                "هر دو یون با مصرف مستقیم ATP وارد می‌شوند."
            ],
            answer: 1,
            explanation: "این پروتئین نمونه کلاسیک یک آنتی‌پورت است که در آن یون‌های املاح (کلرید و بی‌کربنات) در جهت مخالف یکدیگر حرکت می‌کنند (کلر وارد و بی‌کربنات خارج می‌شود یا بالعکس)<span class=\"hidden\"></span>."
        }
    ]
},
{
id: "module_20",
    title: "ماژول بیستم: بلعیدن جهان پیرامون",
    subtitle: "آشنایی با اندوسیتوز، فاگوسیتوز (سلول‌خواری) و پینوسیتوز",
    shortTitle: "۲۰. فاگوسیتوز و پینوسیتوز",
    content: `
        <div class="space-y-12">
            
            <!-- بنر بلاگری -->
            <div class="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-zinc-800 to-stone-900 p-10 text-white shadow-2xl">
                <div class="absolute -right-10 -bottom-10 opacity-20 text-[12rem] leading-none">🦠</div>
                <div class="relative z-10">
                    <span class="inline-block py-1 px-3 rounded-full bg-stone-700/50 border border-stone-500/50 text-stone-200 text-sm font-bold mb-4 backdrop-blur-sm">ترافیک وزیکولی</span>
                    <h3 class="text-3xl font-black mb-4 leading-tight">هیولاهای میکروسکوپی: سلول چگونه غذا می‌خورد؟</h3>
                    <p class="text-lg text-stone-300 leading-relaxed text-justify opacity-95 max-w-3xl">
                        پمپ‌ها و کانال‌ها فقط برای مولکول‌های کوچک و یون‌ها کاربرد دارند. اما اگر سلول بخواهد یک باکتری کامل یا یک قطره درشت از مایعات اطراف را وارد خود کند چه؟ اینجاست که غشای سلول تغییر شکل می‌دهد، به داخل فرو می‌رود و یک <strong>وزیکول (کیسه)</strong> می‌سازد. به این فرآیند ورودِ بسته‌بندی‌شده مواد، <strong>اندوسیتوز (Endocytosis)</strong> می‌گویند<span class="hidden"></span>.
                    </p>
                </div>
            </div>

            <!-- فاگوسیتوز (سلول خواری) -->
            <div class="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
                <div class="absolute top-0 right-0 w-2 h-full bg-red-600"></div>
                <h4 class="text-xl font-black text-slate-800 mb-6 flex items-center gap-3">
                    <span class="text-2xl">🍽️</span> فاگوسیتوز (Phagocytosis): خوردن طعمه‌های درشت
                </h4>
                <p class="text-slate-600 leading-loose mb-6 text-justify">
                    فاگوسیتوز یعنی بلعیدن ذرات بزرگ (مثل باکتری‌ها یا سلول‌های مرده). در تک‌یاخته‌ها (مثل آمیب) این کار برای غذا خوردن است، اما در بدن انسان، این وظیفه بر عهده <strong>سلول‌های ایمنی حرفه‌ای (ماکروفاژها و نوتروفیل‌ها)</strong> است تا بدن را از عفونت پاک کنند<span class="hidden"></span>.
                </p>
                
                <div class="space-y-4">
                    <div class="bg-red-50 p-5 rounded-2xl border border-red-100 flex items-start gap-4">
                        <div class="text-3xl mt-1">🕸️</div>
                        <div>
                            <h5 class="text-red-800 font-bold mb-2">نقش حیاتی اکتین (Actin)</h5>
                            <p class="text-sm text-red-700 leading-relaxed text-justify">
                                وقتی باکتری به گیرنده‌های ماکروفاژ می‌چسبد، غشای سلول با کمک <strong>رشته‌های اکتینِ اسکلت سلولی</strong> به سمت بیرون رشد می‌کند (پاهای کاذب) تا باکتری را کاملاً در آغوش گرفته و ببلعد. (باکتریِ بلعیده شده درون کیسه‌ای به نام <em>فاگوزوم</em> قرار می‌گیرد)<span class="hidden"></span>.
                            </p>
                        </div>
                    </div>
                    
                    <div class="bg-orange-50 p-5 rounded-2xl border border-orange-100 flex items-start gap-4">
                        <div class="text-3xl mt-1">☠️</div>
                        <div>
                            <h5 class="text-orange-800 font-bold mb-2">اتصال مرگبار با لیزوزوم</h5>
                            <p class="text-sm text-orange-700 leading-relaxed text-justify">
                                فاگوزوم به تنهایی خطری برای باکتری ندارد! برای هضم طعمه، فاگوزوم باید در داخل سلول حرکت کرده و به یک <strong>لیزوزوم</strong> (اندامک حاوی آنزیم‌های اسیدی هضم‌کننده) متصل شود. به این ساختار مشترک، <em>فاگولیزوزوم</em> می‌گویند<span class="hidden"></span>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- پینوسیتوز و ماکروپینوسیتوز -->
            <div class="bg-slate-800 text-slate-200 p-8 rounded-3xl shadow-lg relative overflow-hidden mt-8">
                <div class="absolute -left-20 -bottom-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
                <h4 class="text-xl font-black text-blue-400 mb-4 flex items-center gap-3">
                    <span class="text-3xl">🥤</span> پینوسیتوز (Pinocytosis): آشامیدن سلولی
                </h4>
                <p class="text-slate-300 leading-loose text-justify mb-6">
                    برخلاف فاگوسیتوز که فقط در سلول‌های خاصی انجام می‌شود، <strong>تمام سلول‌های یوکاریوتی</strong> مدام در حال پینوسیتوز (نوشیدن قطرات ریز مایع خارج سلولی) هستند! این کار برای بازیافت غشا و دریافت مواد مغذیِ محلول انجام می‌شود<span class="hidden"></span>.
                </p>

                <div class="bg-blue-900/40 p-6 rounded-2xl border border-blue-500/50 mb-6">
                    <h5 class="text-blue-300 font-bold mb-3 flex items-center gap-2">🌊 ماکروپینوسیتوز (Macropinocytosis)</h5>
                    <p class="text-sm text-blue-100 leading-relaxed text-justify">
                        گاهی سلول با یک سیگنال خاص (مثل فاکتورهای رشد) تحریک می‌شود و غشای خود را به شکل موج‌های بزرگ (Ruffles) درمی‌آورد. این موج‌ها روی هم می‌افتند و حجم زیادی از مایع و مواد محلول را به شکل <strong>بدون انتخاب (Non-specific)</strong> به داخل سلول قورت می‌دهند! این یک مسیر عالی برای تغذیه سریع سلول یا متاسفانه مسیر نفوذ برخی ویروس‌هاست<span class="hidden"></span>.
                    </p>
                </div>
            </div>

        </div>
    `,
    quiz: [
        {
            question: "فرآیندی که طی آن سلول با تغییر شکل غشا و ایجاد وزیکول، ذرات بزرگ، باکتری‌ها یا مایعات را به داخل سیتوزول وارد می‌کند، به طور کلی چه نامیده می‌شود؟",
            options: [
                "اگزوسیتوز (Exocytosis)",
                "اندوسیتوز (Endocytosis)",
                "انتقال فعال ثانویه",
                "انتشار ساده"
            ],
            answer: 1,
            explanation: "ورود مواد (چه ذرات جامد و چه مایعات) به داخل سلول از طریق تشکیل وزیکول از غشای پلاسمایی، اندوسیتوز (درون‌بری) نام دارد<span class=\"hidden\"></span>."
        },
        {
            question: "در پستانداران، عمل «فاگوسیتوز» (بلعیدن ذرات درشت) عمدتاً بر عهده کدام گروه از سلول‌هاست و هدف اصلی آن چیست؟",
            options: [
                "سلول‌های اپیتلیال / برای تولید انرژی",
                "سلول‌های عصبی / برای انتقال پیام",
                "ماکروفاژها و نوتروفیل‌ها (گلبول‌های سفید) / برای دفاع از بدن در برابر عفونت و پاکسازی سلول‌های مرده",
                "گلبول‌های قرمز خون / برای حمل اکسیژن"
            ],
            answer: 2,
            explanation: "در موجودات پرسلولی مانند انسان، فاگوسیتوز به چند نوع سلول ایمنیِ فاگوسیتیک حرفه‌ای (شامل ماکروفاژها و نوتروفیل‌ها) محدود می‌شود که وظیفه پاکسازی بدن از عفونت‌ها و سلول‌های پیر را بر عهده دارند<span class=\"hidden\"></span>."
        },
        {
            question: "تغییر شکل غشای سلول فاگوسیت‌کننده و ایجاد بازوهای سیتوپلاسمی (پاهای کاذب) برای در آغوش گرفتن باکتری، نیازمند فعالیت کدام جزء اسکلت سلولی است؟",
            options: [
                "میکروتوبول‌ها",
                "فیلامنت‌های بینابینی (کراتین)",
                "فیلامنت‌های اکتین (Actin filaments)",
                "پمپ سدیم-پتاسیم"
            ],
            answer: 2,
            explanation: "پلیمریزاسیون و بازآرایی دینامیکِ رشته‌های اکتین در زیر غشا، نیروی لازم برای بیرون‌زدگی غشا و احاطه کردن ذره (باکتری) در فاگوسیتوز را فراهم می‌کند<span class=\"hidden\"></span>."
        },
        {
            question: "پس از آنکه ذره وارد سلول شد و درون وزیکولی به نام «فاگوزوم» قرار گرفت، برای هضم نهایی باید با کدام اندامک درون‌سلولی ادغام شود؟",
            options: [
                "میتوکندری",
                "لیزوزوم",
                "هسته",
                "شبکه آندوپلاسمی صاف"
            ],
            answer: 1,
            explanation: "فاگوزوم به تنهایی قادر به هضم ماده نیست. او باید در داخل سلول با یک لیزوزوم (که حاوی آنزیم‌های هیدرولیتیک و اسیدی است) ادغام شده و «فاگولیزوزوم» را بسازد تا طعمه تجزیه شود<span class=\"hidden\"></span>."
        },
        {
            question: "کدام یک از عبارات زیر درباره تفاوت فاگوسیتوز و پینوسیتوز صحیح است؟",
            options: [
                "فاگوسیتوز به معنای بلع مایعات است و پینوسیتوز به معنای بلع جامدات.",
                "فاگوسیتوز در تمام سلول‌های بدن رخ می‌دهد، اما پینوسیتوز فقط در ماکروفاژها.",
                "فاگوسیتوز (سلول‌خواری) شامل ورود ذرات درشت است و محدود به سلول‌های خاصی است، اما پینوسیتوز (آشامیدن سلولی) ورود قطرات مایع است که در همه سلول‌های یوکاریوتی رخ می‌دهد.",
                "هر دو فرآیند ذرات را به خارج از سلول پرتاب می‌کنند."
            ],
            answer: 2,
            explanation: "پینوسیتوز (Pinocytosis) فرآیند نوشیدن مداوم قطرات مایع خارج سلولی است که در تمام سلول‌های هسته‌دار انجام می‌شود، در حالی که فاگوسیتوز بلع ذرات درشت است و فقط توسط فاگوسیت‌های حرفه‌ای انجام می‌گیرد<span class=\"hidden\"></span>."
        },
        {
            question: "فرآیند «ماکروپینوسیتوز» (Macropinocytosis) چه ویژگی برجسته‌ای دارد؟",
            options: [
                "نوشیدن مقادیر عظیمی از مایع به صورت «بدون انتخاب» (Non-specific) از طریق ایجاد موج‌های غشایی (Ruffles).",
                "انتخاب بسیار دقیق و اختصاصی فقط یک نوع یون از محیط.",
                "خروج سریع آب از سلول در محیط هایپرتونیک.",
                "تشکیل منفذ آبی توسط پروتئین‌های پورین."
            ],
            answer: 0,
            explanation: "در ماکروپینوسیتوز، غشای سلول موج‌های بزرگی ایجاد می‌کند که روی هم می‌افتند و حجم زیادی از مایع و مواد محلول در آن را به صورت کاملاً غیرانتخابی وارد ماکروپینوزوم می‌کنند<span class=\"hidden\"></span>."
        },
        {
            question: "کدام لیپید غشایی به عنوان یک سیگنال کلیدی در غشا تولید می‌شود تا پلیمریزاسیون اکتین را در هنگام فاگوسیتوز و ماکروپینوسیتوز تحریک کند؟",
            options: [
                "کلسترول",
                "اسفنگومیلین",
                "فسفوئینوزیتیدها (به ویژه PIP3)",
                "گانگلیوزید GM1"
            ],
            answer: 2,
            explanation: "هنگام اتصال لیگاند به گیرنده فاگوسیتیک، آنزیم PI 3-kinase فعال شده و غلظت فسفوئینوزیتیدهایی مانند PI(3,4,5)P3 را در غشا بالا می‌برد که این لیپیدها پلیمریزاسیون اکتین را برای ایجاد پاهای کاذب هدایت می‌کنند<span class=\"hidden\"></span>."
        },
        {
            question: "در آمیب‌ها و تک‌یاخته‌ها (Protozoa)، هدف اصلی از فرآیند «فاگوسیتوز» چیست؟",
            options: [
                "دفاع از خود در برابر ویروس‌ها",
                "خارج کردن زباله‌ها از سلول",
                "تغذیه و تأمین مواد غذایی (با بلعیدن باکتری‌ها و مخمرها)",
                "ارتباطات عصبی بین دو آمیب"
            ],
            answer: 2,
            explanation: "برخلاف پستانداران که از فاگوسیتوز برای سیستم ایمنی استفاده می‌کنند، تک‌یاخته‌ها مانند آمیب از فاگوسیتوز به عنوان روش اصلی برای تغذیه و گرفتن ذرات غذایی بزرگ استفاده می‌کنند<span class=\"hidden\"></span>."
        },
        {
            question: "کدام یک از عوامل زیر می‌تواند محرک (Trigger) برای شروع فاگوسیتوز توسط ماکروفاژها باشد؟",
            options: [
                "کاهش شدید دمای محیط",
                "شناسایی آنتی‌بادی‌های متصل به سطح یک باکتری (اپسونیزاسیون) توسط گیرنده‌های ماکروفاژ.",
                "افزایش غلظت اکسیژن در خون.",
                "افزایش ضخامت غشای پایه."
            ],
            answer: 1,
            explanation: "فاگوسیتوز یک فرآیند محرک‌دار (Triggered) است. مثلاً ماکروفاژها دارای گیرنده‌هایی هستند که آنتی‌بادی‌های متصل به پاتوژن‌ها را می‌شناسند و این اتصال به عنوان محرکی برای شروع فرآیند بلع عمل می‌کند<span class=\"hidden\"></span>."
        },
        {
            question: "آیا در طول فرآیند پینوسیتوزِ مداوم در یک سلول، اندازه غشای پلاسمایی به شدت کاهش می‌یابد؟",
            options: [
                "بله، سلول مدام کوچک‌تر شده و در نهایت محو می‌شود.",
                "خیر، زیرا به همان اندازه‌ای که غشا از طریق اندوسیتوز به داخل می‌رود، از طریق اگزوسیتوز (برون‌بری) دوباره به سطح سلول اضافه می‌گردد.",
                "خیر، زیرا لیپیدها در داخل سلول به سرعت تجزیه شده و دوباره به سطح فرستاده می‌شوند.",
                "بله، پینوسیتوز باعث تجزیه دائمی کلسترول می‌شود."
            ],
            answer: 1,
            explanation: "یک ماکروفاژ در هر ساعت کل غشای پلاسمایی خود را می‌نوشد! اما اندازه غشا تغییر نمی‌کند، زیرا میزان غشایی که با اندوسیتوز وارد می‌شود دقیقاً با میزان غشایی که توسط وزیکول‌های اگزوسیتوز به سطح برمی‌گردد، متعادل (بازیافت) می‌شود<span class=\"hidden\"></span>."
        }
    ]
},
{
id: "module_21",
    title: "ماژول بیست و یکم: شکارچیان هوشمند و سبدهای کلاترین",
    subtitle: "اندوسیتوز با واسطه گیرنده، پوشش‌های وزیکولی و سرنوشت LDL",
    shortTitle: "۲۱. اندوسیتوز با واسطه گیرنده",
    content: `
        <div class="space-y-12">
            
            <!-- بنر بلاگری -->
            <div class="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-indigo-800 to-violet-950 p-10 text-white shadow-2xl">
                <div class="absolute -right-10 -bottom-10 opacity-20 text-[12rem] leading-none">🧺</div>
                <div class="relative z-10">
                    <span class="inline-block py-1 px-3 rounded-full bg-violet-500/30 border border-violet-400/50 text-violet-100 text-sm font-bold mb-4 backdrop-blur-sm">شکار انتخابی</span>
                    <h3 class="text-3xl font-black mb-4 leading-tight">سبدبافی در غشای سلول: شکارچی دقیق کلسترول!</h3>
                    <p class="text-lg text-violet-100 leading-relaxed text-justify opacity-95 max-w-3xl">
                        پینوسیتوز و فاگوسیتوز نسبتاً غیرانتخابی هستند. اما اگر سلول بخواهد یک مولکول خاص و کمیاب (مثل کلسترول یا هورمون‌ها) را از میان هزاران مولکول دیگر به دام بیندازد چه؟ اینجاست که سیستم فوق‌پیشرفته‌ی <strong>اندوسیتوز با واسطه گیرنده (Receptor-mediated endocytosis)</strong> فعال می‌شود؛ سیستمی که با سبدهای هندسی از جنس پروتئین <em>کلاترین</em> کار می‌کند<span class="hidden"></span>.
                    </p>
                </div>
            </div>

            <!-- ساختار کلاترین و پوشش‌ها -->
            <div class="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
                <div class="absolute top-0 right-0 w-2 h-full bg-violet-600"></div>
                <h4 class="text-xl font-black text-slate-800 mb-6 flex items-center gap-3">
                    <span class="text-2xl">📐</span> تری‌سکلین (Triskelion) و سبدهای کلاترین
                </h4>
                <p class="text-slate-600 leading-loose mb-6 text-justify">
                    پروتئین <strong>کلاترین (Clathrin)</strong> ساختار پایه‌ایِ پوشش وزیکول‌های اندوسیتوزی است. هر واحد سازنده کلاترین، ساختاری سه‌شاخه به نام <strong>تری‌سکلین</strong> دارد که از ۳ زنجیره سنگین و ۳ زنجیره سبک تشکیل شده است<span class="hidden"></span>.
                </p>
                
                <div class="space-y-4">
                    <div class="bg-violet-50 p-5 rounded-2xl border border-violet-100 flex items-start gap-4">
                        <div class="text-3xl mt-1">⚽</div>
                        <div>
                            <h5 class="text-violet-900 font-bold mb-2">تشکیل قفس هندسی (Cage)</h5>
                            <p class="text-sm text-violet-800 leading-relaxed text-justify">
                                وقتی تری‌سکلین‌ها در سطح داخلی غشا به هم متصل می‌شوند، یک شبکه شش‌ضلعی و پنج‌ضلعی (شبیه توپ فوتبال یا گنبد ژئودزیک) می‌سازند. این سبد هندسی با خم کردن غشا، باعث جوانه زدن و تشکیل یک <strong>وزیکول پوشش‌دار</strong> می‌شود<span class="hidden"></span>.
                            </p>
                        </div>
                    </div>
                    
                    <div class="bg-purple-50 p-5 rounded-2xl border border-purple-100 flex items-start gap-4">
                        <div class="text-3xl mt-1">🔗</div>
                        <div>
                            <h5 class="text-purple-900 font-bold mb-2">نقش پروتئین‌های آداپتور (Adaptin)</h5>
                            <p class="text-sm text-purple-800 leading-relaxed text-justify">
                                خودِ کلاترین مستقیماً به گیرنده‌ها یا غشا نمی‌چسبد! پروتئین‌های واسطی به نام <strong>آداپتین (Adaptin)</strong> بین گیرنده‌های غشایی و سبد کلاترین قرار می‌گیرند تا پل ارتباطی ایجاد کنند و مواد مناسب را انتخاب نمایند<span class="hidden"></span>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- سرنوشت LDL و کلسترول -->
            <div class="bg-slate-800 text-slate-200 p-8 rounded-3xl shadow-lg relative overflow-hidden mt-8">
                <div class="absolute -left-20 -bottom-20 w-64 h-64 bg-fuchsia-500/20 rounded-full blur-3xl"></div>
                <h4 class="text-xl font-black text-fuchsia-400 mb-4 flex items-center gap-3">
                    <span class="text-3xl">🧈</span> شکار کلسترول: داستان وزیکول‌های LDL
                </h4>
                <p class="text-slate-300 leading-loose text-justify mb-6">
                    بهترین مثال برای این نوع اندوسیتوز، ورود <strong>LDL (لیپوپروتئین کم‌چگالی یا کلسترول بد)</strong> به داخل سلول است:
                </p>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div class="bg-slate-700/50 p-5 rounded-2xl border border-slate-600">
                        <h5 class="text-fuchsia-300 font-bold mb-2">۱. اتصال و جذب</h5>
                        <p class="text-sm text-slate-400">ذرات LDL به گیرنده‌های اختصاصی روی غشا می‌چسبند. کلاترین دور آن‌ها جمع شده و وزیکول می‌سازد<span class="hidden"></span>.</p>
                    </div>
                    <div class="bg-slate-700/50 p-5 rounded-2xl border border-slate-600">
                        <h5 class="text-fuchsia-300 font-bold mb-2">۲. جداسازی و اسیدی شدن</h5>
                        <p class="text-sm text-slate-400">پوشش کلاترین جدا می‌شود (برهنه شدن وزیکول). وزیکول با اندوزوم اولیه ادغام می‌شود. محیط اسیدی اندوزوم باعث جدا شدن LDL از گیرنده‌اش می‌شود<span class="hidden"></span>.</p>
                    </div>
                    <div class="bg-slate-700/50 p-5 rounded-2xl border border-slate-600">
                        <h5 class="text-fuchsia-300 font-bold mb-2">۳. بازیافت و هضم</h5>
                        <p class="text-sm text-slate-400">گیرنده‌ها به غشا برمی‌گردند (بازیافت)، و LDL به لیزوزوم می‌رود تا کلسترول آزاد شده و توسط سلول استفاده شود<span class="hidden"></span>.</p>
                    </div>
                </div>

                <div class="bg-fuchsia-900/30 p-5 rounded-2xl border border-fuchsia-500/30">
                    <h5 class="text-fuchsia-200 font-bold mb-2">سایر پوشش‌های وزیکولی</h5>
                    <p class="text-sm text-fuchsia-100 leading-relaxed text-justify">
                        علاوه بر کلاترین (که از شبکه گلژی به اندوزوم/لیزوزوم و غشا می‌رود)، دو پوشش معروف دیگر داریم: <strong>COPII</strong> (مسیر رو به جلو از شبکه آندوپلاسمی به گلژی) و <strong>COPI</strong> (مسیر برگشت از گلژی به شبکه آندوپلاسمی)<span class="hidden"></span>.
                    </p>
                </div>
            </div>

        </div>
    `,
    quiz: [
        {
            question: "اندوسیتوز با واسطه گیرنده (Receptor-mediated endocytosis) چه مزیتی نسبت به پینوسیتوز عمومی دارد؟",
            options: [
                "بسیار سریع‌تر است و انرژی مصرف نمی‌کند.",
                "به سلول اجازه می‌دهد تا مولکول‌های خاص و کمیاب را به صورت «کاملاً انتخابی و با غلظت بالا» از محیط شکار کند.",
                "فقط در سلول‌های باکتریایی انجام می‌شود.",
                "بدون نیاز به تشکیل وزیکول انجام می‌شود."
            ],
            answer: 1,
            explanation: "اندوسیتوز با واسطه گیرنده یک مکانیسم کارآمد است که به سلول اجازه می‌دهد مولکول‌های خاص مورد نیاز خود (مانند کلسترول LDL) را به صورت انتخابی و با راندمان بالا از مایع خارج سلولی جذب کند<span class=\"hidden\"></span>."
        },
        {
            question: "پروتئین «کلاترین» (Clathrin) در ساختار وزیکول‌های اندوسیتوزی چه واحد پایه‌ای را تشکیل می‌دهد؟",
            options: [
                "مارپیچ‌های آلفای غشایی",
                "ساختارهای سه‌شاخه به نام «تری‌سکلین» (Triskelion) که یک قفسه هندسی می‌سازند.",
                "بشکه بتای استوانه‌ای",
                "رشته‌های ضخیم اکتین و میوزین"
            ],
            answer: 1,
            explanation: "پروتئین کلاترین از واحدهای سه‌شاخه‌ای به نام «تری‌سکلین» (شامل ۳ زنجیره سنگین و ۳ زنجیره سبک) تشکیل شده است که با کنار هم قرار گرفتن، یک شبکه مشبک هندسی (سبد) می‌سازند<span class=\"hidden\"></span>."
        },
        {
            question: "وظیفه اصلی پروتئین‌های «آداپتین» (Adaptins) در وزیکول‌های پوشش‌دار کلاترین چیست؟",
            options: [
                "تجزیه کردن کامل کلاترین پس از ورود به سلول",
                "اتصال سبد کلاترین به گیرنده‌های غشایی و انتخاب مولکول‌های هدف برای بسته‌بندی",
                "پمپاژ پروتون به داخل وزیکول برای اسیدی کردن آن",
                "ایجاد پیوندهای دی‌سولفیدی بین لیپیدهای غشا"
            ],
            answer: 1,
            explanation: "کلاترین‌ها مستقیم به گیرنده‌ها نمی‌چسبند. پروتئین‌های آداپتین (Adaptin) به عنوان واسطه عمل کرده، هم به دمِ سیتوزولی گیرنده‌های غشایی متصل می‌شوند و هم سبد کلاترین را در پشت خود مونتاژ می‌کنند<span class=\"hidden\"></span>."
        },
        {
            question: "هنگامی که وزیکولِ پوشش‌دارِ کلاترین از غشای پلاسمایی جدا می‌شود، بلافاصله چه اتفاقی برای پوشش کلاترین آن می‌افتد؟",
            options: [
                "برای همیشه در داخل سلول باقی می‌ماند.",
                "پوشش کلاترین به سرعت از وزیکول جدا (برهنه) می‌شود تا وزیکول بتواند با اندوزوم ادغام گردد.",
                "به هسته سلول منتقل شده و دی‌ان‌ای را می‌سازد.",
                "تبدیل به پروتئین باند ۳ می‌شود."
            ],
            answer: 1,
            explanation: "بسیار زود پس از جوانه زدن و جدا شدن وزیکول از غشا، پروتئین‌های پوششی کلاترین از آن جدا می‌شوند (Uncoating) تا وزیکولِ برهنه بتواند آزادانه در سیتوزول حرکت کرده و به اندوزوم اولیه ملحق شود<span class=\"hidden\"></span>."
        },
        {
            question: "ذرات LDL (کلسترول بد) پس از اتصال به گیرنده خود و ورود به سلول از طریق اندوسیتوز، در داخل سلول به کجا هدایت می‌شوند؟",
            options: [
                "به درون میتوکندری برای تولید ATP",
                "به لیزوزوم‌ها برای تجزیه و آزادسازی کلسترول آزاد",
                "مستقیماً به خارج سلول از طریق اگزوسیتوز برگردانده می‌شوند.",
                "به شبکه آندوپلاسمی صاف برای سنتز اسید چرب"
            ],
            answer: 1,
            explanation: "وزیکول حاوی LDL پس از ادغام با اندوزوم و جدا شدن گیرنده، به لیزوزوم منتقل می‌شود. در لیزوزوم، پروتئین‌ها و لیپیدهای LDL هضم شده و کلسترول آزاد شده برای استفاده سلول آزاد می‌گردد<span class=\"hidden\"></span>."
        },
        {
            question: "سرنوشت «گیرنده‌های LDL» پس از ورود به اندوزوم اولیه (با محیط اسیدی) چیست؟",
            options: [
                "همراه با LDL در لیزوزوم نابود می‌شوند.",
                "به غشای پلاسمایی بازگردانده (بازیافت) می‌شوند تا دوباره استفاده شوند.",
                "تبدیل به کانال‌های یونی سدیم می‌شوند.",
                "وارد هسته شده و بیان ژن را کنترل می‌کنند."
            ],
            answer: 1,
            explanation: "محیط اسیدی اندوزوم اولیه باعث تغییر شکل گیرنده و جدا شدن LDL از آن می‌شود. گیرنده‌های خالی از طریق وزیکول‌های بازیافتی مجدداً به غشای پلاسمایی برگردانده می‌شوند تا بارها و بارها استفاده شوند<span class=\"hidden\"></span>."
        },
        {
            question: "پوشش وزیکولی «COPII» مسئول کدام مسیر ترابری در سلول است؟",
            options: [
                "مسیر رو به جلو (Anterograde) از شبکه آندوپلاسمی (ER) به دستگاه گلژی",
                "مسیر برگشت (Retrograde) از گلژی به ER",
                "مسیر انحصاری از غشای پلاسما به لیزوزوم",
                "انتقال مواد از میتوکندری به هسته"
            ],
            answer: 0,
            explanation: "وزیکول‌های پوشش‌دار COPII پروتئین‌ها را از شبکه آندوپلاسمی (ER) جمع‌آوری کرده و در مسیر رو به جلو (Anterograde) به سمت دستگاه گلژی منتقل می‌کنند<span class=\"hidden\"></span>."
        },
        {
            question: "مسیر ترابریِ وزیکول‌های پوشش‌دار «COPI» به چه سمتی است؟",
            options: [
                "از غشای پلاسما به داخل سلول",
                "از شبکه آندوپلاسمی به گلژی",
                "مسیر بازگشت (Retrograde) از دستگاه گلژی به شبکه آندوپلاسمی (ER)",
                "از میتوکندری به غشای پلاسما"
            ],
            answer: 2,
            explanation: "وزیکول‌های پوشش‌دار COPI مسئول مسیر بازگشت (Retrograde) هستند و پروتئین‌هایی که اشتباهی از ER به گلژی رفته‌اند را به شبکه آندوپلاسمی برمی‌گردانند<span class=\"hidden\"></span>."
        },
        {
            question: "کدام پروتئین طنابی‌شکل و حلقوی، در انتهای پایه جوانه‌ی وزیکول کلاترین قرار دارد و با انقباض خود باعث جدا شدن (Pinching off) وزیکول از غشا می‌شود؟",
            options: [
                "اسپکترین",
                "دینامین (Dynamin)",
                "تیوسانات",
                "تولومر"
            ],
            answer: 1,
            explanation: "دینامین (Dynamin) یک پروتئین گوت‌پاز (GTPase) است که به صورت حلقه‌ای دور گردنِ جوانه وزیکول در حال تشکیل می‌چرخد و با هیدرولیز GTP منقبض شده و وزیکول را از غشای اصلی جدا می‌کند<span class=\"hidden\"></span>."
        },
        {
            question: "کمبود یا نقص ژنتیکی در گیرنده‌های LDL سطح سلول چه بیماری خطرناکی را در انسان ایجاد می‌کند؟",
            options: [
                "بیماری اسکوروی",
                "هیپرکلسترولمی خانوادگی (Familial Hypercholesterolemia) و بیماری‌های قلبی زودرس",
                "سندرم مارفان",
                "کم‌خونی همولیتیک"
            ],
            answer: 1,
            explanation: "اگر گیرنده‌های LDL نقص داشته باشند یا کم باشند، سلول نمی‌تواند کلسترول خون را جذب کند. در نتیجه کلسترول در خون انباشته شده و منجر به بیماری خطرناک هیپرکلسترولمی خانوادگی و سکته‌های قلبی زودرس می‌شود<span class=\"hidden\"></span>."
        }
    ]
},
{
id: "module_22",
    title: "ماژول بیست و دوم: معده‌ی سلول و زیپ‌های همجوشی",
    subtitle: "بلوغ اندوزوم، لیزوزوم‌ها، پروتئین‌های Rab و کمپلکس SNARE",
    shortTitle: "۲۲. لیزوزوم و SNARE",
    content: `
        <div class="space-y-12">
            
            <!-- بنر بلاگری -->
            <div class="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-amber-600 to-orange-900 p-10 text-white shadow-2xl">
                <div class="absolute -left-10 -bottom-10 opacity-20 text-[12rem] leading-none">📦</div>
                <div class="relative z-10">
                    <span class="inline-block py-1 px-3 rounded-full bg-orange-900/40 border border-orange-200/50 text-amber-100 text-sm font-bold mb-4 backdrop-blur-sm">ترافیک و گوارش سلولی</span>
                    <h3 class="text-3xl font-black mb-4 leading-tight">وزیکول‌ها چگونه آدرس را پیدا می‌کنند؟</h3>
                    <p class="text-lg text-amber-50 leading-relaxed text-justify opacity-95 max-w-3xl">
                        سلول پر از هزاران وزیکول سرگردان است. اگر یک وزیکولِ حاوی آنزیم‌های هضم‌کننده، اشتباهی به جای لیزوزوم به هسته برخورد کند، فاجعه رخ می‌دهد! سلول برای جلوگیری از این تصادفات، از یک سیستم پستی فوق‌پیشرفته (پروتئین‌های Rab) و زیپ‌های مکانیکی (SNARE) استفاده می‌کند. از طرفی، اندامک‌هایی مثل <strong>لیزوزوم</strong> به عنوان معده‌ی اسیدیِ سلول، منتظر دریافت این بسته‌ها برای هضم آن‌ها هستند<span class="hidden"></span>.
                    </p>
                </div>
            </div>

            <!-- اندوزوم و لیزوزوم -->
            <div class="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
                <div class="absolute top-0 right-0 w-2 h-full bg-orange-500"></div>
                <h4 class="text-xl font-black text-slate-800 mb-6 flex items-center gap-3">
                    <span class="text-2xl">🗑️</span> ایستگاه مرتب‌سازی و معده‌ی سلول
                </h4>
                <p class="text-slate-600 leading-loose mb-6 text-justify">
                    موادی که از طریق اندوسیتوز (مثل شکار LDL) وارد سلول می‌شوند، مستقیماً هضم نمی‌شوند؛ بلکه یک مسیر بلوغ را طی می‌کنند:
                </p>
                
                <div class="space-y-4">
                    <div class="bg-amber-50 p-5 rounded-2xl border border-amber-100">
                        <strong class="text-amber-800 text-lg block mb-2">۱. اندوزوم اولیه (ایستگاه بازیافت)</strong>
                        <p class="text-sm text-amber-700 leading-relaxed text-justify">
                            اولین توقفگاه! محیط آن کمی اسیدی (pH حدود ۶) است. در این ایستگاه، محموله از گیرنده‌اش جدا می‌شود. گیرنده‌ها در قالب وزیکول‌های جدید به غشا <strong>بازیافت</strong> می‌شوند تا دوباره کار کنند<span class="hidden"></span>.
                        </p>
                    </div>
                    
                    <div class="bg-rose-50 p-5 rounded-2xl border border-rose-100">
                        <strong class="text-rose-800 text-lg block mb-2">۲. لیزوزوم (معده اسیدی)</strong>
                        <p class="text-sm text-rose-700 leading-relaxed text-justify">
                            اندوزوم‌های اولیه کم‌کم بالغ شده و به <strong>لیزوزوم</strong> تبدیل می‌شوند. لیزوزوم پر از آنزیم‌های تجزیه‌کننده (هیدرولازهای اسیدی) است. پمپ‌های پروتونی (V-type) در غشای آن، محیط داخل را به شدت اسیدی (pH حدود ۵) می‌کنند که برای فعالیت آنزیم‌ها ایده‌آل است<span class="hidden"></span>.
                        </p>
                        <div class="mt-3 bg-red-100 text-red-800 p-3 rounded-xl text-xs font-bold">
                            سوال: چرا لیزوزوم خودش را هضم نمی‌کند؟ چون پروتئین‌های غشای داخلی آن به شدت <strong>گلیکوزیله</strong> (پوشیده از قند) هستند که مثل یک سپر محافظ عمل می‌کند<span class="hidden"></span>.
                        </div>
                    </div>
                </div>
            </div>

            <!-- سیستم آدرس‌دهی و SNARE -->
            <div class="bg-slate-800 text-slate-200 p-8 rounded-3xl shadow-lg relative overflow-hidden mt-8">
                <div class="absolute -left-20 -bottom-20 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl"></div>
                <h4 class="text-xl font-black text-cyan-400 mb-6 flex items-center gap-3">
                    <span class="text-3xl">🎯</span> سیستم پستی سلول: Rab و SNARE
                </h4>
                <p class="text-slate-300 leading-loose text-justify mb-6">
                    برای اینکه یک وزیکول با غشای هدف (مثلاً غشای پلاسما برای اگزوسیتوز) <strong>همجوشی (Fusion)</strong> کند، دو مرحله حیاتی وجود دارد:
                </p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="bg-slate-700/50 p-6 rounded-2xl border border-slate-600">
                        <h5 class="text-cyan-300 font-black text-lg mb-3">مرحله ۱: لنگر انداختن (Tethering)</h5>
                        <p class="text-sm text-slate-400 leading-relaxed text-justify">
                            پروتئین‌هایی به نام <strong>Rab</strong> (که نوعی GTPase هستند) روی وزیکول قرار دارند. آن‌ها مثل «کد پستی» عمل می‌کنند. پروتئین‌های مهارکننده (Tethering proteins) روی غشای هدف، این Rab اختصاصی را شناسایی کرده و وزیکول را به دام می‌اندازند<span class="hidden"></span>.
                        </p>
                    </div>

                    <div class="bg-slate-700/50 p-6 rounded-2xl border border-slate-600">
                        <h5 class="text-cyan-300 font-black text-lg mb-3">مرحله ۲: همجوشی با زیپ‌های SNARE</h5>
                        <p class="text-sm text-slate-400 leading-relaxed text-justify">
                            حالا که وزیکول نزدیک شد، دو پروتئین وارد عمل می‌شوند: <strong>v-SNARE</strong> (روی وزیکول) و <strong>t-SNARE</strong> (روی غشای هدف). این دو مارپیچ پروتئینی مثل یک طناب یا زیپ دور هم می‌پیچند. این پیچش آن‌قدر قدرتمند است که آب بین دو غشا را خارج کرده و دو لایه چربی را به هم می‌دوزد تا محتویات تخلیه شود<span class="hidden"></span>!
                        </p>
                    </div>
                </div>
                
                <div class="mt-6 p-4 bg-purple-900/40 border border-purple-500/50 rounded-xl flex items-start gap-4">
                    <span class="text-2xl mt-1">💉</span>
                    <p class="text-sm text-purple-200 leading-relaxed text-justify">
                        <strong>نکته بالینی جذاب (بوتاکس):</strong> سم بوتولینوم (Botox) که برای رفع چین و چروک تزریق می‌شود، در واقع یک آنزیم است که <strong>پروتئین‌های SNARE را در اعصاب قیچی می‌کند!</strong> در نتیجه، وزیکول‌های حاوی پیام‌رسان عصبی نمی‌توانند همجوشی کنند، عضله فلج می‌شود و چروک‌ها باز می‌شوند<span class="hidden"></span>.
                    </p>
                </div>
            </div>

        </div>
    `,
    quiz: [
        {
            question: "وظیفه اصلی «اندوزوم اولیه» (Early Endosome) پس از دریافت وزیکول‌های اندوسیتوزی چیست؟",
            options: [
                "تولید ATP از طریق تخریب کلسترول.",
                "عمل به عنوان «ایستگاه مرتب‌سازی»؛ محیط کمی اسیدی آن باعث جداسازی لیگاند از گیرنده شده و گیرنده‌ها را برای بازیافت به غشا می‌فرستد.",
                "تجزیه کامل پروتئین‌ها به اسیدهای آمینه.",
                "ترشح هورمون‌ها به خارج از سلول."
            ],
            answer: 1,
            explanation: "اندوزوم‌های اولیه به عنوان ایستگاه اصلی مرتب‌سازی (Sorting) عمل می‌کنند. محیط اسیدی ضعیف آن‌ها (pH~6) باعث آزاد شدن محموله از گیرنده می‌شود و گیرنده‌های خالی از طریق وزیکول‌ها بازیافت می‌شوند<span class=\"hidden\"></span>."
        },
        {
            question: "pH داخل لیزوزوم‌ها چقدر است و چرا این میزان از اسیدیته برای سلول حیاتی است؟",
            options: [
                "pH حدود ۷.۲ است تا با سیتوزول هم‌دما باشد.",
                "pH حدود ۵.۰ است؛ زیرا آنزیم‌های تجزیه‌کننده لیزوزوم (هیدرولازهای اسیدی) فقط در این محیط اسیدی فعال هستند.",
                "pH حدود ۱۰.۰ است تا چربی‌ها را صابونی کند.",
                "pH لیزوزوم مدام تغییر می‌کند و ثابت نیست."
            ],
            answer: 1,
            explanation: "لیزوزوم‌ها دارای pH اسیدی (حدود ۵.۰) هستند. این اسیدیته هم برای دناتوره کردن مولکول‌های ورودی لازم است و هم به این دلیل که هیدرولازهای اسیدیِ داخل آن، منحصراً در pH پایین فعالند (یک مکانیسم ایمنی تا اگر لیزوزوم پاره شد، آنزیم‌ها در pH خنثی سیتوزول از کار بیفتند)<span class=\"hidden\"></span>."
        },
        {
            question: "لیزوزوم‌ها چگونه از هضم شدنِ غشای خودشان توسط آنزیم‌های قدرتمندِ داخلی جلوگیری می‌کنند؟",
            options: [
                "غشای آن‌ها از جنس تفلون بیولوژیک است.",
                "پمپ‌های پروتونی به سرعت آنزیم‌ها را به بیرون پرت می‌کنند.",
                "پروتئین‌های غشای داخلی لیزوزوم به شدت گلیکوزیله (پوشیده از قندهای پیچیده) هستند که به عنوان سپر عمل می‌کند.",
                "آنزیم‌های لیزوزوم فقط DNA را هضم می‌کنند نه لیپید و پروتئین."
            ],
            answer: 2,
            explanation: "برای جلوگیری از خودهضمی، پروتئین‌های درون‌غشایی لیزوزوم (که رو به لومن هستند) به شدت گلیکوزیله شده‌اند. این پوشش ضخیم قندی از دسترسی پروتئازها به اسکلت پروتئینیِ غشا جلوگیری می‌کند<span class=\"hidden\"></span>."
        },
        {
            question: "پمپی که مسئول حفظ محیط اسیدی درون لیزوزوم و اندوزوم است، به کدام خانواده از پمپ‌های ATPase تعلق دارد؟",
            options: [
                "پمپ‌های P-type",
                "پمپ‌های V-type",
                "پمپ‌های F-type (ATP Synthase)",
                "ناقلین ABC"
            ],
            answer: 1,
            explanation: "پمپ‌های پروتونی خانواده V-type (Vacuolar-type) در غشای اندامک‌هایی مثل لیزوزوم و اندوزوم قرار دارند و با مصرف ATP، پروتون‌ها را به داخل پمپ کرده و محیط را اسیدی نگه می‌دارند<span class=\"hidden\"></span>."
        },
        {
            question: "در فرآیند اتصال وزیکول به غشای هدف، کدام پروتئین‌ها نقش «کد پستی یا آدرس» را ایفا کرده و باعث لنگر انداختن (Tethering) وزیکول می‌شوند؟",
            options: [
                "پروتئین‌های کلاترین",
                "پروتئین‌های کیناز",
                "پروتئین‌های Rab (نوعی GTPase)",
                "پمپ‌های سدیم-پتاسیم"
            ],
            answer: 2,
            explanation: "پروتئین‌های Rab توزیع بسیار اختصاصی دارند و مثل یک کد پستی روی وزیکول عمل می‌کنند. پروتئین‌های لنگرانداز (Tethering) در غشای هدف، Rab مخصوص به خود را شناسایی کرده و وزیکول را به دام می‌اندازند<span class=\"hidden\"></span>."
        },
        {
            question: "خانواده پروتئین‌های SNARE چه وظیفه حیاتی‌ای در ترافیک وزیکولی بر عهده دارند؟",
            options: [
                "اسیدی کردن داخل وزیکول",
                "پیچیدن دور یکدیگر و ایجاد نیروی مکانیکی لازم برای «همجوشی» (Fusion) غشای وزیکول با غشای هدف",
                "تولید ATP از طریق چرخش",
                "جدا کردن وزیکول از غشای مبدأ"
            ],
            answer: 1,
            explanation: "پس از لنگر انداختن وزیکول، مارپیچ‌های v-SNARE روی وزیکول و t-SNARE روی غشای هدف مانند یک زیپ به دور هم می‌پیچند. این پیچش انرژی و نیروی مکانیکیِ لازم برای بیرون راندن آب و ادغام دو لایه چربی را فراهم می‌کند<span class=\"hidden\"></span>."
        },
        {
            question: "مکانیسم فلج‌کننده «سم بوتولینوم» (معروف به بوتاکس) چگونه باعث جلوگیری از ترشح انتقال‌دهنده‌های عصبی و فلج عضلات می‌شود؟",
            options: [
                "گیرنده‌های استیل‌کولین را در عضله از بین می‌برد.",
                "به عنوان یک پروتئاز عمل کرده و پروتئین‌های SNARE را برش می‌دهد، لذا وزیکول‌های عصبی نمی‌توانند با غشا همجوشی کنند.",
                "پمپ‌های سدیم-پتاسیم را به طور کامل خاموش می‌کند.",
                "کانال‌های کلسیمی را همیشه باز نگه می‌دارد."
            ],
            answer: 1,
            explanation: "نوروتوکسین‌هایی مثل سم بوتولینوم (بوتاکس) و سم کزاز، آنزیم‌های پروتئازی هستند که پروتئین‌های اختصاصی SNARE را در پایانه‌های عصبی قطع می‌کنند. بدون SNARE، همجوشی وزیکول و اگزوسیتوزِ پیام‌رسان‌های عصبی متوقف شده و فلج رخ می‌دهد<span class=\"hidden\"></span>."
        },
        {
            question: "فرآیندی که طی آن وزیکول‌های ترشحی با غشای پلاسمایی همجوشی کرده و محتویات خود را به «خارج از سلول» می‌ریزند، چه نام دارد؟",
            options: [
                "اندوسیتوز",
                "پینوسیتوز",
                "اگزوسیتوز (Exocytosis)",
                "فاگوسیتوز"
            ],
            answer: 2,
            explanation: "اگزوسیتوز (برون‌بری) مسیر ترشحی سلول است که در آن وزیکول‌های پر از مواد (مانند هورمون‌ها، آنزیم‌ها یا انتقال‌دهنده‌های عصبی) با غشای پلاسما ادغام شده و محتویاتشان به فضای خارج سلول تخلیه می‌شود<span class=\"hidden\"></span>."
        },
        {
            question: "مارپیچ‌های v-SNARE و t-SNARE پس از انجام همجوشی و ادغام کامل در یک غشا، چگونه برای استفاده مجدد از هم جدا می‌شوند؟",
            options: [
                "آن‌ها هرگز جدا نمی‌شوند و بلافاصله توسط لیزوزوم تجزیه می‌گردند.",
                "پروتئینی به نام NSF با استفاده از هیدرولیز ATP این مارپیچ‌های در هم تنیده را باز می‌کند.",
                "با تغییر pH سیتوزول خودبه‌خود از هم باز می‌شوند.",
                "آنزیم فلیپاز آن‌ها را به دو لایه مختلف غشا منتقل می‌کند."
            ],
            answer: 1,
            explanation: "پس از همجوشی، کمپلکس SNARE در غشا به شدت در هم تنیده است. پروتئینی به نام NSF (همراه با پروتئین‌های آداپتور) به این کمپلکس متصل شده و با صرف انرژی (هیدرولیز ATP)، آن‌ها را از هم باز می‌کند تا دوباره استفاده شوند<span class=\"hidden\"></span>."
        },
        {
            question: "در مسیر ترشحیِ سلول (اگزوسیتوز)، دو نوع مسیر وجود دارد: «مسیر ساختاری (Constitutive)» و «مسیر تنظیمی (Regulated)». تفاوت اصلی آن‌ها چیست؟",
            options: [
                "مسیر ساختاری نیاز به پیام خارجی دارد، اما تنظیمی پیوسته است.",
                "مسیر ساختاری به طور پیوسته مواد و غشای جدید ترشح می‌کند، اما مسیر تنظیمی مواد را ذخیره کرده و فقط در پاسخ به یک سیگنال خاص ترشح می‌کند.",
                "مسیر ساختاری فقط در سلول‌های عصبی یافت می‌شود.",
                "هر دو مسیر فقط برای دفع زباله‌های سلولی استفاده می‌شوند."
            ],
            answer: 1,
            explanation: "مسیر ساختاری (Constitutive) در همه سلول‌ها وجود دارد و به طور پیوسته لیپید و پروتئین‌های غشایی جدید به سطح می‌فرستد. اما مسیر تنظیمی در سلول‌های تخصصی (مثل سلول‌های ترشح‌کننده هورمون یا نورون‌ها) رخ می‌دهد و وزیکول‌ها منتظر می‌مانند تا سیگنال ترشح دریافت کنند<span class=\"hidden\"></span>."
        }
    ]
},
{
id: "module_23",
    title: "ماژول بیست و سوم: نیروگاه اتمی سلول!",
    subtitle: "معماری میتوکندری، تنفس سلولی و داستان تکامل",
    shortTitle: "۲۳. ساختار میتوکندری",
    content: `
        <div class="space-y-12">
            
            <!-- بنر بلاگری -->
            <div class="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-red-800 to-orange-950 p-10 text-white shadow-2xl">
                <div class="absolute -right-10 -bottom-10 opacity-20 text-[12rem] leading-none">⚡</div>
                <div class="relative z-10">
                    <span class="inline-block py-1 px-3 rounded-full bg-orange-500/30 border border-orange-400/50 text-orange-100 text-sm font-bold mb-4 backdrop-blur-sm">تولید انرژی</span>
                    <h3 class="text-3xl font-black mb-4 leading-tight">میتوکندری: باکتریِ مفیدی که در ما زندگی می‌کند!</h3>
                    <p class="text-lg text-orange-50 leading-relaxed text-justify opacity-95 max-w-3xl">
                        برای اینکه زنده بمانیم، سلول‌های ما ثانیه به ثانیه میلیون‌ها مولکول ATP (باتری انرژی) می‌سوزانند. اما این باتری‌ها کجا شارژ می‌شوند؟ در اندامکی لوبیاشکل به نام <strong>میتوکندری</strong>! نکته شگفت‌انگیز این است که میتوکندری‌ها میلیاردها سال پیش باکتری‌های مستقلی بودند که توسط یک سلول بزرگتر بلعیده شدند و حالا به عنوان نیروگاه شخصی ما کار می‌کنند (نظریه درون‌همزیستی)<span class="hidden"></span>.
                    </p>
                </div>
            </div>

            <!-- معماری دوگانه میتوکندری -->
            <div class="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
                <div class="absolute top-0 right-0 w-2 h-full bg-red-500"></div>
                <h4 class="text-xl font-black text-slate-800 mb-6 flex items-center gap-3">
                    <span class="text-2xl">🏛️</span> معماری عجیب میتوکندری
                </h4>
                <p class="text-slate-600 leading-loose mb-6 text-justify">
                    میتوکندری بر خلاف اکثر اندامک‌ها، <strong>دو غشا</strong> دارد که باعث ایجاد دو فضای کاملاً مجزا می‌شود:
                </p>
                
                <div class="space-y-6">
                    <!-- غشای خارجی -->
                    <div class="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                        <h5 class="text-red-700 font-bold text-lg mb-2 flex items-center gap-2">۱. غشای خارجی (سوراخ‌دار و نفوذپذیر)</h5>
                        <p class="text-sm text-slate-600 leading-relaxed text-justify">
                            این غشا پر از پروتئین‌های لوله‌ای شکل به نام <strong>پورین (Porin)</strong> است. پورین‌ها کانال‌های بزرگی می‌سازند که باعث می‌شود غشای خارجی مانند یک آبکش عمل کند و به تمام مولکول‌های کوچک (تا ۵۰۰۰ دالتون) اجازه عبور آزادانه بدهد<span class="hidden"></span>.
                        </p>
                    </div>

                    <!-- غشای داخلی -->
                    <div class="bg-orange-50 p-5 rounded-2xl border border-orange-200">
                        <h5 class="text-orange-800 font-bold text-lg mb-2 flex items-center gap-2">۲. غشای داخلی (سخت‌گیر و چین‌خورده)</h5>
                        <p class="text-sm text-orange-700 leading-relaxed text-justify">
                            برخلاف غشای خارجی، این غشا به شدت <strong>نفوذناپذیر</strong> است. این غشا دارای یک لیپید خاص به نام <strong>کاردیولیپین</strong> است که آن را عایق‌بندی می‌کند. غشای داخلی به سمت داخل چین‌خوردگی‌های فراوانی به نام <strong>کریستا (Cristae)</strong> می‌سازد تا مساحت سطحش برای تولید ATP هزاران برابر شود<span class="hidden"></span>.
                        </p>
                    </div>
                    
                    <!-- ماتریکس -->
                    <div class="bg-amber-50 p-5 rounded-2xl border border-amber-200">
                        <h5 class="text-amber-800 font-bold text-lg mb-2 flex items-center gap-2">۳. ماتریکس (فضای مرکزی)</h5>
                        <p class="text-sm text-amber-700 leading-relaxed text-justify">
                            فضای داخلی میتوکندری با ماده‌ای ژله‌ای به نام <strong>ماتریکس</strong> پر شده است. این فضا محل قرارگیری آنزیم‌های چرخه کربس، ریبوزوم‌های اختصاصی و مهم‌تر از همه، <strong>DNA حلقوی میتوکندری (mtDNA)</strong> است<span class="hidden"></span>.
                        </p>
                    </div>
                </div>
            </div>

            <!-- مسیر تولید انرژی (خلاصه) -->
            <div class="bg-slate-800 text-slate-200 p-8 rounded-3xl shadow-lg relative overflow-hidden mt-8">
                <div class="absolute -left-20 -bottom-20 w-64 h-64 bg-yellow-500/20 rounded-full blur-3xl"></div>
                <h4 class="text-xl font-black text-yellow-400 mb-6 flex items-center gap-3">
                    <span class="text-3xl">🏭</span> خط تولید انرژی: از قند تا ATP
                </h4>
                <p class="text-slate-300 leading-loose text-justify mb-6">
                    سلول برای استخراج انرژی از قند (گلوکز) سه مرحله اصلی را طی می‌کند:
                </p>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div class="bg-slate-700/50 p-6 rounded-2xl border border-slate-600 text-center relative">
                        <div class="absolute -top-4 right-1/2 transform translate-x-1/2 bg-yellow-400 text-slate-900 font-bold px-3 py-1 rounded-full text-xs">مرحله ۱ (خارج از میتوکندری)</div>
                        <h5 class="text-yellow-300 font-black text-lg mb-3 mt-4">گلیکولیز</h5>
                        <p class="text-sm text-slate-400 leading-relaxed">در <strong>سیتوزول (مایع سلول)</strong> رخ می‌دهد. قند به دو مولکول پیرووات شکسته می‌شود. انرژی کمی تولید می‌شود اما برای شروع کار حیاتی است<span class="hidden"></span>.</p>
                    </div>

                    <div class="bg-slate-700/50 p-6 rounded-2xl border border-slate-600 text-center relative">
                        <div class="absolute -top-4 right-1/2 transform translate-x-1/2 bg-orange-400 text-slate-900 font-bold px-3 py-1 rounded-full text-xs">مرحله ۲ (درون ماتریکس)</div>
                        <h5 class="text-orange-300 font-black text-lg mb-3 mt-4">چرخه کربس</h5>
                        <p class="text-sm text-slate-400 leading-relaxed">پیرووات وارد <strong>ماتریکس میتوکندری</strong> شده و در چرخه کربس به طور کامل می‌سوزد. CO2 آزاد شده و الکترون‌های پرانرژی (NADH) تولید می‌شوند<span class="hidden"></span>.</p>
                    </div>

                    <div class="bg-slate-700/50 p-6 rounded-2xl border border-slate-600 text-center relative">
                        <div class="absolute -top-4 right-1/2 transform translate-x-1/2 bg-red-400 text-white font-bold px-3 py-1 rounded-full text-xs">مرحله ۳ (روی غشای داخلی)</div>
                        <h5 class="text-red-300 font-black text-lg mb-3 mt-4">زنجیره انتقال الکترون</h5>
                        <p class="text-sm text-slate-400 leading-relaxed">الکترون‌ها روی <strong>غشای داخلی (کریستاها)</strong> دست‌به‌دست شده و انرژی عظیم آن‌ها برای ساخت بیشترین مقدار ATP و مصرف اکسیژن استفاده می‌شود<span class="hidden"></span>.</p>
                    </div>
                </div>
            </div>

        </div>
    `,
    quiz: [
        {
            question: "بر اساس نظریه «درون‌همزیستی» (Endosymbiosis)، منشأ تکاملی میتوکندری‌ها در سلول‌های یوکاریوتی چیست؟",
            options: [
                "آن‌ها از تاخوردگی‌های شبکه آندوپلاسمی به وجود آمده‌اند.",
                "میتوکندری‌ها در اصل باکتری‌های هوازی (پروکاریوت) بوده‌اند که توسط یک سلول یوکاریوتی اولیه بلعیده شده و همزیستی مسالمت‌آمیزی را آغاز کردند.",
                "آن‌ها از تجمع لیپید رفت‌ها در غشای پلاسمایی ایجاد شده‌اند.",
                "میتوکندری‌ها بخشی از هسته بوده‌اند که از آن جدا شده‌اند."
            ],
            answer: 1,
            explanation: "وجود DNA حلقویِ مستقل، ریبوزوم‌های مشابه باکتری‌ها و داشتن دو غشا، به شدت تأیید می‌کند که میتوکندری‌ها در گذشته‌های دور باکتری‌های مستقلی بوده‌اند که با سلول میزبان وارد همزیستی شده‌اند<span class=\"hidden\"></span>."
        },
        {
            question: "دلیل نفوذپذیری بسیار بالای «غشای خارجی» میتوکندری چیست؟",
            options: [
                "فقدان کامل لیپید در غشای خارجی.",
                "وجود پمپ‌های سدیم-پتاسیم با سرعت بالا.",
                "حضور پروتئین‌های کانالی بزرگی به نام «پورین» (Porin) که به مولکول‌های کوچک اجازه عبور آزادانه می‌دهند.",
                "تخریب مداوم آن توسط آنزیم‌های لیزوزومی."
            ],
            answer: 2,
            explanation: "غشای خارجی میتوکندری حاوی پروتئین‌های بشکه بتای بزرگی به نام پورین است. این کانال‌ها باعث می‌شوند غشای خارجی برای یون‌ها و مولکول‌های کوچک (تا وزن حدود ۵۰۰۰ دالتون) کاملاً نفوذپذیر باشد<span class=\"hidden\"></span>."
        },
        {
            question: "ویژگی‌های «غشای داخلی» میتوکندری که آن را از سایر غشاهای سلول متمایز می‌کند چیست؟",
            options: [
                "بسیار نفوذپذیر است و هیچ پروتئینی ندارد.",
                "به شدت نفوذناپذیر است، حاوی لیپید خاصی به نام «کاردیولیپین» بوده و برای افزایش مساحت به شکل «کریستا» چین خورده است.",
                "فقط از قند (کربوهیدرات) ساخته شده است.",
                "هیچ تفاوتی با غشای خارجی ندارد."
            ],
            answer: 1,
            explanation: "غشای داخلی به شدت نفوذناپذیر (عایق) است تا بتواند شیب پروتون را حفظ کند. حضور فسفولیپید مضاعف به نام کاردیولیپین به این عایق‌بندی کمک می‌کند. همچنین برای جا دادن پروتئین‌های زنجیره انتقال الکترون، چین‌خوردگی‌های زیادی (کریستا) دارد<span class=\"hidden\"></span>."
        },
        {
            question: "«ماتریکس» (Matrix) میتوکندری محل قرارگیری کدام یک از اجزای زیر است؟",
            options: [
                "گیرنده‌های هورمون انسولین",
                "اسکلت سلولی (میکروتوبول‌ها)",
                "آنزیم‌های چرخه کربس، DNA اختصاصی میتوکندری (mtDNA) و ریبوزوم‌ها",
                "آنزیم‌های گوارشی و اسیدی لیزوزوم"
            ],
            answer: 2,
            explanation: "ماتریکس، فضای داخلی میتوکندری است که شامل صدها آنزیم مختلف (از جمله آنزیم‌های چرخه کربس)، ریبوزوم‌های خاص میتوکندری، tRNAها و چندین نسخه از DNA حلقوی میتوکندری می‌باشد<span class=\"hidden\"></span>."
        },
        {
            question: "مرحله اول تنفس سلولی یعنی «گلیکولیز» (Glycolysis) دقیقاً در کدام بخش از سلول اتفاق می‌افتد؟",
            options: [
                "در ماتریکس میتوکندری",
                "روی غشای داخلی میتوکندری",
                "درون هسته سلول",
                "خارج از میتوکندری و در مایع سیتوزول"
            ],
            answer: 3,
            explanation: "شکستن اولیه قند گلوکز (گلیکولیز) در سیتوزول انجام می‌شود و به اکسیژن نیازی ندارد. محصول نهایی آن (پیرووات) سپس برای استخراج انرژی بیشتر وارد میتوکندری می‌شود<span class=\"hidden\"></span>."
        },
        {
            question: "کدام مرحله از تولید انرژی مستقیماً بر روی «غشای داخلی (کریستاها)» میتوکندری انجام می‌گیرد؟",
            options: [
                "گلیکولیز",
                "تولید اوره",
                "زنجیره انتقال الکترون (Electron Transport Chain) و تولید ATP",
                "رونویسی از DNA هسته"
            ],
            answer: 2,
            explanation: "پروتئین‌های زنجیره انتقال الکترون و آنزیم ATP ساز (ATP Synthase) به طور فیزیکی درون غشای داخلی میتوکندری (کریستاها) تعبیه شده‌اند و مرحله نهایی تولید انرژی را هدایت می‌کنند<span class=\"hidden\"></span>."
        },
        {
            question: "در «چرخه کربس» (اسید سیتریک) که در ماتریکس رخ می‌دهد، هدف اصلی چیست؟",
            options: [
                "تبدیل ATP به ADP",
                "تولید اسید لاکتیک برای عضلات",
                "اکسیداسیون کامل مشتقات پیرووات به CO2 و استخراج الکترون‌های پرانرژی (به شکل NADH و FADH2)",
                "تولید اکسیژن خالص"
            ],
            answer: 2,
            explanation: "چرخه کربس با اکسید کردن کامل قطعات دو کربنه (استیل کوآنزیم آ)، الکترون‌های پرانرژی را استخراج کرده و روی مولکول‌های حامل (NADH و FADH2) ذخیره می‌کند تا بعداً به زنجیره انتقال الکترون تحویل داده شوند<span class=\"hidden\"></span>."
        },
        {
            question: "«DNA میتوکندری» (mtDNA) در انسان، از چه کسی به ارث می‌رسد؟",
            options: [
                "نیمی از پدر و نیمی از مادر",
                "فقط از پدر (از طریق اسپرم)",
                "فقط از مادر (از طریق تخمک)",
                "توسط ویروس‌ها در دوران کودکی وارد بدن می‌شود"
            ],
            answer: 2,
            explanation: "در انسان و اکثر پستانداران، میتوکندری‌ها (و در نتیجه DNA آن‌ها) تقریباً به طور کامل از طریق تخمکِ مادر به ارث می‌رسند؛ زیرا اسپرم در هنگام لقاح میتوکندری‌های خود را به جنین منتقل نمی‌کند (یا تخریب می‌شوند)<span class=\"hidden\"></span>."
        },
        {
            question: "وظیفه لیپید «کاردیولیپین» (Cardiolipin) در غشای داخلی میتوکندری چیست؟",
            options: [
                "انتقال اکسیژن به سیتوزول.",
                "ایجاد منافذ بزرگ برای عبور آب.",
                "کاهش نفوذپذیری غشای داخلی به یون‌ها (به ویژه پروتون‌ها) تا میتوکندری بتواند شیب الکتروشیمیایی خود را حفظ کند.",
                "جذب سموم باکتریایی."
            ],
            answer: 2,
            explanation: "کاردیولیپین یک فسفولیپید منحصر‌به‌فرد با چهار زنجیره اسید چرب است که باعث می‌شود غشای داخلی میتوکندری به شدت در برابر عبور یون‌ها (مخصوصاً H+) نفوذناپذیر شود و مانند یک عایق عالی عمل کند<span class=\"hidden\"></span>."
        },
        {
            question: "اگر سلولی فاقد اکسیژن باشد، چه اتفاقی برای فرآیند تولید انرژی در میتوکندری می‌افتد؟",
            options: [
                "میتوکندری انرژی خود را از طریق جذب نور تأمین می‌کند.",
                "بدون حضور اکسیژن به عنوان گیرنده نهایی الکترون، زنجیره انتقال الکترون و چرخه کربس متوقف می‌شوند و سلول فقط به گلیکولیز (تخمیر) بی‌هوازی وابسته می‌شود.",
                "میتوکندری سرعت تولید ATP خود را دو برابر می‌کند.",
                "میتوکندری با استفاده از نیتروژن کار خود را ادامه می‌دهد."
            ],
            answer: 1,
            explanation: "اکسیژن گیرنده نهایی الکترون در انتهای زنجیره انتقال الکترون است. بدون آن، کل سیستم میتوکندریایی قفل می‌شود و سلول مجبور است فقط از طریق گلیکولیز در سیتوزول (که بازده انرژی بسیار پایینی دارد) انرژی کسب کند<span class=\"hidden\"></span>."
        }
    ]
},
{
id: "module_24",
    title: "ماژول بیست و چهارم: توربین‌های زیستی و راز پیری",
    subtitle: "زنجیره انتقال الکترون، ATP سنتاز و رادیکال‌های آزاد",
    shortTitle: "۲۴. زنجیره الکترون و ATP",
    content: `
        <div class="space-y-12">
            
            <!-- بنر بلاگری -->
            <div class="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-yellow-600 to-red-900 p-10 text-white shadow-2xl">
                <div class="absolute -left-10 -bottom-10 opacity-20 text-[12rem] leading-none">⚙️</div>
                <div class="relative z-10">
                    <span class="inline-block py-1 px-3 rounded-full bg-red-900/40 border border-red-200/50 text-yellow-100 text-sm font-bold mb-4 backdrop-blur-sm">موتورخانه سلول</span>
                    <h3 class="text-3xl font-black mb-4 leading-tight">توربین‌های نانومتری: سلول چگونه برق تولید می‌کند؟</h3>
                    <p class="text-lg text-yellow-50 leading-relaxed text-justify opacity-95 max-w-3xl">
                        غشای داخلی میتوکندری پر از ماشین‌های پروتئینی است که الکترون‌ها را مثل یک توپ داغ دست‌به‌دست می‌کنند. این دست‌به‌دست کردن انرژی آزاد می‌کند؛ انرژی‌ای که برای پمپاژ پروتون‌ها و ساختن یک «سد اسیدی» استفاده می‌شود. در نهایت، این پروتون‌ها با عبور از یک توربین چرخان (ATP Synthase)، باتری‌های سلول را شارژ می‌کنند. اما مراقب باشید! نشتی این سیستم باعث تولید سموم پیرکننده می‌شود<span class="hidden"></span>!
                    </p>
                </div>
            </div>

            <!-- زنجیره انتقال الکترون (ETC) -->
            <div class="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
                <div class="absolute top-0 right-0 w-2 h-full bg-yellow-500"></div>
                <h4 class="text-xl font-black text-slate-800 mb-6 flex items-center gap-3">
                    <span class="text-2xl">⚡</span> زنجیره انتقال الکترون (ETC)
                </h4>
                <p class="text-slate-600 leading-loose mb-6 text-justify">
                    مولکول‌های NADH و FADH2 (حاملان الکترون) که در چرخه کربس پر شده‌اند، الکترون‌های خود را به غشای داخلی می‌آورند. در اینجا ۴ کمپلکس پروتئینی عظیم وجود دارد:
                </p>
                
                <div class="space-y-4">
                    <div class="bg-yellow-50 p-5 rounded-2xl border border-yellow-100">
                        <strong class="text-yellow-800 text-lg block mb-2">کمپلکس‌های پمپ‌کننده (I, III, IV)</strong>
                        <p class="text-sm text-yellow-700 leading-relaxed text-justify">
                            الکترون‌ها از کمپلکس I به III و سپس IV می‌روند. این کمپلکس‌ها از انرژی الکترون استفاده می‌کنند تا پروتون‌ها (H+) را از ماتریکس به فضای بین دو غشا <strong>پمپ کنند</strong>. (توجه: کمپلکس II الکترون‌های FADH2 را می‌گیرد اما هیچ پروتونی پمپ نمی‌کند!)<span class="hidden"></span>.
                        </p>
                    </div>
                    
                    <div class="bg-blue-50 p-5 rounded-2xl border border-blue-100">
                        <strong class="text-blue-800 text-lg block mb-2">ناقلین متحرک: یوبی‌کینون و سیتوکروم c</strong>
                        <p class="text-sm text-blue-700 leading-relaxed text-justify">
                            کمپلکس‌ها ثابت هستند. برای رساندن الکترون از یکی به دیگری، <strong>یوبی‌کینون (CoQ)</strong> در داخل چربی غشا، و <strong>سیتوکروم c</strong> در سطح غشا مثل یک تاکسی الکترون‌ها را جابجا می‌کنند<span class="hidden"></span>.
                        </p>
                    </div>

                    <div class="bg-red-50 p-5 rounded-2xl border border-red-100 flex items-start gap-3">
                        <span class="text-2xl mt-1">🧲</span>
                        <div>
                            <strong class="text-red-800 text-lg block mb-2">گیرنده نهایی: اکسیژن!</strong>
                            <p class="text-sm text-red-700 leading-relaxed text-justify">
                                اگر الکترون‌ها در انتهای مسیر روی هم تلنبار شوند، کل سیستم قفل می‌شود! اینجاست که <strong>اکسیژن (O2)</strong> که از طریق نفس کشیدن وارد خون شده، در انتهای کمپلکس IV الکترون‌های خسته را جذب کرده و با هیدروژن ترکیب شده و <strong>آب (H2O)</strong> می‌سازد<span class="hidden"></span>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- ATP ساز و رادیکال های آزاد -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                
                <!-- ATP Synthase -->
                <div class="bg-slate-800 text-slate-200 p-8 rounded-3xl shadow-lg relative overflow-hidden">
                    <div class="absolute -right-10 -bottom-10 opacity-10 text-[8rem] leading-none">⚙️</div>
                    <h4 class="text-xl font-black text-emerald-400 mb-4 flex items-center gap-3">
                        <span class="text-3xl">🔄</span> توربین ATP ساز
                    </h4>
                    <p class="text-sm text-slate-300 leading-relaxed text-justify mb-4">
                        پمپاژ پروتون‌ها یک <strong>نیروی محرکه پروتونی (PMF)</strong> ایجاد می‌کند (هم شیب غلظت و هم شیب ولتاژ). حالا این پروتون‌ها می‌خواهند برگردند داخل ماتریکس. آن‌ها فقط از یک راه می‌توانند برگردند: <strong>آنزیم ATP Synthase (پمپ نوع F)</strong><span class="hidden"></span>!
                    </p>
                    <ul class="text-sm text-slate-400 space-y-2 list-disc list-inside">
                        <li><strong>بخش F0 (داخل غشا):</strong> روتور چرخانی است که با عبور هر پروتون می‌چرخد!</li>
                        <li><strong>بخش F1 (داخل ماتریکس):</strong> ساقه و سرِ آنزیم است که با چرخش F0 تغییر شکل داده و ADP را به ATP تبدیل می‌کند (مثل دینام دوچرخه)<span class="hidden"></span>.</li>
                    </ul>
                </div>

                <!-- رادیکال های آزاد و پیری -->
                <div class="bg-rose-900/10 border border-rose-500/30 p-8 rounded-3xl shadow-inner relative overflow-hidden">
                    <h4 class="text-xl font-black text-rose-800 mb-4 flex items-center gap-3">
                        <span class="text-3xl">☠️</span> رادیکال‌های آزاد و پیری
                    </h4>
                    <p class="text-sm text-rose-700 leading-relaxed text-justify mb-4">
                        زنجیره انتقال الکترون بی‌نقص نیست! حدود ۱ تا ۲ درصد از الکترون‌ها قبل از رسیدن به اکسیژن، به بیرون نشت می‌کنند و با اکسیژنِ تنها واکنش می‌دهند تا <strong>رادیکال سوپراکسید (O2•−)</strong> بسازند.
                    </p>
                    <p class="text-sm text-rose-700 leading-relaxed text-justify">
                        این رادیکال‌های آزاد (ROS)، به شدت واکنش‌پذیرند و به DNA، پروتئین‌ها و غشای سلول آسیب می‌زنند. تجمع این آسیب‌ها در طول زمان، عامل اصلی <strong>پیر شدن سلول‌ها</strong> و بیماری‌هایی مثل سرطان و آلزایمر است<span class="hidden"></span>. سلول برای دفاع، از آنتی‌اکسیدان‌هایی مثل <strong>آنزیم SOD (سوپراکسید دیسموتاز)</strong> استفاده می‌کند.
                    </p>
                </div>

            </div>

        </div>
    `,
    quiz: [
        {
            question: "هدف اصلی از انتقال الکترون در زنجیره تنفسی میتوکندری چیست؟",
            options: [
                "تولید مستقیم قند (گلوکز) برای تغذیه سلول.",
                "استفاده از انرژی الکترون‌ها برای پمپ کردن پروتون‌ها (H+) به فضای بین دو غشا و ایجاد یک شیب الکتروشیمیایی.",
                "تبدیل مستقیم پروتئین‌ها به اسیدهای آمینه.",
                "تجزیه آب به اکسیژن و هیدروژن."
            ],
            answer: 1,
            explanation: "انرژی آزاد شده از افتادن الکترون‌ها از سطوح انرژی بالا به پایین، توسط کمپلکس‌های پروتئینی استفاده می‌شود تا پروتون‌ها را برخلاف شیب غلظتشان به فضای بین‌غشایی پمپ کنند و یک «نیروی محرکه پروتونی» بسازند<span class=\"hidden\"></span>."
        },
        {
            question: "در پایان زنجیره انتقال الکترون، کدام مولکول به عنوان «گیرنده نهایی الکترون» عمل کرده و از قفل شدن زنجیره جلوگیری می‌کند؟",
            options: [
                "دی‌اکسید کربن (CO2)",
                "گلوکز",
                "اکسیژن (O2)",
                "سیتوکروم c"
            ],
            answer: 2,
            explanation: "اکسیژن به دلیل الکترونگاتیوی بالای خود، در انتهای کمپلکس IV قرار دارد. او الکترون‌های تهی از انرژی را همراه با پروتون‌ها جذب کرده و به مولکول بی‌خطرِ آب (H2O) تبدیل می‌شود<span class=\"hidden\"></span>."
        },
        {
            question: "کدام یک از کمپلکس‌های زنجیره انتقال الکترون با وجود دریافت الکترون (از FADH2)، هیچ پروتونی را به فضای بین دو غشا پمپ نمی‌کند؟",
            options: [
                "کمپلکس I (NADH دهیدروژناز)",
                "کمپلکس II (سوکسینات دهیدروژناز)",
                "کمپلکس III (سیتوکروم bc1)",
                "کمپلکس IV (سیتوکروم c اکسیداز)"
            ],
            answer: 1,
            explanation: "کمپلکس II الکترون‌ها را از FADH2 دریافت کرده و به یوبی‌کینون می‌دهد، اما برخلاف کمپلکس‌های I، III و IV، قابلیت پمپاژ پروتون را ندارد<span class=\"hidden\"></span>."
        },
        {
            question: "آنزیم ATP Synthase (کمپلکس V) در میتوکندری از دو بخش اصلی F0 و F1 تشکیل شده است. نقش دقیق این دو بخش چیست؟",
            options: [
                "بخش F0 یک روتور چرخان در غشا است که با عبور پروتون می‌چرخد، و بخش F1 در ماتریکس با تغییر شکل فضایی خود ATP می‌سازد.",
                "بخش F1 الکترون‌ها را می‌گیرد و بخش F0 اکسیژن را مصرف می‌کند.",
                "بخش F0 فقط برای هضم پروتئین‌هاست و F1 پمپ سدیم-پتاسیم است.",
                "هر دو بخش در سیتوزول شناور بوده و گلیکولیز را انجام می‌دهند."
            ],
            answer: 0,
            explanation: "این آنزیم شگفت‌انگیز یک موتور نانومتری است. بخش F0 (که در غشا قرار دارد) با عبور پروتون‌ها می‌چرخد. این چرخش به بخش F1 (سر آنزیم در ماتریکس) منتقل شده و باعث سنتز ATP از ADP و فسفات می‌شود<span class=\"hidden\"></span>."
        },
        {
            question: "پدیده «نشت الکترون» در میتوکندری منجر به تولید کدام مولکول خطرناک می‌شود که عامل اصلی پیری سلول است؟",
            options: [
                "پیرووات",
                "رادیکال‌های آزاد اکسیژن مانند سوپراکسید (ROS)",
                "هیالورونان",
                "کلسترول"
            ],
            answer: 1,
            explanation: "حدود ۱ تا ۲ درصد الکترون‌ها از زنجیره نشت کرده و با اکسیژن واکنش می‌دهند تا گونه‌های فعال اکسیژن (ROS) مثل رادیکال سوپراکسید را بسازند. این رادیکال‌ها به DNA و غشا آسیب زده و باعث پیری و بیماری می‌شوند<span class=\"hidden\"></span>."
        },
        {
            question: "آنزیم «سوپراکسید دیسموتاز (SOD)» چه نقش حیاتی‌ای در سلول دارد؟",
            options: [
                "آنزیمی است که گلوکز را می‌سازد.",
                "اولین خط دفاعی آنتی‌اکسیدانی سلول است که رادیکال سمی سوپراکسید را به پراکسید هیدروژن و اکسیژن تبدیل (خنثی) می‌کند.",
                "پروتئینی است که باعث مرگ برنامه‌ریزی شده سلول (آپوپتوز) می‌شود.",
                "پروتونی است که از ATP Synthase عبور می‌کند."
            ],
            answer: 1,
            explanation: "برای مقابله با سموم تولید شده در میتوکندری، آنزیم آنتی‌اکسیدانیِ قدرتمند SOD وارد عمل می‌شود و رادیکال‌های آزاد سوپراکسید را خنثی کرده و مانع آسیب به سلول می‌شود<span class=\"hidden\"></span>."
        },
        {
            question: "سم خطرناک «سیانید (Cyanide)» چگونه باعث مرگ سریع انسان می‌شود؟",
            options: [
                "با تجزیه کامل غشای سلول.",
                "با اتصال به کمپلکس IV و مسدود کردن انتقال الکترون به اکسیژن، که باعث توقف کامل تولید ATP در میتوکندری می‌گردد.",
                "با پاره کردن غلاف میلین اعصاب.",
                "با از بین بردن تمام گیرنده‌های انسولین."
            ],
            answer: 1,
            explanation: "سیانید و مونوکسید کربن با اتصال محکم به جایگاه اکسیژن در کمپلکس IV، زنجیره انتقال الکترون را مسدود می‌کنند. بدون انتقال الکترون، پمپاژ پروتون متوقف شده و تولید ATP قطع می‌شود که منجر به مرگ سلول می‌گردد<span class=\"hidden\"></span>."
        },
        {
            question: "پروتئین‌های «جداکننده» (Uncoupling Proteins - UCPs) مانند ترموژنین که در بافت چربی قهوه‌ای یافت می‌شوند، چه عملکردی دارند؟",
            options: [
                "تولید ATP را ده برابر می‌کنند.",
                "مسیر بازگشت پروتون‌ها را از ATP Synthase منحرف کرده و انرژی پروتون‌ها را به جای تولید برق (ATP)، به «گرما» تبدیل می‌کنند.",
                "الکترون‌ها را مستقیماً به هسته سلول می‌برند.",
                "رادیکال‌های آزاد را به اکسیژن خالص تبدیل می‌کنند."
            ],
            answer: 1,
            explanation: "در نوزادان انسان و حیوانات خوابِ زمستانی (در بافت چربی قهوه‌ای)، پروتئین‌های UCP یک مسیر نشتی برای پروتون‌ها ایجاد می‌کنند. پروتون‌ها بدون عبور از ATP ساز وارد ماتریکس می‌شوند و انرژی آن‌ها تماماً به شکل گرما آزاد می‌شود تا دمای بدن حفظ شود<span class=\"hidden\"></span>."
        },
        {
            question: "دو ناقل متحرک (تاکسی الکترون) در زنجیره انتقال الکترون که بین کمپلکس‌های ثابت جابجا می‌شوند، کدامند؟",
            options: [
                "اکتین و میوزین",
                "کلاترین و دینامین",
                "یوبی‌کینون (کوآنزیم Q) و سیتوکروم c",
                "پلاسمالوژن و سرآمید"
            ],
            answer: 2,
            explanation: "یوبی‌کینون (یک مولکول لیپیدی کوچک حل شده در غشا) و سیتوکروم c (یک پروتئین کوچک محیطی)، وظیفه حمل الکترون‌ها را بین کمپلکس‌های بزرگ و ثابت بر عهده دارند<span class=\"hidden\"></span>."
        },
        {
            question: "«نیروی محرکه پروتونی» (Proton Motive Force) که توسط زنجیره الکترون ساخته می‌شود، از چه اجزایی تشکیل شده است؟",
            options: [
                "فقط اختلاف غلظت شیمیایی پروتون‌ها.",
                "شیب شیمیایی (اختلاف غلظت pH) و شیب الکتریکی (اختلاف ولتاژ به دلیل تجمع بار مثبت در یک سمت غشا).",
                "فقط اختلاف دمای دو طرف غشا.",
                "فقط از فشار اسمزی آب ناشی می‌شود."
            ],
            answer: 1,
            explanation: "نیروی محرکه پروتونی یک گرادیان الکتروشیمیایی است. پمپاژ یون‌های +H هم باعث اختلاف غلظت (شیمیایی/pH) می‌شود و هم چون بار مثبت دارند، اختلاف پتانسیل (الکتریکی) شدیدی ایجاد می‌کند که نیروی عظیمی برای چرخش ATP Synthase فراهم می‌آورد<span class=\"hidden\"></span>."
        }
    ]
},
{
id: "module_25",
    title: "ماژول بیست و پنجم: داربست‌های زنده و بزرگراه‌های سلولی",
    subtitle: "میکروتوبول‌ها، اکتین، فیلامنت‌های بینابینی و موتورهای بارکش",
    shortTitle: "۲۵. اسکلت سلولی",
    content: `
        <div class="space-y-12">
            
            <!-- بنر بلاگری -->
            <div class="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-indigo-700 to-purple-900 p-10 text-white shadow-2xl">
                <div class="absolute -right-10 -bottom-10 opacity-20 text-[12rem] leading-none">🏗️</div>
                <div class="relative z-10">
                    <span class="inline-block py-1 px-3 rounded-full bg-purple-900/40 border border-purple-200/50 text-indigo-100 text-sm font-bold mb-4 backdrop-blur-sm">معماری درون‌سلولی</span>
                    <h3 class="text-3xl font-black mb-4 leading-tight">اسکلت سلول، استخوان‌های متحرک!</h3>
                    <p class="text-lg text-indigo-50 leading-relaxed text-justify opacity-95 max-w-3xl">
                        برخلاف استخوان‌های خشک بدن ما، اسکلت سلول (Cytoskeleton) یک داربست فوق‌العاده پویا و زنده است! این اسکلت مدام ساخته و خراب می‌شود، باعث حرکت سلول می‌شود و بزرگراه‌هایی را می‌سازد که موتورهای پروتئینی روی آن‌ها قدم می‌زنند و بار جابجا می‌کنند. اسکلت سلول از سه نوع طناب و لوله اصلی ساخته شده است<span class="hidden"></span>.
                    </p>
                </div>
            </div>

            <!-- سه نوع رشته اصلی -->
            <div class="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
                <div class="absolute top-0 right-0 w-2 h-full bg-indigo-500"></div>
                <h4 class="text-xl font-black text-slate-800 mb-6 flex items-center gap-3">
                    <span class="text-2xl">🧬</span> سه ضلع اسکلت سلولی
                </h4>
                
                <div class="space-y-6">
                    <!-- میکروتوبول ها -->
                    <div class="bg-blue-50 p-5 rounded-2xl border border-blue-100">
                        <strong class="text-blue-800 text-lg block mb-2">۱. میکروتوبول‌ها (Microtubules) - لوله‌های قطور و بزرگراه‌ها</strong>
                        <p class="text-sm text-blue-700 leading-relaxed text-justify mb-2">
                            ضخیم‌ترین رشته‌ها (قطر ۲۵ نانومتر) هستند که به شکل لوله‌های توخالی از جنس پروتئین <strong>توبولین</strong> ساخته می‌شوند. آن‌ها از مرکزی در کنار هسته (سانتروزوم) منشأ می‌گیرند و به سمت لبه‌های سلول کشیده می‌شوند.
                        </p>
                        <ul class="list-disc list-inside text-sm text-blue-800 space-y-1 ml-4 font-medium">
                            <li><strong>نقش:</strong> حفظ شکل سلول، مسیر حرکت وزیکول‌ها، تشکیل دوک تقسیم (برای جدا کردن کروموزوم‌ها) و ساختار تاژه و مژک<span class="hidden"></span>.</li>
                        </ul>
                    </div>

                    <!-- میکروفیلامنت ها (اکتین) -->
                    <div class="bg-rose-50 p-5 rounded-2xl border border-rose-100">
                        <strong class="text-rose-800 text-lg block mb-2">۲. ریزرشته‌ها (Microfilaments / Actin) - طناب‌های کششی</strong>
                        <p class="text-sm text-rose-700 leading-relaxed text-justify mb-2">
                            نازک‌ترین رشته‌ها (قطر ۷ نانومتر) از جنس پروتئین <strong>اکتین</strong> هستند. آن‌ها بیشتر در زیر غشای سلولی (قشر سلول) تجمع دارند.
                        </p>
                        <ul class="list-disc list-inside text-sm text-rose-800 space-y-1 ml-4 font-medium">
                            <li><strong>نقش:</strong> حرکت و خزیدن سلول (مثل فاگوسیتوز)، انقباض عضلات (به کمک میوزین) و تقسیم سیتوپلاسم در انتهای میتوز<span class="hidden"></span>.</li>
                        </ul>
                    </div>

                    <!-- فیلامنت های بینابینی -->
                    <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
                        <strong class="text-emerald-800 text-lg block mb-2">۳. رشته‌های بینابینی (Intermediate Filaments) - کابل‌های فولادی</strong>
                        <p class="text-sm text-emerald-700 leading-relaxed text-justify mb-2">
                            اندازه متوسط (۱۰ نانومتر) دارند. برخلاف دو نوع قبلی که مدام می‌شکنند و ساخته می‌شوند، این رشته‌ها بسیار پایدار و شبیه طناب‌های ضخیم هستند (مثل <strong>کراتین</strong> در مو و پوست).
                        </p>
                        <ul class="list-disc list-inside text-sm text-emerald-800 space-y-1 ml-4 font-medium">
                            <li><strong>نقش:</strong> مقاومت در برابر فشار و کشش مکانیکی (جلوگیری از پاره شدن سلول) و ساختن لامینای هسته<span class="hidden"></span>.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- موتور پروتئین‌ها -->
            <div class="bg-slate-800 text-slate-200 p-8 rounded-3xl shadow-lg relative overflow-hidden mt-8">
                <div class="absolute -left-20 -bottom-20 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl"></div>
                <h4 class="text-xl font-black text-cyan-400 mb-4 flex items-center gap-3">
                    <span class="text-3xl">🚚</span> کامیون‌های سلولی: موتورپروتئین‌ها
                </h4>
                <p class="text-slate-300 leading-loose text-justify mb-6">
                    میکروتوبول‌ها و اکتین قطبیت دارند (یک سر مثبت و یک سر منفی). موتورپروتئین‌ها با مصرف ATP روی این رشته‌ها قدم می‌زنند و وزیکول‌ها یا اندامک‌ها را جابجا می‌کنند:
                </p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div class="bg-slate-700/50 p-5 rounded-2xl border border-slate-600">
                        <h5 class="text-cyan-300 font-bold mb-2 flex items-center gap-2">🚶 کاینزین (Kinesin)</h5>
                        <p class="text-sm text-slate-400 leading-relaxed text-justify">
                            موتوری است که روی میکروتوبول‌ها <strong>به سمت سرِ مثبت (Outward)</strong> حرکت می‌کند. یعنی بار را از مرکز سلول (هسته) به سمت لبه‌های سلول و غشای پلاسمایی می‌برد<span class="hidden"></span>.
                        </p>
                    </div>
                    <div class="bg-slate-700/50 p-5 rounded-2xl border border-slate-600">
                        <h5 class="text-cyan-300 font-bold mb-2 flex items-center gap-2">🚶 داینئین (Dynein)</h5>
                        <p class="text-sm text-slate-400 leading-relaxed text-justify">
                            موتوری است که روی میکروتوبول‌ها <strong>به سمت سرِ منفی (Inward)</strong> حرکت می‌کند. یعنی بار (مثل وزیکول‌های اندوسیتوزی) را از لبه غشا به سمت مرکز سلول می‌آورد<span class="hidden"></span>.
                        </p>
                    </div>
                </div>

                <div class="bg-red-900/30 p-5 rounded-2xl border border-red-500/30">
                    <h5 class="text-red-200 font-bold mb-2">موتورِ اکتین: میوزین (Myosin)</h5>
                    <p class="text-sm text-red-100 leading-relaxed text-justify">
                        روی رشته‌های اکتین راه می‌رود. ترکیب اکتین و میوزین، عامل اصلی <strong>انقباض عضلات</strong> قلب و اسکلتی ماست. وقتی میوزین با مصرف ATP سر خود را خم می‌کند، رشته‌های اکتین را روی هم می‌لغزاند و عضله منقبض می‌شود<span class="hidden"></span>.
                    </p>
                </div>
            </div>

        </div>
    `,
    quiz: [
        {
            question: "تفاوت اصلی اسکلت سلولی (Cytoskeleton) با اسکلت استخوانی بدن چیست؟",
            options: [
                "اسکلت سلولی فقط در سلول‌های گیاهی وجود دارد.",
                "اسکلت سلولی ساختاری ثابت و غیرقابل تغییر است.",
                "اسکلت سلولی یک ساختار به شدت پویا (دینامیک) است که مدام پلیمریزه و دپلیمریزه (ساخته و تخریب) می‌شود.",
                "اسکلت سلولی از جنس لیپیدها ساخته شده است، در حالی که استخوان از کلسیم است."
            ],
            answer: 2,
            explanation: "برخلاف استخوان‌های بدن، اسکلت سلولی (به خصوص میکروتوبول‌ها و رشته‌های اکتین) بسیار پویا هستند و متناسب با نیاز سلول (برای حرکت یا تقسیم) مدام مونتاژ و دمونتاژ می‌شوند<span class=\"hidden\"></span>."
        },
        {
            question: "کدام گروه از رشته‌های اسکلت سلولی، ضخیم‌ترین رشته‌ها بوده و از واحدهای پروتئینی «توبولین» ساخته شده‌اند؟",
            options: [
                "ریزرشته‌ها (Microfilaments)",
                "رشته‌های بینابینی (Intermediate Filaments)",
                "میکروتوبول‌ها (Microtubules)",
                "فیبرهای کلاژن"
            ],
            answer: 2,
            explanation: "میکروتوبول‌ها لوله‌های توخالی و ضخیمی (۲۵ نانومتر) هستند که از دایمرهای پروتئین توبولین (آلفا و بتا) ساخته شده و بزرگراه‌های اصلی درون‌سلولی را تشکیل می‌دهند<span class=\"hidden\"></span>."
        },
        {
            question: "موتورپروتئین «کاینزین» (Kinesin) در سلول چه وظیفه‌ای دارد؟",
            options: [
                "حرکت دادن بارها روی رشته‌های اکتین.",
                "حرکت دادن بارها روی میکروتوبول‌ها به سمت قطب منفی (مرکز سلول).",
                "حرکت دادن بارها روی میکروتوبول‌ها به سمت قطب مثبت (لبه‌های غشای سلول).",
                "تولید ATP در ماتریکس میتوکندری."
            ],
            answer: 2,
            explanation: "کاینزین‌ها موتورپروتئین‌هایی هستند که با مصرف ATP روی میکروتوبول‌ها قدم می‌زنند و بارها (وزیکول‌ها و اندامک‌ها) را به سمت انتهای مثبت (+)، یعنی به سمت محیط و غشای پلاسمایی منتقل می‌کنند<span class=\"hidden\"></span>."
        },
        {
            question: "وظیفه ساختاری «رشته‌های بینابینی» (Intermediate Filaments) مانند کراتین در سلول چیست؟",
            options: [
                "ایجاد انقباض عضلانی.",
                "ارائه استحکام مکانیکی و مقاومت در برابر فشارهای کششی برای جلوگیری از پاره شدن سلول.",
                "تشکیل دوک تقسیم در هنگام میتوز.",
                "ساختن مسیرهای حرکت برای کاینزین."
            ],
            answer: 1,
            explanation: "رشته‌های بینابینی قوی‌ترین و پایدارترین بخش اسکلت سلولی هستند. آن‌ها شبیه طناب‌های فولادی عمل کرده و سلول‌ها را در برابر استرس و کشش مکانیکی (مثلاً در سلول‌های پوست) مقاوم می‌کنند<span class=\"hidden\"></span>."
        },
        {
            question: "خزیدن سلول‌های ایمنی (مانند ماکروفاژها) و پدیده فاگوسیتوز، وابستگی شدیدی به بازآراییِ کدام بخش از اسکلت سلولی دارد؟",
            options: [
                "لامینای هسته",
                "میکروتوبول‌ها",
                "رشته‌های اکتین (Microfilaments)",
                "پروتئین‌های پورین"
            ],
            answer: 2,
            explanation: "تشکیل پاهای کاذب، خزیدن سلولی و در آغوش گرفتن باکتری در فاگوسیتوز، به دلیل پلیمریزاسیون و رشد سریعِ شبکه‌های اکتین در زیر غشای پلاسمایی (قشر سلول) رخ می‌دهد<span class=\"hidden\"></span>."
        },
        {
            question: "موتورپروتئینی که با رشته‌های «اکتین» میان‌کنش داده و عامل اصلی «انقباض عضلات» است، چه نام دارد؟",
            options: [
                "کاینزین",
                "داینئین",
                "میوزین (Myosin)",
                "دینامین"
            ],
            answer: 2,
            explanation: "میوزین‌ها خانواده‌ای از موتورپروتئین‌ها هستند که روی رشته‌های اکتین حرکت می‌کنند. لغزش رشته‌های اکتین و میوزین روی یکدیگر اساس انقباض ماهیچه‌هاست<span class=\"hidden\"></span>."
        },
        {
            question: "مراکز سازمان‌دهنده میکروتوبول‌ها (MTOC) که معمولاً در نزدیک هسته قرار داشته و منشأ رشد میکروتوبول‌ها هستند، چه نام دارند؟",
            options: [
                "لیزوزوم",
                "سانتروزوم (Centrosome)",
                "پراکسی‌زوم",
                "هستک"
            ],
            answer: 1,
            explanation: "سانتروزوم‌ها (که در سلول‌های جانوری حاوی سانتریول هستند) مراکز اصلی سازمان‌دهنده میکروتوبول (MTOC) می‌باشند. میکروتوبول‌ها از سمت قطب منفی خود در سانتروزوم لنگر انداخته و به سمت محیط سلول رشد می‌کنند<span class=\"hidden\"></span>."
        },
        {
            question: "در هنگام تقسیم سلولی (میتوز)، «دوک تقسیم» (Mitotic Spindle) که وظیفه جدا کردن کروموزوم‌ها را بر عهده دارد، از کدام رشته‌های اسکلتی ساخته می‌شود؟",
            options: [
                "میکروتوبول‌ها",
                "رشته‌های اکتین",
                "رشته‌های بینابینی کراتینی",
                "پروتئین‌های SNARE"
            ],
            answer: 0,
            explanation: "دوک میتوزی از پلیمریزاسیون میکروتوبول‌ها تشکیل می‌شود. این لوله‌ها به سانترومر کروموزوم‌ها متصل شده و با دپلیمریزه شدن، کروموزوم‌های خواهری را به دو قطب سلول می‌کشند<span class=\"hidden\"></span>."
        },
        {
            question: "کدام یک از سه نوع رشته اسکلت سلولی «فاقد قطبیت» (سر مثبت و منفی) بوده و به همین دلیل هیچ موتورپروتئینی روی آن حرکت نمی‌کند؟",
            options: [
                "میکروتوبول‌ها",
                "ریزرشته‌ها (اکتین)",
                "رشته‌های بینابینی",
                "هر سه قطبیت دارند."
            ],
            answer: 2,
            explanation: "رشته‌های بینابینی (مثل کراتین) برخلاف اکتین و میکروتوبول‌ها، متقارن بوده و قطبیت ندارند. به همین دلیل هیچ موتورپروتئینی نمی‌تواند جهت حرکت روی آن‌ها را تشخیص دهد و در نتیجه برای انتقال بار استفاده نمی‌شوند<span class=\"hidden\"></span>."
        },
        {
            question: "ساختار «لامینای هسته» (Nuclear Lamina) که شکل و استحکام غشای هسته را حفظ می‌کند، از کدام نوع رشته‌های اسکلتی تشکیل شده است؟",
            options: [
                "اکتین",
                "میکروتوبول‌های توبولینی",
                "رشته‌های بینابینی (از نوع لامین‌ها)",
                "کلاژن"
            ],
            answer: 2,
            explanation: "لامینای هسته شبکه‌ای است در زیر غشای داخلی هسته که به آن شکل و استحکام می‌بخشد. این شبکه از پروتئین‌هایی به نام لامین ساخته شده که زیرگروهی از خانواده رشته‌های بینابینی (Intermediate Filaments) هستند<span class=\"hidden\"></span>."
        }
    ]
},
{
id: "module_26",
    title: "ماژول بیست و ششم: زبان مخفی سلول‌ها",
    subtitle: "انواع پیام‌رسانی، گیرنده‌های GPCR و پیک‌های ثانویه",
    shortTitle: "۲۶. پیام‌رسانی سلولی",
    content: `
        <div class="space-y-12">
            
            <!-- بنر بلاگری -->
            <div class="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-teal-700 to-cyan-950 p-10 text-white shadow-2xl">
                <div class="absolute -right-10 -bottom-10 opacity-20 text-[12rem] leading-none">📡</div>
                <div class="relative z-10">
                    <span class="inline-block py-1 px-3 rounded-full bg-cyan-900/40 border border-cyan-200/50 text-teal-100 text-sm font-bold mb-4 backdrop-blur-sm">ارتباطات سلولی</span>
                    <h3 class="text-3xl font-black mb-4 leading-tight">سلول‌ها چگونه با هم چت می‌کنند؟!</h3>
                    <p class="text-lg text-cyan-50 leading-relaxed text-justify opacity-95 max-w-3xl">
                        بدن ما از تریلیون‌ها سلول تشکیل شده که باید مثل اعضای یک ارکستر با هم هماهنگ باشند. سلول‌ها برای ارتباط با یکدیگر، مولکول‌های شیمیایی (مثل هورمون‌ها) را به عنوان «پیام» ترشح می‌کنند. سلول‌های هدف این پیام‌ها را با استفاده از «گیرنده‌ها» (آنتن‌های روی غشا) دریافت کرده و واکنش نشان می‌دهند. اگر این سیستم قطع شود، سلول دچار سردرگمی شده و حتی ممکن است خودکشی کند<span class="hidden"></span>!
                    </p>
                </div>
            </div>

            <!-- انواع پیام‌رسانی -->
            <div class="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
                <div class="absolute top-0 right-0 w-2 h-full bg-teal-500"></div>
                <h4 class="text-xl font-black text-slate-800 mb-6 flex items-center gap-3">
                    <span class="text-2xl">پستچی‌های سلولی ✉️</span> ۴ روش ارسال پیام
                </h4>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="bg-teal-50 p-5 rounded-2xl border border-teal-100">
                        <h5 class="font-bold text-teal-800 mb-2">۱. غده‌ای (Endocrine)</h5>
                        <p class="text-sm text-teal-700 leading-relaxed text-justify">پست راه دور! سلول هورمون را وارد خون می‌کند تا به دورترین نقاط بدن برسد (مثل ترشح انسولین از لوزالمعده برای کل بدن)<span class="hidden"></span>.</p>
                    </div>
                    <div class="bg-cyan-50 p-5 rounded-2xl border border-cyan-100">
                        <h5 class="font-bold text-cyan-800 mb-2">۲. پاراکراین (Paracrine)</h5>
                        <p class="text-sm text-cyan-700 leading-relaxed text-justify">صحبت با همسایه! پیام ترشح شده فقط روی سلول‌های مجاور و نزدیک اثر می‌گذارد (مثل فاکتورهای رشد برای ترمیم زخم)<span class="hidden"></span>.</p>
                    </div>
                    <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
                        <h5 class="font-bold text-emerald-800 mb-2">۳. سیناپسی (Synaptic)</h5>
                        <p class="text-sm text-emerald-700 leading-relaxed text-justify">پیام‌رسانی فوق سریع و نقطه‌زن. انتقال‌دهنده عصبی در یک فضای بسیار کوچک (سیناپس) روی سلول هدف ریخته می‌شود<span class="hidden"></span>.</p>
                    </div>
                    <div class="bg-sky-50 p-5 rounded-2xl border border-sky-100">
                        <h5 class="font-bold text-sky-800 mb-2">۴. تماسی (Juxtacrine)</h5>
                        <p class="text-sm text-sky-700 leading-relaxed text-justify">بدون ترشح ماده! دو سلول باید دقیقاً به هم بچسبند و گیرنده‌های سطح آن‌ها با هم دست بدهند تا پیام منتقل شود<span class="hidden"></span>.</p>
                    </div>
                </div>
            </div>

            <!-- گیرنده های GPCR و RTK -->
            <div class="bg-slate-800 text-slate-200 p-8 rounded-3xl shadow-lg relative overflow-hidden mt-8">
                <div class="absolute -left-20 -bottom-20 w-64 h-64 bg-fuchsia-500/20 rounded-full blur-3xl"></div>
                <h4 class="text-xl font-black text-fuchsia-400 mb-6 flex items-center gap-3">
                    <span class="text-3xl">📡</span> آنتن‌های فوق‌پیشرفته: GPCR و RTK
                </h4>
                
                <div class="space-y-6">
                    <!-- GPCR -->
                    <div class="bg-slate-700/50 p-6 rounded-2xl border border-slate-600">
                        <h5 class="text-fuchsia-300 font-black text-lg mb-3 flex items-center gap-2">🐍 گیرنده‌های هفت‌بارگذر (GPCR)</h5>
                        <p class="text-sm text-slate-300 leading-relaxed text-justify mb-3">
                            بزرگترین خانواده گیرنده‌ها در انسان (هدف بیش از ۳۰٪ داروهای امروزی!). این گیرنده‌ها <strong>۷ بار از غشا عبور می‌کنند</strong> (مثل یک مار پیچ‌خورده). وقتی پیام به آن‌ها می‌چسبد، در داخل سلول به یک <strong>پروتئین G (G-protein)</strong> ضربه می‌زنند تا روشن شود.
                        </p>
                        <div class="bg-slate-800 p-3 rounded-xl border border-slate-600 text-xs text-slate-400">
                            <strong>G-protein چیست؟</strong> پروتئینی است که اگر به GTP متصل باشد «روشن» و اگر به GDP متصل باشد «خاموش» است<span class="hidden"></span>.
                        </div>
                    </div>

                    <!-- RTK -->
                    <div class="bg-slate-700/50 p-6 rounded-2xl border border-slate-600">
                        <h5 class="text-pink-300 font-black text-lg mb-3 flex items-center gap-2">✂️ گیرنده‌های آنزیمی (RTK)</h5>
                        <p class="text-sm text-slate-300 leading-relaxed text-justify mb-3">
                            گیرنده‌های تیروزین کیناز (RTK) معمولاً با فاکتورهای رشد فعال می‌شوند. وقتی پیام به آن‌ها می‌رسد، دو گیرنده به هم می‌چسبند (دایمر می‌شوند) و <strong>به یکدیگر گروه فسفات می‌چسبانند (خودفسفریلاسیون)</strong>. این کار مثل روشن کردن یک آبشار از سیگنال‌های تقسیم سلولی است. (جهش در این گیرنده‌ها عامل اصلی بسیاری از سرطان‌هاست!)<span class="hidden"></span>.
                        </p>
                    </div>
                </div>
            </div>
            
            <!-- پیک ثانویه -->
            <div class="bg-orange-50 border border-orange-200 rounded-3xl p-8 mt-8">
                <h4 class="text-xl font-black text-orange-800 mb-4 flex items-center gap-2">
                    <span class="text-3xl">📣</span> پیک‌های ثانویه (Second Messengers)
                </h4>
                <p class="text-orange-700 leading-loose text-justify text-sm">
                    پیامِ اصلی (مثل آدرنالین) نمی‌تواند وارد سلول شود؛ پس پشت غشا می‌ماند (پیک اولیه). وقتی گیرنده روشن می‌شود، باعث تولید هزاران مولکول کوچک در داخل سلول می‌شود که به آن‌ها <strong>پیک ثانویه</strong> می‌گویند. این مولکول‌ها پیام را به سرعت در کل سلول پخش می‌کنند. معروف‌ترین آن‌ها <strong>cAMP</strong> (آدنوزین مونوفسفات حلقوی) و <strong>یون کلسیم (Ca2+)</strong> هستند<span class="hidden"></span>.
                </p>
            </div>

        </div>
    `,
    quiz: [
        {
            question: "ارتباطی که در آن یک سلول پیام‌های شیمیایی (مثل فاکتورهای رشد) ترشح می‌کند و این پیام‌ها فقط بر روی «سلول‌های همسایه در فاصله کوتاه» تأثیر می‌گذارند، چه نام دارد؟",
            options: [
                "پیام‌رسانی اندوکراین (Endocrine)",
                "پیام‌رسانی پاراکراین (Paracrine)",
                "پیام‌رسانی اتوکراین (Autocrine)",
                "پیام‌رسانی وابسته به تماس (Juxtacrine)"
            ],
            answer: 1,
            explanation: "در پیام‌رسانی پاراکراین، مولکول‌های سیگنال به صورت محلی ترشح می‌شوند و فقط روی سلول‌های هدف که در مجاورت (همسایگی) سلول ترشح‌کننده قرار دارند، اثر می‌گذارند<span class=\"hidden\"></span>."
        },
        {
            question: "در پیام‌رسانی «وابسته به تماس» (Juxtacrine)، انتقال پیام چگونه صورت می‌گیرد؟",
            options: [
                "از طریق ترشح هورمون به جریان خون.",
                "بدون ترشح هیچ ماده‌ای، سلول‌ها باید تماس فیزیکی مستقیم داشته باشند و مولکول سطح یکی به گیرنده سطح دیگری متصل شود.",
                "از طریق آزاد شدن انتقال‌دهنده عصبی در فضای سیناپسی.",
                "از طریق تولید امواج صوتی توسط سلول."
            ],
            answer: 1,
            explanation: "در ارتباط وابسته به تماس، هیچ مولکول سیگنالی ترشح نمی‌شود. سلول‌ها باید دقیقاً با غشای خود به یکدیگر بچسبند تا مولکول سیگنال روی غشای یک سلول با گیرنده روی غشای سلول مجاور متصل گردد<span class=\"hidden\"></span>."
        },
        {
            question: "بزرگترین خانواده گیرنده‌های سطح سلول که هدفِ بیش از یک سوم داروهای امروزی هستند و زنجیره پلی‌پپتیدی آن‌ها ۷ بار از عرض غشا عبور می‌کند، چه نام دارند؟",
            options: [
                "گیرنده‌های جفت‌شونده با جی پروتئین (GPCRs)",
                "گیرنده‌های تیروزین کیناز (RTKs)",
                "کانال‌های یونی وابسته به لیگاند",
                "گیرنده‌های داخل هسته‌ای"
            ],
            answer: 0,
            explanation: "گیرنده‌های جفت‌شونده با پروتئین G (GPCRs) همگی ساختار مشابهی دارند و زنجیره پلی‌پپتیدی آن‌ها به صورت ۷ مارپیچ آلفا از غشای پلاسمایی عبور می‌کند (گیرنده‌های هفت‌بارگذر)<span class=\"hidden\"></span>."
        },
        {
            question: "یک «پروتئین G» (G-protein) در چه حالتی «فعال (روشن)» و در چه حالتی «غیرفعال (خاموش)» محسوب می‌شود؟",
            options: [
                "روشن با اتصال به ATP / خاموش با اتصال به ADP",
                "روشن با اتصال به GTP / خاموش با اتصال به GDP",
                "روشن در حالت دایمر / خاموش در حالت مونومر",
                "روشن با فسفریلاسیون / خاموش با هیدرولیز"
            ],
            answer: 1,
            explanation: "پروتئین‌های G سوئیچ‌های مولکولی هستند. زمانی که به مولکول GTP (گوانوزین تری‌فسفات) متصل باشند، در حالت فعال (روشن) قرار دارند و زمانی که GTP هیدرولیز شده و به GDP تبدیل شود، خاموش می‌شوند<span class=\"hidden\"></span>."
        },
        {
            question: "پس از اتصال لیگاند (مانند آدرنالین) به یک گیرنده GPCR، این گیرنده چگونه پیام را به داخل سلول منتقل می‌کند؟",
            options: [
                "به عنوان یک کانال باز شده و آدرنالین را وارد سلول می‌کند.",
                "شکل فضایی آن تغییر کرده و در سمت داخل سلول، یک پروتئین G (G-protein) را فعال می‌کند.",
                "بلافاصله وارد هسته شده و رونویسی ژن را آغاز می‌کند.",
                "خود را فسفریله می‌کند."
            ],
            answer: 1,
            explanation: "وقتی یک مولکول سیگنال به GPCR می‌چسبد، تغییر شکل در گیرنده ایجاد می‌شود که به آن اجازه می‌دهد در سمت سیتوزولی خود با یک پروتئین G متصل شده و با جایگزینی GDP با GTP، آن را فعال سازد<span class=\"hidden\"></span>."
        },
        {
            question: "مولکول «cAMP» (آدنوزین مونوفسفات حلقوی) در مسیرهای پیام‌رسانی سلولی به عنوان چه چیزی شناخته می‌شود؟",
            options: [
                "پیک اولیه (Primary messenger)",
                "آنزیم تجزیه‌کننده پروتئین",
                "پیک ثانویه (Second messenger) داخل سلولی",
                "پمپ یونی"
            ],
            answer: 2,
            explanation: "از آنجا که هورمون (پیک اولیه) بیرون سلول می‌ماند، فعال شدن آنزیم‌ها توسط گیرنده منجر به تولید سریع مولکول‌های کوچکی در داخل سیتوزول می‌شود (مانند cAMP یا کلسیم) که به عنوان پیک ثانویه پیام را به اهداف داخلی می‌رسانند<span class=\"hidden\"></span>."
        },
        {
            question: "گیرنده‌های «تیروزین کیناز» (RTKs) معمولاً در پاسخ به چه نوع مولکول‌هایی فعال می‌شوند و نقش اصلی آن‌ها چیست؟",
            options: [
                "در پاسخ به انتقال‌دهنده‌های عصبی برای ایجاد پتانسیل عمل.",
                "در پاسخ به فاکتورهای رشد (Growth Factors) برای تنظیم رشد، تکثیر و بقای سلولی.",
                "در پاسخ به نور برای بینایی.",
                "در پاسخ به سموم باکتریایی برای آپوپتوز."
            ],
            answer: 1,
            explanation: "گیرنده‌های آنزیمی (مخصوصاً RTKs) عمدتاً توسط فاکتورهای رشد (مثل EGF یا انسولین) فعال می‌شوند و مسیرهای آبشاری پیچیده‌ای را برای کنترل تکثیر، رشد و تمایز سلول روشن می‌کنند<span class=\"hidden\"></span>."
        },
        {
            question: "مکانیسم فعال‌سازی گیرنده‌های تیروزین کیناز (RTK) پس از اتصال لیگاند (سیگنال) چیست؟",
            options: [
                "تبدیل مستقیم آن‌ها به کانال کلسیمی.",
                "نزدیک شدن دو گیرنده به هم (دایمریزاسیون) و سپس فسفریله کردنِ متقابلِ یکدیگر در اسیدآمینه‌های تیروزین (خودفسفریلاسیون).",
                "جدا شدن سریع آن‌ها از غشا و ورود به سیتوزول.",
                "اتصال به پروتئین G و تولید cAMP."
            ],
            answer: 1,
            explanation: "اتصال لیگاند باعث می‌شود دو گیرنده RTK به هم بچسبند (Dimerization). این کار دومِین‌های کینازی آن‌ها را به هم نزدیک می‌کند تا یکدیگر را در اسیدآمینه تیروزین فسفریله کنند (Cross-phosphorylation) که این کار جایگاه اتصالی برای پروتئین‌های بعدی ایجاد می‌کند<span class=\"hidden\"></span>."
        },
        {
            question: "آنزیم‌های «کیناز» (Kinase) به طور کلی در سلول چه وظیفه‌ای بر عهده دارند؟",
            options: [
                "برداشتن گروه فسفات از پروتئین‌ها (دفسفریلاسیون)",
                "اضافه کردن گروه فسفات (با مصرف ATP) به پروتئین‌های هدف (فسفریلاسیون) جهت خاموش یا روشن کردن آن‌ها",
                "تجزیه چربی‌های غشا",
                "شکستن DNA"
            ],
            answer: 1,
            explanation: "کینازها آنزیم‌هایی هستند که گروه فسفاتِ پایانیِ یک مولکول ATP را برداشته و به یک پروتئینِ هدف متصل می‌کنند (فسفریلاسیون). در مقابل، آنزیم‌های «فسفاتاز» این گروه فسفات را برمی‌دارند<span class=\"hidden\"></span>."
        },
        {
            question: "چرا جهش (Mutation) در گیرنده‌های RTK یکی از عوامل اصلی بروز بیماری سرطان است؟",
            options: [
                "زیرا باعث مرگ سریع سلول‌ها می‌شود.",
                "زیرا جهش می‌تواند باعث شود گیرنده حتی بدون حضور فاکتور رشد، همیشه روشن بماند و سیگنالِ «تکثیر مداوم» را به هسته بفرستد.",
                "زیرا جهش باعث می‌شود سلول‌ها اکسیژن مصرف نکنند.",
                "زیرا ویروس‌ها فقط به گیرنده‌های جهش‌یافته متصل می‌شوند."
            ],
            answer: 1,
            explanation: "مسیرهای RTK کنترل‌کننده رشد و تقسیم سلول هستند. اگر در اثر جهش ژنتیکی این گیرنده‌ها و پروتئین‌های وابسته به آن‌ها (مثل Ras) در حالت همیشه روشن (فعال) قفل شوند، سلول به طور غیرقابل کنترلی تکثیر شده و تومور سرطانی ایجاد می‌شود<span class=\"hidden\"></span>."
        }
    ]
},
{
id: "module_27",
    title: "ماژول بیست و هفتم: ساعت زیستی و تکثیر سلول",
    subtitle: "چرخه سلولی، تقسیم میتوز و نقاط بازرسی امنیتی (Checkpoints)",
    shortTitle: "۲۷. چرخه سلولی و میتوز",
    content: `
        <div class="space-y-12">
            
            <!-- بنر بلاگری -->
            <div class="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-pink-700 to-rose-950 p-10 text-white shadow-2xl">
                <div class="absolute -right-10 -bottom-10 opacity-20 text-[12rem] leading-none">⏱️</div>
                <div class="relative z-10">
                    <span class="inline-block py-1 px-3 rounded-full bg-rose-900/40 border border-rose-200/50 text-pink-100 text-sm font-bold mb-4 backdrop-blur-sm">تولید مثل سلولی</span>
                    <h3 class="text-3xl font-black mb-4 leading-tight">چگونه یک سلول به دو سلول بی‌نقص تبدیل می‌شود؟</h3>
                    <p class="text-lg text-rose-50 leading-relaxed text-justify opacity-95 max-w-3xl">
                        حیات یعنی تکثیر! سلول‌ها برای رشد بدن و ترمیم زخم‌ها باید تقسیم شوند. اما تقسیم سلولی یک کار سرسری نیست؛ اگر سلول هنگام کپی کردن DNA خود فقط یک اشتباه کوچک بکند، ممکن است به یک هیولای سرطانی تبدیل شود! به همین دلیل، سلول‌ها یک ساعت زمان‌سنج بسیار دقیق به نام <strong>چرخه سلولی</strong> دارند که پر از ترمزهای امنیتی است<span class="hidden"></span>.
                    </p>
                </div>
            </div>

            <!-- مراحل چرخه سلولی -->
            <div class="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
                <div class="absolute top-0 right-0 w-2 h-full bg-pink-500"></div>
                <h4 class="text-xl font-black text-slate-800 mb-6 flex items-center gap-3">
                    <span class="text-2xl">🔄</span> مراحل چرخه سلولی (Cell Cycle)
                </h4>
                <p class="text-slate-600 leading-loose mb-6 text-justify">
                    چرخه زندگی یک سلول به دو بخش اصلی تقسیم می‌شود: <strong>اینترفاز (میان‌چهر)</strong> که طولانی‌ترین بخش است و سلول در آن آماده می‌شود، و <strong>فاز M (میتوز)</strong> که سلول واقعاً تقسیم می‌شود<span class="hidden"></span>.
                </p>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <!-- G1 -->
                    <div class="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                        <h5 class="text-pink-700 font-bold text-lg mb-2 flex items-center gap-2">۱. فاز G1 (رشد اول)</h5>
                        <p class="text-sm text-slate-600 leading-relaxed text-justify">سلول متولد شده و به سرعت رشد می‌کند. پروتئین‌ها و اندامک‌های جدید می‌سازد تا برای کپی کردن ژنوم آماده شود.</p>
                        <div class="mt-2 text-xs text-slate-500 bg-slate-200 p-2 rounded-lg"><strong>نکته:</strong> سلول‌هایی که دیگر تقسیم نمی‌شوند (مثل نورون‌ها)، وارد فاز استراحت ابدی به نام <strong>G0</strong> می‌شوند<span class="hidden"></span>.</div>
                    </div>

                    <!-- S -->
                    <div class="bg-rose-50 p-5 rounded-2xl border border-rose-200">
                        <h5 class="text-rose-800 font-bold text-lg mb-2 flex items-center gap-2">۲. فاز S (سنتز DNA)</h5>
                        <p class="text-sm text-rose-700 leading-relaxed text-justify">حیاتی‌ترین مرحله! در این مرحله سلول دقیقاً یک کپی از تمام DNA خود می‌سازد. اکنون هر کروموزوم دارای دو کروماتید خواهری است<span class="hidden"></span>.</p>
                    </div>
                    
                    <!-- G2 -->
                    <div class="bg-fuchsia-50 p-5 rounded-2xl border border-fuchsia-200">
                        <h5 class="text-fuchsia-800 font-bold text-lg mb-2 flex items-center gap-2">۳. فاز G2 (رشد دوم)</h5>
                        <p class="text-sm text-fuchsia-700 leading-relaxed text-justify">سلول برای آخرین بار رشد می‌کند و موتورهای لازم برای تقسیم فیزیکی (مثل توبولین‌ها برای ساخت دوک تقسیم) را آماده می‌کند.</p>
                    </div>

                    <!-- M -->
                    <div class="bg-red-50 p-5 rounded-2xl border border-red-200">
                        <h5 class="text-red-800 font-bold text-lg mb-2 flex items-center gap-2">۴. فاز M (میتوز)</h5>
                        <p class="text-sm text-red-700 leading-relaxed text-justify">تقسیم هسته (میتوز) و سپس تقسیم سیتوپلاسم (سیتوکینز). در اینجا یک سلول رسماً به دو سلول دختری کاملاً یکسان تبدیل می‌شود<span class="hidden"></span>.</p>
                    </div>
                </div>
            </div>

            <!-- میتوز و سیستم امنیتی -->
            <div class="bg-slate-800 text-slate-200 p-8 rounded-3xl shadow-lg relative overflow-hidden mt-8">
                <div class="absolute -left-20 -bottom-20 w-64 h-64 bg-rose-500/20 rounded-full blur-3xl"></div>
                
                <h4 class="text-xl font-black text-rose-400 mb-6 flex items-center gap-3">
                    <span class="text-3xl">🛡️</span> پلیس‌های امنیتی غشا: نقاط بازرسی (Checkpoints)
                </h4>
                <p class="text-slate-300 leading-loose text-justify mb-6">
                    سلول با استفاده از پروتئین‌های زمان‌سنج (<strong>سایکلین‌ها و CDKها</strong>) در چرخه جلو می‌رود. اما برای جلوگیری از سرطان، سه ایستگاه ایست‌وبازرسی دقیق دارد:
                </p>

                <div class="space-y-4 mb-8">
                    <div class="bg-slate-700/50 p-4 rounded-2xl border border-slate-600 flex items-start gap-3">
                        <span class="text-2xl">🛑</span>
                        <div>
                            <strong class="text-rose-300">بازرسی G1 (نقطه بدون بازگشت):</strong> بررسی می‌کند که آیا محیط مناسب است و سلول به اندازه کافی بزرگ شده یا نه<span class="hidden"></span>.
                        </div>
                    </div>
                    <div class="bg-slate-700/50 p-4 rounded-2xl border border-slate-600 flex items-start gap-3">
                        <span class="text-2xl">🧬</span>
                        <div>
                            <strong class="text-rose-300">بازرسی G2 (پاسدار ژنوم):</strong> آیا DNA کاملاً و بدون جهش کپی شده است؟ در اینجا پروتئین <strong>p53 (نگهبان ژنوم)</strong> اگر خرابی ببیند، چرخه را متوقف می‌کند تا DNA ترمیم شود، و اگر ترمیم نشد دستور خودکشی (آپوپتوز) می‌دهد<span class="hidden"></span>!
                        </div>
                    </div>
                    <div class="bg-slate-700/50 p-4 rounded-2xl border border-slate-600 flex items-start gap-3">
                        <span class="text-2xl">🕸️</span>
                        <div>
                            <strong class="text-rose-300">بازرسی M (متافاز):</strong> بررسی می‌کند که تمام کروموزوم‌ها به درستی به طناب‌های دوک تقسیم (میکروتوبول‌ها) وصل شده باشند تا یک سلول کروموزوم اضافه یا کم نگیرد<span class="hidden"></span>.
                        </div>
                    </div>
                </div>

                <!-- مراحل میتوز -->
                <h4 class="text-xl font-black text-pink-400 mb-4 flex items-center gap-3 border-t border-slate-700 pt-6">
                    <span class="text-3xl">✂️</span> مراحل ۴ گانه میتوز
                </h4>
                <ul class="text-sm text-slate-300 space-y-3 list-disc list-inside">
                    <li><strong>پروفاز (Prophase):</strong> کروموزوم‌ها متراکم و ضخیم می‌شوند و پوشش هسته از بین می‌رود.</li>
                    <li><strong>متافاز (Metaphase):</strong> کروموزوم‌ها دقیقاً در استوا (وسط) سلول به صف می‌شوند.</li>
                    <li><strong>آنافاز (Anaphase):</strong> کروماتیدهای خواهری از هم جدا شده و به سمت قطبین کشیده می‌شوند<span class="hidden"></span>.</li>
                    <li><strong>تلوفاز (Telophase):</strong> پوشش هسته دور کروموزوم‌های جدید شکل می‌گیرد و بلافاصله <strong>سیتوکینز (تقسیم سیتوپلاسم با کمک حلقه اکتینی)</strong> رخ می‌دهد.</li>
                </ul>
            </div>

        </div>
    `,
    quiz: [
        {
            question: "طولانی‌ترین مرحله در چرخه زندگی یک سلول (Cell Cycle) چه نام دارد؟",
            options: [
                "آنافاز",
                "فاز M (میتوز)",
                "اینترفاز (Interphase)",
                "سیتوکینز"
            ],
            answer: 2,
            explanation: "اینترفاز (شامل G1، S و G2) طولانی‌ترین بخش چرخه سلولی است که در آن سلول رشد کرده، DNA خود را کپی می‌کند و برای تقسیم آماده می‌شود. میتوز (فاز M) بخش بسیار کوتاهی از کل چرخه است<span class=\"hidden\"></span>."
        },
        {
            question: "در کدام مرحله از چرخه سلولی، «سنتز و دو برابر شدن DNA» (همتاسازی ژنوم) به طور کامل انجام می‌شود؟",
            options: [
                "فاز G1",
                "فاز S (Synthesis)",
                "فاز G2",
                "پروفاز میتوز"
            ],
            answer: 1,
            explanation: "فاز S (سنتز) مرحله‌ای است که در آن سلول محتوای DNA خود را دقیقاً دو برابر می‌کند. پس از این مرحله، هر کروموزوم از دو کروماتید خواهری تشکیل شده است<span class=\"hidden\"></span>."
        },
        {
            question: "سلول‌هایی مانند نورون‌ها و سلول‌های عضلانی قلب که توانایی تقسیم شدن را به طور دائم از دست داده‌اند، در کدام فازِ چرخه سلولی متوقف شده‌اند؟",
            options: [
                "فاز M",
                "فاز S",
                "فاز G2",
                "فاز G0"
            ],
            answer: 3,
            explanation: "سلول‌هایی که قصد تکثیر ندارند یا تمایز نهایی یافته‌اند، از چرخه فعال سلولی خارج شده و وارد یک حالت استراحت طولانی‌مدت به نام فاز G0 می‌شوند<span class=\"hidden\"></span>."
        },
        {
            question: "موتور اصلی که چرخه سلولی را به جلو می‌راند و باعث عبور سلول از مراحل مختلف می‌شود، کدام پروتئین‌ها هستند؟",
            options: [
                "کمپلکس‌های سایکلین و کینازهای وابسته به سایکلین (Cyclin/CDK)",
                "پروتئین‌های SNARE و Rab",
                "پمپ‌های سدیم-پتاسیم",
                "کلاترین و داینئین"
            ],
            answer: 0,
            explanation: "ساعت چرخه سلولی توسط آنزیم‌های کینازی به نام CDK تنظیم می‌شود. CDKها فقط زمانی فعال می‌شوند که به پروتئین‌های تنظیمی به نام «سایکلین» متصل شوند. این کمپلکس‌ها مراحل چرخه را روشن و خاموش می‌کنند<span class=\"hidden\"></span>."
        },
        {
            question: "نقش پروتئین بسیار مهم «p53» (معروف به نگهبان ژنوم) در نقطه بازرسی G2 چیست؟",
            options: [
                "تحریک سلول به رشد بی‌رویه.",
                "تشخیص آسیب‌های DNA؛ اگر DNA آسیب دیده باشد چرخه را متوقف می‌کند تا ترمیم شود، در غیر اینصورت دستور آپوپتوز می‌دهد.",
                "تشکیل دوک تقسیم در میتوز.",
                "تجزیه پوشش هسته."
            ],
            answer: 1,
            explanation: "پروتئین p53 یک سرکوبگر تومور (Tumor suppressor) است. در صورت آسیب DNA، p53 چرخه را نگه می‌دارد. اگر جهش p53 رخ دهد (که در نیمی از سرطان‌های انسان دیده می‌شود)، سلولِ آسیب‌دیده بی‌وقفه تکثیر شده و سرطانی می‌شود<span class=\"hidden\"></span>."
        },
        {
            question: "در کدام مرحله از تقسیم «میتوز» (Mitosis)، کروموزوم‌ها دقیقاً در صفحه استوایی (وسط) سلول به صف می‌شوند؟",
            options: [
                "پروفاز",
                "متافاز",
                "آنافاز",
                "تلوفاز"
            ],
            answer: 1,
            explanation: "در متافاز (Metaphase)، تمام کروموزوم‌ها توسط میکروتوبول‌های دوک تقسیم به مرکز سلول کشیده شده و در یک خط (صفحه استوایی) ردیف می‌شوند تا برای جدا شدن آماده شوند<span class=\"hidden\"></span>."
        },
        {
            question: "اتفاق کلیدی در مرحله «آنافاز» (Anaphase) چیست؟",
            options: [
                "DNA برای بار دوم کپی می‌شود.",
                "پوشش هسته تشکیل می‌شود.",
                "اتصال کروماتیدهای خواهری شکسته شده و آن‌ها به سمت قطب‌های مخالف سلول کشیده می‌شوند.",
                "میکروتوبول‌ها کاملاً از بین می‌روند."
            ],
            answer: 2,
            explanation: "در آنافاز، پروتئین‌های نگهدارنده کروماتیدها (کوهزین‌ها) شکسته می‌شوند و میکروتوبول‌ها کوتاه شده، کروماتیدهای خواهری را از هم جدا کرده و به قطب‌های سلول می‌کشند<span class=\"hidden\"></span>."
        },
        {
            question: "نقطه بازرسی M (M-Checkpoint یا Spindle checkpoint) در متافاز چه چیزی را کنترل می‌کند؟",
            options: [
                "اینکه آیا محیط بیرون سلول اکسیژن دارد یا نه.",
                "بررسی می‌کند که آیا همه کروموزوم‌ها به درستی به رشته‌های دوک متصل شده‌اند یا خیر، تا توزیع کروموزوم‌ها عادلانه باشد.",
                "اندازه‌گیری مقدار ATP در میتوکندری.",
                "بررسی تعداد پمپ‌های غشا."
            ],
            answer: 1,
            explanation: "نقطه بازرسی M تضمین می‌کند که تمام کینتوکورهای کروموزوم‌ها به میکروتوبول‌های دوک وصل شده باشند. اگر حتی یک کروموزوم وصل نباشد، آنافاز متوقف می‌شود تا از ایجاد سلول‌های با تعداد کروموزوم غیرطبیعی (آنیوپلوئیدی) جلوگیری شود<span class=\"hidden\"></span>."
        },
        {
            question: "ساختار «دوک میتوزی» (Mitotic Spindle) که کروموزوم‌ها را در حین تقسیم جابجا می‌کند، از کدام اسکلت سلولی ساخته شده است؟",
            options: [
                "میکروتوبول‌ها (Microtubules)",
                "رشته‌های اکتین",
                "کلاژن",
                "لامین‌های هسته‌ای"
            ],
            answer: 0,
            explanation: "دوک تقسیم تماماً از میکروتوبول‌ها (پلیمریزاسیون توبولین‌ها) ساخته شده است که از سانتروزوم‌ها در قطبین سلول به سمت کروموزوم‌ها رشد می‌کنند<span class=\"hidden\"></span>."
        },
        {
            question: "پس از پایان میتوز (تقسیم هسته)، فرآیند فیزیکیِ نصف شدن سیتوپلاسم که سلول را به دو سلول مجزا تبدیل می‌کند چه نام دارد و توسط کدام رشته‌ها انجام می‌شود؟",
            options: [
                "آپوپتوز - توسط کلاترین",
                "اگزوسیتوز - توسط پروتئین‌های SNARE",
                "سیتوکینز (Cytokinesis) - توسط حلقه انقباضی متشکل از اکتین و میوزین",
                "پلاسمولیز - توسط میکروتوبول‌ها"
            ],
            answer: 2,
            explanation: "سیتوکینز مرحله نهایی تقسیم است. در سلول‌های حیوانی، یک حلقه انقباضی از جنس رشته‌های اکتین و میوزین در استوای سلول ایجاد می‌شود که با انقباض خود، سلول را از وسط نیشگون گرفته و به دو نیم می‌کند<span class=\"hidden\"></span>."
        }
    ]
},
{
id: "module_28",
    title: "ماژول بیست و هشتم: خودکشی شرافتمندانه سلول",
    subtitle: "آپوپتوز، نکروز، کاسپازها و مسیرهای مرگ برنامه‌ریزی‌شده",
    shortTitle: "۲۸. آپوپتوز و مرگ سلولی",
    content: `
        <div class="space-y-12">
            
            <!-- بنر بلاگری -->
            <div class="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-zinc-800 to-black p-10 text-white shadow-2xl">
                <div class="absolute -left-10 -bottom-10 opacity-20 text-[12rem] leading-none">🥀</div>
                <div class="relative z-10">
                    <span class="inline-block py-1 px-3 rounded-full bg-zinc-700/50 border border-zinc-500/50 text-zinc-300 text-sm font-bold mb-4 backdrop-blur-sm">مرگ برنامه‌ریزی‌شده</span>
                    <h3 class="text-3xl font-black mb-4 leading-tight">آپوپتوز: فداکاری برای بقای کل بدن!</h3>
                    <p class="text-lg text-zinc-200 leading-relaxed text-justify opacity-95 max-w-3xl">
                        روزانه میلیاردها سلول در بدن ما می‌میرند تا ما زنده بمانیم! دست‌های ما در دوران جنینی شبیه پارو است و سلول‌های بین انگشتان باید خودکشی کنند تا انگشتان شکل بگیرند. اگر یک سلول ویروسی یا سرطانی شود و نتواند DNA خود را ترمیم کند، سیستم امنیتی بدن دستور <strong>آپوپتوز (Apoptosis)</strong> می‌دهد. این یک مرگ تمیز، بی‌صدا و کاملاً برنامه‌ریزی‌شده است<span class="hidden"></span>.
                    </p>
                </div>
            </div>

            <!-- آپوپتوز در برابر نکروز -->
            <div class="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
                <div class="absolute top-0 right-0 w-2 h-full bg-zinc-600"></div>
                <h4 class="text-xl font-black text-slate-800 mb-6 flex items-center gap-3">
                    <span class="text-2xl">⚔️</span> دو نوع مرگ: نکروز (انفجار) در برابر آپوپتوز (فروریزش)
                </h4>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="bg-red-50 p-6 rounded-2xl border border-red-200">
                        <h5 class="text-red-800 font-bold text-lg mb-3 flex items-center gap-2">💥 نکروز (Necrosis) - مرگ کثیف</h5>
                        <ul class="space-y-2 text-sm text-red-700 leading-relaxed text-justify list-disc list-inside font-medium">
                            <li><strong>علت:</strong> آسیب فیزیکی، سموم، سوختگی یا کمبود شدید اکسیژن.</li>
                            <li><strong>اتفاقات:</strong> سلول متورم می‌شود، غشای آن می‌ترکد و تمام محتویات (و آنزیم‌های هضم‌کننده) به بیرون می‌ریزد.</li>
                            <li><strong>نتیجه:</strong> باعث آسیب به سلول‌های مجاور و ایجاد <strong>التهاب شدید</strong> می‌شود<span class="hidden"></span>.</li>
                        </ul>
                    </div>

                    <div class="bg-zinc-100 p-6 rounded-2xl border border-zinc-300">
                        <h5 class="text-zinc-800 font-bold text-lg mb-3 flex items-center gap-2">🍂 آپوپتوز (Apoptosis) - مرگ تمیز</h5>
                        <ul class="space-y-2 text-sm text-zinc-700 leading-relaxed text-justify list-disc list-inside font-medium">
                            <li><strong>علت:</strong> دستور ژنتیکی درون‌سلولی یا سیگنال‌های مرگ از بیرون.</li>
                            <li><strong>اتفاقات:</strong> سلول چروکیده می‌شود، DNA آن قطعه‌قطعه شده و سلول به بسته‌های کوچکی به نام <strong>اجسام آپوپتوزی (Apoptotic bodies)</strong> تبدیل می‌شود.</li>
                            <li><strong>نتیجه:</strong> ماکروفاژها این بسته‌ها را می‌خورند و <strong>هیچ التهابی</strong> رخ نمی‌دهد<span class="hidden"></span>!</li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- ماشین آلات مرگ -->
            <div class="bg-slate-800 text-slate-200 p-8 rounded-3xl shadow-lg relative overflow-hidden mt-8">
                <div class="absolute -left-20 -bottom-20 w-64 h-64 bg-red-600/20 rounded-full blur-3xl"></div>
                <h4 class="text-xl font-black text-red-400 mb-6 flex items-center gap-3">
                    <span class="text-3xl">✂️</span> کاسپازها (Caspases): قیچی‌های مولکولی
                </h4>
                <p class="text-slate-300 leading-loose text-justify mb-6">
                    موتور اصلی آپوپتوز، خانواده‌ای از آنزیم‌های پروتئاز به نام <strong>کاسپاز</strong> است. آن‌ها در حالت عادی به شکل غیرفعال (پروکاسپاز) در سلول هستند. وقتی فعال شوند، یک <strong>آبشار</strong> غیرقابل بازگشت راه می‌افتد که اسکلت سلول، هسته و DNA را قطعه‌قطعه می‌کند. کاسپازها از دو مسیر فعال می‌شوند:
                </p>

                <div class="space-y-4">
                    <div class="bg-slate-700/50 p-5 rounded-2xl border border-slate-600">
                        <strong class="text-rose-400 text-lg block mb-2">۱. مسیر داخلی (میتوکندریایی)</strong>
                        <p class="text-sm text-slate-400 leading-relaxed text-justify">
                            وقتی سلول آسیب می‌بیند (مثلاً توسط اشعه UV یا آسیب DNA)، پروتئین‌های خانواده Bcl-2 وارد عمل می‌شوند. آن‌ها باعث می‌شوند غشای میتوکندری سوراخ شده و <strong>سیتوکروم C</strong> به داخل سیتوزول نشت کند. سیتوکروم C با پروتئین‌های دیگر یک «چرخ مرگ» به نام <strong>آپوپتوزوم</strong> می‌سازد که کاسپازها را روشن می‌کند<span class="hidden"></span>.
                        </p>
                    </div>
                    
                    <div class="bg-slate-700/50 p-5 rounded-2xl border border-slate-600">
                        <strong class="text-orange-400 text-lg block mb-2">۲. مسیر خارجی (گیرنده‌های مرگ)</strong>
                        <p class="text-sm text-slate-400 leading-relaxed text-justify">
                            سلول‌های ایمنی (مثل لنفوسیت‌های T کشنده) می‌توانند به یک سلول آلوده نزدیک شوند و لیگاندهای مرگ (مثل Fas ligand) را به <strong>گیرنده‌های مرگ (Fas receptor)</strong> روی سطح سلولِ هدف متصل کنند. این اتصال مستقیماً کاسپازها را در داخل سلول فعال می‌کند و دستور اجرای اعدام را می‌دهد<span class="hidden"></span>.
                        </p>
                    </div>
                </div>

                <!-- سیگنال مرا بخور -->
                <div class="mt-6 p-4 bg-emerald-900/30 border border-emerald-500/50 rounded-xl flex items-start gap-4 relative z-10">
                    <span class="text-2xl mt-1">🍽️</span>
                    <div>
                        <strong class="text-emerald-300 block mb-1">سیگنال «مرا بخور» برای ماکروفاژها!</strong>
                        <p class="text-sm text-emerald-100 leading-relaxed text-justify">
                            همانطور که در ماژول‌های غشا خواندیم، در حین آپوپتوز، آنزیم اسکرامبلاز فعال شده و لیپید <strong>فسفاتیدیل‌سرین</strong> را به لایه خارجی غشا می‌آورد. این پرچم قرمز به ماکروفاژها می‌گوید که سلول مرده است و باید به سرعت خورده شود تا محتویاتش نشت نکند<span class="hidden"></span>!
                        </p>
                    </div>
                </div>
            </div>

        </div>
    `,
    quiz: [
        {
            question: "واژه «آپوپتوز» (Apoptosis) در زیست‌شناسی به چه معناست؟",
            options: [
                "تورم و ترکیدن سلول در اثر کمبود اکسیژن.",
                "مرگ برنامه‌ریزی‌شده و کنترل‌شده سلول که در طول تکوین طبیعی یا در پاسخ به آسیب‌های غیرقابل ترمیم رخ می‌دهد.",
                "تقسیم بی‌رویه سلول‌های سرطانی.",
                "تجمع چربی در داخل سلول‌های کبد."
            ],
            answer: 1,
            explanation: "آپوپتوز یا مرگ برنامه‌ریزی‌شده سلول (Programmed Cell Death)، یک فرآیند طبیعی، بی‌صدا و بسیار منظم است که برای حذف سلول‌های ناخواسته، آسیب‌دیده یا اضافی در بدن استفاده می‌شود<span class=\"hidden\"></span>."
        },
        {
            question: "کدام یک از موارد زیر از ویژگی‌های بارز «نکروز» (Necrosis) است که آن را از آپوپتوز متمایز می‌کند؟",
            options: [
                "سلول چروکیده می‌شود و به اجسام آپوپتوزی تبدیل می‌گردد.",
                "هیچ‌گونه التهابی در بافت اطراف ایجاد نمی‌کند.",
                "سلول به دلیل آسیب حاد متورم شده، غشای آن پاره می‌شود و با ریختن محتویاتش به بیرون، باعث التهاب شدید می‌شود.",
                "نیازمند مصرف انرژی (ATP) بسیار بالایی توسط خود سلول برای مردن است."
            ],
            answer: 2,
            explanation: "نکروز یک مرگ «کثیف» و تصادفی ناشی از آسیب‌های فیزیکی، شیمیایی یا کمبود خون است که در آن سلول می‌ترکد. محتویات داخل سلول (از جمله آنزیم‌های لیزوزومی) وارد فضای بافتی شده و پاسخ التهابی شدیدی را تحریک می‌کند<span class=\"hidden\"></span>."
        },
        {
            question: "هنگام آپوپتوز، از نظر مورفولوژیکی (ظاهری) چه اتفاقی برای سلول می‌افتد؟",
            options: [
                "سلول متورم شده و غشای آن ذوب می‌شود.",
                "سلول چروکیده می‌شود، اسکلت سلولی فرو می‌ریزد، غشا حباب‌زده (Blebbing) شده و به بسته‌های کوچکی به نام «اجسام آپوپتوزی» تقسیم می‌شود.",
                "سلول تبدیل به یک ماکروفاژ می‌شود.",
                "اندازه سلول ده برابر بزرگ‌تر می‌شود."
            ],
            answer: 1,
            explanation: "در آپوپتوز، سلول دچار انقباض (چروکیدگی) می‌شود، کروماتین متراکم شده، هسته قطعه‌قطعه می‌شود و غشای سلول با ایجاد حباب‌هایی به داخل خودش پیچیده و اجسام آپوپتوزیِ تمیزی را می‌سازد<span class=\"hidden\"></span>."
        },
        {
            question: "آنزیم‌های پروتئازی که نقش اصلی را به عنوان «قیچی‌های مولکولی» و مجریان فرآیند آپوپتوز بر عهده دارند، چه نامیده می‌شوند؟",
            options: [
                "کینازها (Kinases)",
                "کاسپازها (Caspases)",
                "لیگازها (Ligases)",
                "هلیکازها (Helicases)"
            ],
            answer: 1,
            explanation: "کاسپازها (Caspases) خانواده‌ای از پروتئازها هستند که موتور اصلی مرگ سلولی محسوب می‌شوند. فعال شدن آبشاریِ این آنزیم‌ها، پروتئین‌های حیاتی سلول (مثل لامین‌های هسته و اسکلت سلولی) را تخریب کرده و مرگ سلول را قطعی می‌کند<span class=\"hidden\"></span>."
        },
        {
            question: "در «مسیر داخلی» (Intrinsic pathway) آپوپتوز، نشت کدام مولکول حیاتی از درون میتوکندری به داخل سیتوزول، ماشه مرگ را می‌کشد؟",
            options: [
                "اکسیژن خالص (O2)",
                "ATP Synthase",
                "سیتوکروم C (Cytochrome c)",
                "کلسیم (Ca2+)"
            ],
            answer: 2,
            explanation: "در مسیر داخلی (که توسط آسیب‌های DNA یا استرس فعال می‌شود)، نفوذپذیری غشای خارجی میتوکندری افزایش یافته و پروتئین سیتوکروم C (که قبلاً در زنجیره الکترون نقش داشت) به سیتوزول نشت می‌کند و آبشار کاسپازها را فعال می‌سازد<span class=\"hidden\"></span>."
        },
        {
            question: "سیتوکروم C پس از ورود به سیتوزول، به همراه پروتئین Apaf-1 ساختار چرخ‌دنده‌مانند بزرگی را می‌سازد تا کاسپازها را فعال کند. نام این کمپلکس چیست؟",
            options: [
                "اسپکترین",
                "سانتروزوم",
                "آپوپتوزوم (Apoptosome)",
                "پروتئازوم"
            ],
            answer: 2,
            explanation: "سیتوکروم C به پروتئین‌های آداپتوری به نام Apaf-1 متصل می‌شود و این مجموعه‌ها به شکل یک چرخ بزرگ به نام «آپوپتوزوم» (Apoptosome) مونتاژ می‌شوند. آپوپتوزوم وظیفه فعال کردن اولین کاسپازهای مسیر داخلی را بر عهده دارد<span class=\"hidden\"></span>."
        },
        {
            question: "کدام گروه از پروتئین‌ها نقش کلیدی در تنظیمِ نفوذپذیری میتوکندری و تصمیم‌گیری برای فعال شدن «مسیر داخلی» آپوپتوز دارند؟",
            options: [
                "خانواده پروتئین‌های Bcl-2 (شامل پروتئین‌های پیش‌مرگ و ضدمرگ)",
                "خانواده کلاژن‌ها",
                "خانواده پمپ‌های سدیم-پتاسیم",
                "گروه آنزیم‌های RNA پلیمراز"
            ],
            answer: 0,
            explanation: "خانواده پروتئین‌های Bcl-2، تنظیم‌کننده‌های اصلی مسیر داخلی آپوپتوز هستند. تعادل بین اعضای ضدآپوپتوزی (مثل خود Bcl-2) و اعضای پیش‌آپوپتوزی (مثل Bax و Bak) تعیین می‌کند که آیا سیتوکروم C از میتوکندری خارج شود یا خیر<span class=\"hidden\"></span>."
        },
        {
            question: "در «مسیر خارجی» (Extrinsic pathway) آپوپتوز، فرمان مرگ از کجا صادر می‌شود؟",
            options: [
                "از طریق نشت سیتوکروم C از میتوکندری خود سلول.",
                "از طریق اتصال لیگاندهای مرگ (مانند Fas) از سلول‌های ایمنی به «گیرنده‌های مرگ» در سطح غشای سلول هدف.",
                "از طریق هجوم یون‌های کلر به داخل سلول.",
                "از طریق جهش خودبه‌خودی در DNA."
            ],
            answer: 1,
            explanation: "مسیر خارجی زمانی فعال می‌شود که سیگنال‌های مرگ از بیرون سلول برسند. مثلاً سلول‌های T کشنده، لیگاند Fas را به گیرنده‌های مرگ (Fas Receptors) روی سطح سلول آلوده یا سرطانی متصل کرده و مستقیم کاسپازها را در داخل آن سلول فعال می‌کنند<span class=\"hidden\"></span>."
        },
        {
            question: "همانطور که در ماژول‌های قبل آموختید، کدام تغییر لیپیدی در سطح خارجی غشا به عنوان سیگنال «مرا بخور» (Eat-me signal) به ماکروفاژها عمل می‌کند تا اجسام آپوپتوزی را ببلعند؟",
            options: [
                "تجمع فراوان کلسترول در لایه خارجی",
                "قرار گرفتن «فسفاتیدیل‌سرین» (که به طور طبیعی در لایه داخلی است) در تک‌لایه خارجی غشای پلاسمایی",
                "اضافه شدن پلیمری از قند فروکتوز",
                "حذف کامل پروتئین گلیکوفورین"
            ],
            answer: 1,
            explanation: "در طول آپوپتوز، با فعال شدن اسکرامبلاز، فسفاتیدیل‌سرین به سطح بیرونی سلول منتقل می‌شود. ماکروفاژها گیرنده‌هایی برای تشخیص این لیپید دارند و بلافاصله جسم آپوپتوزی را فاگوسیتوز (بلع) می‌کنند بدون اینکه التهابی رخ دهد<span class=\"hidden\"></span>."
        },
        {
            question: "کدام پروتئین نگهبان (که در بازرسی G2 چرخه سلولی نیز نقش داشت)، در صورت کشف آسیب‌های شدید و غیرقابل ترمیم در DNA، دستور آپوپتوز را صادر می‌کند؟",
            options: [
                "پروتئین p53",
                "پروتئین Rb",
                "پمپ کلسیم",
                "کلاژناز"
            ],
            answer: 0,
            explanation: "پروتئین p53 به عنوان نگهبان ژنوم، در صورت بروز آسیب شدید به DNA، ابتدا چرخه سلولی را متوقف می‌کند. اما اگر آسیب به حدی باشد که ترمیم نشود، p53 با فعال کردن پروتئین‌های خانواده Bcl-2 (مسیر داخلی)، سلول را به سمت آپوپتوز می‌فرستد تا از سرطانی شدن آن جلوگیری کند<span class=\"hidden\"></span>."
        }
    ]
},
{
id: "module_29",
    title: "ماژول بیست و نهم: چسب‌ها و سیمان‌های سلولی",
    subtitle: "اتصالات بین‌سلولی، دسموزوم‌ها و ماتریکس خارج سلولی (ECM)",
    shortTitle: "۲۹. اتصالات و ماتریکس",
    content: `
        <div class="space-y-12">
            
            <!-- بنر بلاگری -->
            <div class="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-stone-600 to-neutral-900 p-10 text-white shadow-2xl">
                <div class="absolute -left-10 -bottom-10 opacity-20 text-[12rem] leading-none">🧱</div>
                <div class="relative z-10">
                    <span class="inline-block py-1 px-3 rounded-full bg-neutral-700/50 border border-neutral-500/50 text-stone-200 text-sm font-bold mb-4 backdrop-blur-sm">بافت‌شناسی سلولی</span>
                    <h3 class="text-3xl font-black mb-4 leading-tight">چگونه میلیاردها سلول از هم نمی‌پاشند؟</h3>
                    <p class="text-lg text-stone-200 leading-relaxed text-justify opacity-95 max-w-3xl">
                        اگر بدن ما فقط مجموعه‌ای از سلول‌های شناور بود، شبیه یک کیسه آب از هم می‌پاشیدیم! سلول‌ها برای ساختن بافت‌ها (مثل پوست، قلب یا روده) باید با چسب‌ها و میخ‌های پروتئینی به یکدیگر و به محیط اطرافشان بچسبند. به این میخ‌ها <strong>اتصالات سلولی (Cell Junctions)</strong> می‌گویند. در ضمن، فضای خالی بین سلول‌ها با یک داربست ژله‌ای و مستحکم به نام <strong>ماتریکس (ECM)</strong> پر می‌شود<span class="hidden"></span>.
                    </p>
                </div>
            </div>

            <!-- انواع اتصالات سلولی -->
            <div class="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
                <div class="absolute top-0 right-0 w-2 h-full bg-stone-500"></div>
                <h4 class="text-xl font-black text-slate-800 mb-6 flex items-center gap-3">
                    <span class="text-2xl">🔗</span> ۳ نوع اتصال اصلی بین سلول‌ها
                </h4>
                
                <div class="space-y-6">
                    <!-- اتصالات محکم -->
                    <div class="bg-blue-50 p-5 rounded-2xl border border-blue-100 flex items-start gap-4">
                        <div class="text-3xl mt-1">🤐</div>
                        <div>
                            <strong class="text-blue-800 text-lg block mb-2">۱. اتصالات محکم (Tight Junctions) - عایق‌بندی ضدآب!</strong>
                            <p class="text-sm text-blue-700 leading-relaxed text-justify">
                                این اتصالات، غشای دو سلول مجاور را مانند زیپِ پلاستیکی به هم می‌دوزند تا هیچ ماده‌ای (حتی آب) نتواند از بین سلول‌ها نشت کند. پروتئین‌های <strong>کلودین و اوکلودین</strong> این زیپ را می‌سازند.
                            </p>
                            <p class="text-xs text-blue-600 mt-2 font-bold">مکان: روده‌ها (تا اسید معده یا باکتری‌ها نشت نکنند) و سد خونی-مغزی (BBB).</p>
                        </div>
                    </div>

                    <!-- اتصالات لنگری -->
                    <div class="bg-rose-50 p-5 rounded-2xl border border-rose-100 flex items-start gap-4">
                        <div class="text-3xl mt-1">⚓</div>
                        <div>
                            <strong class="text-rose-800 text-lg block mb-2">۲. اتصالات لنگری (Desmosomes) - جوشکاری نقطه‌ای!</strong>
                            <p class="text-sm text-rose-700 leading-relaxed text-justify">
                                برای مقاومت در برابر کشش (مثل پوست). دسموزوم‌ها سلول‌ها را با پروتئین‌هایی به نام <strong>کادهرین (وابسته به کلسیم)</strong> به هم وصل می‌کنند. در داخل سلول، این اتصالات به <strong>رشته‌های کراتین (اسکلت سلولی)</strong> گره خورده‌اند تا سلول پاره نشود<span class="hidden"></span>. (<em>همی‌دسموزوم: سلول را به جای سلولِ دیگر، به زمین یا غشای پایه وصل می‌کند</em>).
                            </p>
                        </div>
                    </div>

                    <!-- اتصالات شکاف‌دار -->
                    <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-100 flex items-start gap-4">
                        <div class="text-3xl mt-1">⚡</div>
                        <div>
                            <strong class="text-emerald-800 text-lg block mb-2">۳. اتصالات شکاف‌دار (Gap Junctions) - تونل‌های ارتباطی!</strong>
                            <p class="text-sm text-emerald-700 leading-relaxed text-justify">
                                این اتصالات لوله‌های پروتئینی (از جنس <strong>کانکسین</strong>) هستند که سیتوپلاسم دو سلول را به هم وصل می‌کنند. یون‌ها و پیام‌های الکتریکی با سرعت نور از این تونل‌ها عبور می‌کنند.
                            </p>
                            <p class="text-xs text-emerald-600 mt-2 font-bold">مکان: عضله قلب (تا تمام سلول‌های قلب همزمان و با هم منقبض شوند)<span class="hidden"></span>.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- ماتریکس خارج سلولی و اینتگرین -->
            <div class="bg-slate-800 text-slate-200 p-8 rounded-3xl shadow-lg relative overflow-hidden mt-8">
                <div class="absolute -right-20 -bottom-20 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl"></div>
                <h4 class="text-xl font-black text-orange-400 mb-6 flex items-center gap-3">
                    <span class="text-3xl">🕸️</span> ماتریکس خارج سلولی (ECM) و پل ارتباطی
                </h4>
                <p class="text-slate-300 leading-loose text-justify mb-6">
                    فضای اطراف سلول‌ها خالی نیست. سلول‌ها خودشان شبکه‌ای از پروتئین‌ها و قندها ترشح می‌کنند که مثل داربست یا سیمان عمل می‌کند. این شبکه (ECM) دو جزء اصلی دارد:
                </p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div class="bg-slate-700/50 p-6 rounded-2xl border border-slate-600">
                        <h5 class="text-orange-300 font-black text-lg mb-3">۱. کلاژن (Collagen)</h5>
                        <p class="text-sm text-slate-400 leading-relaxed text-justify">
                            فراوان‌ترین پروتئین بدن (۲۵٪ کل پروتئین‌ها). رشته‌های کلاژن مثل کابل‌های فولادی عمل کرده و <strong>مقاومت کششی</strong> بی‌نظیری به بافت می‌دهند (مثل استخوان، تاندون و پوست)<span class="hidden"></span>.
                        </p>
                    </div>

                    <div class="bg-slate-700/50 p-6 rounded-2xl border border-slate-600">
                        <h5 class="text-orange-300 font-black text-lg mb-3">۲. پروتئوگلیکان‌ها</h5>
                        <p class="text-sm text-slate-400 leading-relaxed text-justify">
                            مولکول‌هایی به شدت قندی (مثل هیالورونان) که آب بسیار زیادی را به خود جذب می‌کنند. آن‌ها به شکل یک ژل درمی‌آیند که <strong>مقاومت فشاری</strong> بافت (مثل غضروف زانو) را تأمین می‌کنند تا در اثر وزن له نشود<span class="hidden"></span>.
                        </p>
                    </div>
                </div>
                
                <div class="mt-6 p-5 bg-indigo-900/40 border border-indigo-500/50 rounded-xl">
                    <strong class="text-indigo-300 text-lg block mb-2">اینتگرین‌ها (Integrins): پل بین درون و بیرون</strong>
                    <p class="text-sm text-indigo-100 leading-relaxed text-justify">
                        سلول برای وصل شدن به این ماتریکس بیرونی، از گیرنده‌های غشایی به نام <strong>اینتگرین</strong> استفاده می‌کند. اینتگرین‌ها در بیرونِ سلول به ECM (مثلاً به فیبرونکتین) می‌چسبند و در درونِ سلول به <strong>اسکلت اکتینی</strong> گره می‌خورند. این ارتباط باعث می‌شود سلول بتواند محیط اطرافش را حس کند<span class="hidden"></span>.
                    </p>
                </div>
            </div>

        </div>
    `,
    quiz: [
        {
            question: "وظیفه اصلی «اتصالات محکم» (Tight Junctions) در بافت‌های اپیتلیال چیست؟",
            options: [
                "انتقال پیام‌های الکتریکی بین سلول‌ها.",
                "اتصال اسکلت سلولی دو سلول مجاور برای مقاومت در برابر کشش.",
                "ایجاد یک عایق و سد ضدآب برای جلوگیری از نشت مواد محلول از فضای بین سلول‌ها.",
                "تولید پروتئین کلاژن."
            ],
            answer: 2,
            explanation: "اتصالات محکم (Tight junctions) مانند یک زیپ ضدآب غشای دو سلول مجاور را به هم می‌دوزند تا سدی نفوذناپذیر ایجاد کنند (مثلاً در روده، مانع از نشت باکتری‌ها و اسید به داخل بافت‌های زیرین می‌شوند)<span class=\"hidden\"></span>."
        },
        {
            question: "پروتئین‌های عبورکننده از غشا که اجزای اصلی تشکیل‌دهنده «اتصالات محکم» (Tight Junctions) هستند، چه نام دارند؟",
            options: [
                "کادهرین‌ها",
                "کلودین‌ها و اوکلودین‌ها (Claudins & Occludins)",
                "کانکسین‌ها",
                "اینتگرین‌ها"
            ],
            answer: 1,
            explanation: "رشته‌های آب‌بندی کننده در اتصالات محکم عمدتاً از پروتئین‌های غشایی به نام کلودین و اوکلودین ساخته شده‌اند<span class=\"hidden\"></span>."
        },
        {
            question: "«دسموزوم‌ها» (Desmosomes) که اتصالات لنگری قدرتمندی هستند، در داخل سلول به کدام بخش از اسکلت سلولی متصل می‌شوند تا استحکام مکانیکی ایجاد کنند؟",
            options: [
                "میکروتوبول‌ها",
                "رشته‌های اکتین",
                "رشته‌های بینابینی (مانند کراتین)",
                "لامینای هسته"
            ],
            answer: 2,
            explanation: "دسموزوم‌ها مانند جوشکاری نقطه‌ای عمل کرده و دو سلول را به هم می‌چسبانند. در داخل سلول، این اتصالات به کابل‌های قدرتمند رشته‌های بینابینی (مثل کراتین در سلول‌های اپیتلیال) گره می‌خورند تا از پاره شدن بافت در برابر کشش جلوگیری کنند<span class=\"hidden\"></span>."
        },
        {
            question: "پروتئین‌های چسباننده در دسموزوم‌ها (کادهرین‌ها) برای عملکرد صحیح و چسبیدن به هم، به کدام یون به شدت وابسته‌اند؟",
            options: [
                "سدیم (Na+)",
                "کلسیم (Ca2+)",
                "پتاسیم (K+)",
                "آهن (Fe2+)"
            ],
            answer: 1,
            explanation: "نام کادهرین (Cadherin) مخفف Calcium-dependent adhesion است. این پروتئین‌ها برای تغییر شکل و چسبیدن به کادهرین‌های سلول مجاور، به وجود یون کلسیم در محیط خارج سلولی نیازمندند<span class=\"hidden\"></span>."
        },
        {
            question: "نقش اصلی «اتصالات شکاف‌دار» (Gap Junctions) در بافت‌هایی مانند عضله قلب چیست؟",
            options: [
                "جلوگیری از عبور آب.",
                "ایجاد ارتباط مستقیم سیتوپلاسمی برای عبور سریع یون‌ها و هماهنگ کردن انقباض همزمان تمام سلول‌های قلب.",
                "اتصال قلب به دنده‌ها.",
                "ترشح هورمون آدرنالین."
            ],
            answer: 1,
            explanation: "اتصالات شکاف‌دار تونل‌های پروتئینی هستند که اجازه می‌دهند یون‌ها و پیام‌های الکتریکی بدون تأخیر از یک سلول به سلول دیگر بروند. این امر باعث می‌شود تمام سلول‌های عضله قلب به طور هماهنگ و همزمان منقبض شوند<span class=\"hidden\"></span>."
        },
        {
            question: "پروتئین سازنده تونل‌ها در اتصالات شکاف‌دار (Gap junctions) چه نام دارد؟",
            options: [
                "کادهرین",
                "کلاترین",
                "کانکسین (Connexin)",
                "کلاژن"
            ],
            answer: 2,
            explanation: "تونل‌های اتصالات شکاف‌دار از پروتئین‌هایی به نام کانکسین ساخته می‌شوند. شش کانکسین با هم یک استوانه توخالی به نام کانکسون (Connexon) می‌سازند<span class=\"hidden\"></span>."
        },
        {
            question: "«همی‌دسموزوم‌ها» (Hemidesmosomes) چه تفاوتی با دسموزوم‌های معمولی دارند؟",
            options: [
                "نصف اندازه آن‌ها هستند.",
                "به جای اتصال دو سلول به هم، سلول را به ماتریکس خارج سلولی (غشای پایه / Basal Lamina) متصل می‌کنند.",
                "اتصالات سستی هستند که با تغییر دما باز می‌شوند.",
                "برای عبور پروتئین‌های درشت استفاده می‌شوند."
            ],
            answer: 1,
            explanation: "همی‌دسموزوم (نیمه-دسموزوم) ساختاری است که سلول‌های اپیتلیال را محکم به لایه زیرینِ ماتریکس خارج سلولی (لامینای پایه) متصل می‌کند و از کنده شدن بافت جلوگیری می‌نماید<span class=\"hidden\"></span>."
        },
        {
            question: "کدام جزء از ماتریکس خارج سلولی (ECM)، فراوان‌ترین پروتئین بدن پستانداران است و وظیفه اصلی آن ایجاد «مقاومت کششی» در بافت‌هایی مثل استخوان و پوست است؟",
            options: [
                "الاستین",
                "هیالورونان",
                "کلاژن (Collagen)",
                "فیبرونکتین"
            ],
            answer: 2,
            explanation: "کلاژن پروتئینی رشته‌ای و بسیار محکم است که حدود ۲۵ درصد از کل پروتئین‌های بدن را تشکیل می‌دهد و ویژگی اصلی آن ایجاد استحکام و مقاومت در برابر کشیده شدنِ بافت‌هاست<span class=\"hidden\"></span>."
        },
        {
            question: "پروتئوگلیکان‌ها (Proteoglycans) در ماتریکس خارج سلولی به دلیل داشتن زنجیره‌های قندی فراوان (GAGs)، چه نقش فیزیکی مهمی ایفا می‌کنند؟",
            options: [
                "باعث هدایت جریان الکتریکی در مغز می‌شوند.",
                "با جذب حجم عظیمی از آب، یک ژل متورم تشکیل می‌دهند که باعث «مقاومت فشاری» (تحمل فشار و له نشدن) بافت‌هایی مثل غضروف می‌شود.",
                "سلول‌های سرطانی را از بین می‌برند.",
                "باعث تولید ATP در فضای خارج سلول می‌شوند."
            ],
            answer: 1,
            explanation: "مولکول‌های پروتئوگلیکان (که حاوی قندهای هیدروفیل و باردار هستند) به شدت آب را جذب می‌کنند و بافتی ژله‌مانند و متورم می‌سازند که در مفاصل و غضروف‌ها مانند کمک‌فنر عمل کرده و در برابر فشارهای فیزیکی مقاومت می‌کند<span class=\"hidden\"></span>."
        },
        {
            question: "گیرنده غشاییِ «اینتگرین» (Integrin) چگونه به عنوان پل ارتباطی بین سلول و محیط بیرون عمل می‌کند؟",
            options: [
                "با ورود به هسته و تغییر بیان ژن.",
                "از طریق ترشح هیستامین در محیط بیرون.",
                "در بیرون سلول به ماتریکس (مثلاً فیبرونکتین) متصل شده و در داخل سلول به رشته‌های اکتین اسکلت سلولی گره می‌خورد.",
                "با بلعیدن ماتریکس توسط فاگوسیتوز."
            ],
            answer: 2,
            explanation: "اینتگرین‌ها پروتئین‌های گذرنده از غشایی هستند که دست بیرونی آن‌ها به پروتئین‌های ماتریکس خارج سلولی و دم داخلی آن‌ها (از طریق پروتئین‌های واسط) به اسکلت اکتینی سلول متصل است. این ارتباط پیوسته باعث می‌شود سلول فشار و شرایط محیط بیرون را حس کند<span class=\"hidden\"></span>."
        }
    ]
},
{
id: "module_30",
    title: "ماژول سی‌ام: رازهای جاودانگی و طغیان سلولی",
    subtitle: "سلول‌های بنیادی، تلومراز، سرطان و پایان یک سفر شگفت‌انگیز",
    shortTitle: "۳۰. پیری و سرطان",
    content: `
        <div class="space-y-12">
            
            <!-- بنر بلاگری -->
            <div class="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-amber-500 via-yellow-600 to-red-900 p-10 text-white shadow-2xl">
                <div class="absolute -left-10 -bottom-10 opacity-20 text-[12rem] leading-none">⏳</div>
                <div class="relative z-10">
                    <span class="inline-block py-1 px-3 rounded-full bg-red-900/40 border border-red-200/50 text-amber-100 text-sm font-bold mb-4 backdrop-blur-sm">زیست‌شناسی بالینی</span>
                    <h3 class="text-3xl font-black mb-4 leading-tight">چرا پیر می‌شویم؟ آیا جاودانگی ممکن است؟</h3>
                    <p class="text-lg text-amber-50 leading-relaxed text-justify opacity-95 max-w-3xl">
                        در این آخرین ایستگاه از سفرمان در دنیای سلول، می‌خواهیم ببینیم چه چیزی مرز بین زندگی، پیری و مرگ را تعیین می‌کند. چرا سلول‌های بدن ما پس از چند بار تقسیم، پیر شده و می‌میرند، اما سلول‌های سرطانی تا ابد زنده می‌مانند؟ راز این جاودانگی در ساختار انتهای کروموزوم‌ها (تلومر) و سلول‌های جادوییِ «بنیادی» نهفته است<span class="hidden"></span>.
                    </p>
                </div>
            </div>

            <!-- سلول های بنیادی -->
            <div class="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
                <div class="absolute top-0 right-0 w-2 h-full bg-amber-500"></div>
                <h4 class="text-xl font-black text-slate-800 mb-6 flex items-center gap-3">
                    <span class="text-2xl">🌱</span> سلول‌های بنیادی: لوح‌های سفید
                </h4>
                <p class="text-slate-600 leading-loose mb-6 text-justify">
                    بیشتر سلول‌های بدن (مثل عضله یا عصب) <strong>تمایزیافته</strong> هستند؛ یعنی شغلشان مشخص است و دیگر نمی‌توانند تقسیم شوند. اما <strong>سلول‌های بنیادی (Stem Cells)</strong> مانند لوح‌های سفیدی هستند که هم می‌توانند تا ابد خودشان را کپی کنند (نوسازی خود) و هم می‌توانند به سلول‌های دیگر تبدیل شوند<span class="hidden"></span>.
                </p>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="bg-amber-50 p-5 rounded-2xl border border-amber-200">
                        <h5 class="text-amber-800 font-bold text-lg mb-2">۱. سلول‌های پرتوان (Pluripotent)</h5>
                        <p class="text-sm text-amber-700 leading-relaxed text-justify">این سلول‌ها (مانند سلول‌های بنیادی جنینی) توانایی تبدیل شدن به <strong>تمام انواع سلول‌های بدن انسان</strong> (کبد، قلب، مغز و...) را دارند. امید اصلی پزشکی بازساختی هستند<span class="hidden"></span>.</p>
                    </div>
                    <div class="bg-orange-50 p-5 rounded-2xl border border-orange-200">
                        <h5 class="text-orange-800 font-bold text-lg mb-2">۲. سلول‌های چندتوان (Multipotent)</h5>
                        <p class="text-sm text-orange-700 leading-relaxed text-justify">سلول‌های بنیادی بالغین هستند. قدرت محدودی دارند و فقط می‌توانند به <strong>سلول‌های یک بافت خاص</strong> تبدیل شوند (مثل سلول‌های بنیادی مغز استخوان که فقط گلبول‌های خون را می‌سازند)<span class="hidden"></span>.</p>
                    </div>
                </div>
            </div>

            <!-- تلومر و پیری -->
            <div class="bg-slate-800 text-slate-200 p-8 rounded-3xl shadow-lg relative overflow-hidden mt-8">
                <div class="absolute -right-20 -bottom-20 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl"></div>
                <h4 class="text-xl font-black text-cyan-400 mb-4 flex items-center gap-3">
                    <span class="text-3xl">🧬</span> تلومرها: ساعت شنی عمر سلول
                </h4>
                
                <div class="space-y-6">
                    <div class="bg-slate-700/50 p-6 rounded-2xl border border-slate-600">
                        <strong class="text-cyan-300 text-lg block mb-2">تلومر چیست؟ (مشکل انتهای کروموزوم)</strong>
                        <p class="text-sm text-slate-300 leading-relaxed text-justify mb-3">
                            DNA پلیمراز (آنزیمی که DNA را کپی می‌کند) نمی‌تواند انتهای کروموزوم‌های خطی را کپی کند. در نتیجه، با هر بار تقسیم سلولی، کروموزوم ما کمی کوتاه‌تر می‌شود! برای اینکه ژن‌های اصلی ما پاک نشوند، در انتهای کروموزوم‌ها توالی‌های تکراری و بی‌معنیِ عظیمی به نام <strong>تلومر (Telomere)</strong> قرار دارد. تلومرها مثل پلاستیکِ سرِ بند کفش عمل می‌کنند. وقتی تلومرها پس از حدود ۵۰ بار تقسیم کاملاً تمام شوند، سلول پیر شده و می‌میرد (محدودیت هیفلیک)<span class="hidden"></span>.
                        </p>
                    </div>

                    <div class="bg-fuchsia-900/40 p-6 rounded-2xl border border-fuchsia-500/50 flex flex-col justify-center">
                        <h5 class="text-fuchsia-300 font-bold mb-2 flex items-center gap-2">✨ تلومراز (Telomerase): اکسیر جوانی!</h5>
                        <p class="text-sm text-fuchsia-100 leading-relaxed text-justify">
                            آنزیم تلومراز می‌تواند انتهای خورده شده‌ی کروموزوم را دوباره بسازد! این آنزیم در سلول‌های عادیِ بدن <strong>خاموش</strong> است (به همین دلیل ما پیر می‌شویم). اما در <strong>سلول‌های بنیادی</strong> و متاسفانه در <strong>سلول‌های سرطانی</strong> روشن است! سلول سرطانی با روشن کردنِ تلومراز، به زندگی جاودانه دست پیدا می‌کند<span class="hidden"></span>.
                        </p>
                    </div>
                </div>
            </div>

            <!-- سرطان -->
            <div class="bg-red-50 border border-red-200 rounded-3xl p-8 mt-8">
                <h4 class="text-xl font-black text-red-800 mb-6 flex items-center gap-2">
                    <span class="text-3xl">🦀</span> سرطان: طغیان علیه جامعه سلولی
                </h4>
                <p class="text-red-700 leading-loose text-justify text-sm mb-6">
                    سرطان زمانی رخ می‌دهد که ماشین‌آلات تنظیم چرخه سلولی (که در ماژول‌های قبل خواندیم) در اثر جهش‌های ژنتیکی از کار بیفتند. دو دسته ژن در ایجاد سرطان نقش اساسی دارند:
                </p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="bg-white p-5 rounded-2xl border border-red-300 shadow-sm">
                        <h5 class="text-red-600 font-bold mb-2 flex items-center gap-2">🚗 پروتو-آنکوژن‌ها (پدال گاز)</h5>
                        <p class="text-sm text-red-700 leading-relaxed text-justify">
                            در حالت عادی ژن‌های خوبی هستند که دستور رشد می‌دهند (مثل گیرنده فاکتور رشد). اما اگر جهش پیدا کنند و «همیشه روشن» بمانند، به آن‌ها <strong>آنکوژن (ژن سرطان‌زا)</strong> می‌گویند. مثل این است که پدال گاز ماشین گیر کرده باشد<span class="hidden"></span>.
                        </p>
                    </div>
                    
                    <div class="bg-white p-5 rounded-2xl border border-red-300 shadow-sm">
                        <h5 class="text-red-600 font-bold mb-2 flex items-center gap-2">🛑 ژن‌های سرکوبگر تومور (ترمز)</h5>
                        <p class="text-sm text-red-700 leading-relaxed text-justify">
                            ژن‌هایی مثل <strong>p53</strong> و <strong>Rb</strong> که در صورت خرابیِ سلول، ترمز چرخه را می‌کشند یا سلول را وادار به آپوپتوز می‌کنند. در سرطان، این ژن‌ها <strong>خاموش و غیرفعال</strong> می‌شوند. یعنی ماشین با سرعت می‌رود در حالی که ترمزها بریده‌اند<span class="hidden"></span>!
                        </p>
                    </div>
                </div>
            </div>

        </div>
    `,
    quiz: [
        {
            question: "ویژگی اصلی و متمایزکننده «سلول‌های بنیادی» (Stem cells) از سایر سلول‌های بدن چیست؟",
            options: [
                "نمی‌توانند تقسیم شوند و فقط برای انتقال پیام‌های عصبی به کار می‌روند.",
                "قابلیت «نوسازی خود» (Self-renewal) از طریق تقسیم نامتقارن و توانایی تمایز به انواع دیگر سلول‌ها را دارند.",
                "همیشه در چرخه سلولی در فاز G0 متوقف می‌مانند.",
                "فقط در گیاهان وجود دارند."
            ],
            answer: 1,
            explanation: "سلول‌های بنیادی دو ویژگی کلیدی دارند: اول اینکه می‌توانند با تقسیم سلولی نسخه‌های دقیقاً مشابه خودشان را بسازند (Self-renewal) و دوم اینکه می‌توانند تمایز یافته و به سلول‌های تخصصی بدن تبدیل شوند<span class=\"hidden\"></span>."
        },
        {
            question: "سلول‌های بنیادی جنینی انسان به عنوان سلول‌های «پرتوان» (Pluripotent) شناخته می‌شوند. این عبارت به چه معناست؟",
            options: [
                "فقط می‌توانند به سلول‌های عصبی تبدیل شوند.",
                "توانایی تبدیل شدن به تمام انواع سلول‌های بافت‌های مختلف بدن بالغ را دارند.",
                "نمی‌توانند به هیچ سلول دیگری تبدیل شوند.",
                "فقط قادرند گلبول‌های قرمز را بسازند."
            ],
            answer: 1,
            explanation: "سلول‌های پرتوان (Pluripotent) مانند سلول‌های توده سلولی داخلی (ICM) در جنین، می‌توانند به هر نوع سلولی در بدن انسان (تمامی لایه‌های زاینده) به جز سلول‌های جفت تمایز یابند<span class=\"hidden\"></span>."
        },
        {
            question: "وظیفه ساختاری «تلومرها» در انتهای کروموزوم‌های خطی یوکاریوت‌ها چیست؟",
            options: [
                "تولید انرژی برای چرخه سلولی.",
                "عمل به عنوان توالی‌های تکراری و بی‌معنی که از پاک شدن ژن‌های حیاتی در طول فرآیند کوتاه شدنِ انتهای کروموزوم‌ها (طی هر بار تقسیم) جلوگیری می‌کنند.",
                "اتصال دو کروموزوم مختلف به یکدیگر در مرکز هسته.",
                "کد کردن پروتئین‌های کلاژن."
            ],
            answer: 1,
            explanation: "به دلیل مشکل کپی نشدن کامل انتهای خطیِ DNA توسط آنزیم‌ها، کروموزوم با هر بار تقسیم کوتاه می‌شود. تلومرها کلاه‌های محافظی در انتهای کروموزوم‌ها هستند که فدا می‌شوند تا ژن‌های اصلی دست‌نخورده باقی بمانند<span class=\"hidden\"></span>."
        },
        {
            question: "چرا سلول‌های سرطانی بر خلاف سلول‌های طبیعی بدن، دچار پیری نشده و می‌توانند به صورت «نامحدود» (Immortal) در محیط کشت تقسیم شوند؟",
            options: [
                "زیرا دارای غشای ضخیم‌تری هستند.",
                "زیرا ژن آنزیم «تلومراز» (Telomerase) در آن‌ها مجدداً روشن و فعال شده است و طول تلومرها را دائماً ترمیم می‌کند.",
                "زیرا از نور خورشید فتوسنتز می‌کنند.",
                "زیرا چرخه سلولی ندارند و به روش باکتریایی تقسیم می‌شوند."
            ],
            answer: 1,
            explanation: "آنزیم تلومراز در سلول‌های پیکری (سوماتیک) خاموش است که منجر به پیری و مرگ نهایی سلول می‌شود. اما بیش از ۹۰ درصد سلول‌های سرطانی با روشن کردن مجدد تلومراز، از کوتاه شدن کروموزوم جلوگیری کرده و جاودانه می‌شوند<span class=\"hidden\"></span>."
        },
        {
            question: "در زیست‌شناسی سرطان، اصطلاح «پروتو-آنکوژن» (Proto-oncogene) به چه ژن‌هایی گفته می‌شود؟",
            options: [
                "ژن‌های ویروسی که از بیرون وارد سلول می‌شوند.",
                "ژن‌های طبیعی سلول که رشد و تکثیر را تحریک می‌کنند، اما اگر دچار جهشِ «افزایش عملکرد» شوند به آنکوژن (سرطان‌زا) تبدیل می‌گردند.",
                "ژن‌هایی که دستور مرگ برنامه‌ریزی‌شده (آپوپتوز) می‌دهند.",
                "ژن‌هایی که فقط مسئول رنگ چشم و مو هستند."
            ],
            answer: 1,
            explanation: "پروتو-آنکوژن‌ها ژن‌های کاملاً طبیعی و ضروری بدن هستند (مانند ژن‌های گیرنده‌های فاکتور رشد). جهش در آن‌ها (مثل گیر کردن پدال گاز) باعث می‌شود که به آنکوژن تبدیل شده و دستور رشد مداوم و سرطانی صادر کنند<span class=\"hidden\"></span>."
        },
        {
            question: "ژن‌های «سرکوبگر تومور» (Tumor Suppressor Genes) مانند p53 و Rb چه نقشی در سلول سالم دارند؟",
            options: [
                "نقش پدال گاز را دارند و سلول را به تقسیم وادار می‌کنند.",
                "به عنوان «ترمز» عمل کرده و در صورت وجود آسیب در DNA، چرخه سلولی را متوقف کرده و از تقسیمِ سلول‌های معیوب جلوگیری می‌کنند.",
                "آنزیم تلومراز را تولید می‌کنند.",
                "فقط در سلول‌های گیاهی یافت می‌شوند."
            ],
            answer: 1,
            explanation: "ژن‌های سرکوبگر تومور، سیستم امنیتی سلول هستند. آن‌ها مراقب صحت ژنوم بوده و اگر آسیبی ببینند ترمز چرخه را می‌کشند. در سلول‌های سرطانی، این ژن‌ها (ترمزها) معمولاً در اثر جهش خاموش و غیرفعال می‌شوند<span class=\"hidden\"></span>."
        },
        {
            question: "خطرناک‌ترین مرحله در پیشرفت بیماری سرطان که باعث مرگ اکثر بیماران می‌شود، پدیده «متاستاز» (Metastasis) است. متاستاز یعنی چه؟",
            options: [
                "بزرگ شدن اندازه تومور اولیه در همان محل.",
                "جدا شدن سلول‌های سرطانی از تومور اولیه، نفوذ به جریان خون یا لنف، و مهاجرت برای ایجاد تومورهای ثانویه در سایر اندام‌های بدن.",
                "خودکشی ناگهانی تمام سلول‌های سرطانی.",
                "تغییر رنگ سلول‌های تومور."
            ],
            answer: 1,
            explanation: "متاستاز زمانی رخ می‌دهد که سلول‌های سرطانی توانایی چسبندگی به همسایگان خود را از دست داده، از بافت اصلی خارج شده و از طریق رگ‌ها به اندام‌های دوردست (مثل کبد، ریه و مغز) سفر می‌کنند و کلنی‌های جدیدی می‌سازند<span class=\"hidden\"></span>."
        },
        {
            question: "تومورها برای تأمین اکسیژن و مواد غذاییِ مورد نیاز برای رشد سریع خود، پروتئین‌هایی مانند VEGF ترشح می‌کنند. این فرآیند چه نام دارد؟",
            options: [
                "آپوپتوز",
                "رگزایی یا آنژیوژنز (Angiogenesis)",
                "پینوسیتوز",
                "گلیکولیز بی‌هوازی"
            ],
            answer: 1,
            explanation: "تومورها برای زنده ماندن و بزرگ شدن، رگ‌های خونی جدیدی را به سمت خود می‌کشانند. به این فرآیند ایجاد رگ‌های خونی جدید توسط تومور، آنژیوژنز (Angiogenesis) می‌گویند که یکی از ویژگی‌های بارز سرطان است<span class=\"hidden\"></span>."
        },
        {
            question: "«محدودیت هیفلیک» (Hayflick limit) چه پدیده‌ای را در سلول‌های انسانی توصیف می‌کند؟",
            options: [
                "حداکثر دمایی که یک سلول می‌تواند تحمل کند.",
                "حداکثر تعداد دفعاتی (حدود ۵۰ بار) که یک سلول سوماتیک طبیعی می‌تواند در محیط کشت تقسیم شود، قبل از اینکه به دلیل کوتاهی تلومرها متوقف شده و پیر شود.",
                "محدودیت سرعت پمپ سدیم-پتاسیم.",
                "حداکثر اندازه و قطر غشای پلاسمایی."
            ],
            answer: 1,
            explanation: "لئونارد هیفلیک کشف کرد که سلول‌های طبیعی انسان جاودانه نیستند و پس از تعداد معینی تقسیم (بین ۴۰ تا ۶۰ بار)، به دلیل اتمام تلومرها وارد فاز پیری (Senescence) شده و دیگر تقسیم نمی‌شوند<span class=\"hidden\"></span>."
        },
        {
            question: "سوال پایانی: با توجه به تمام ماژول‌هایی که مطالعه کردید، کدام جمله درباره «زیست‌شناسی سلولی» دقیق‌تر است؟",
            options: [
                "سلول صرفاً کیسه‌ای پر از مایع و آنزیم است که واکنش‌ها به صورت تصادفی در آن رخ می‌دهند.",
                "سلول یک ماشینِ فوق‌هوشمند، بسیار سازمان‌یافته و پر از پروتئین‌های تخصصی، اسکلت‌های پویا، پمپ‌های انرژی و سیستم‌های امنیتی پیچیده است که با دقت نانومتری کار می‌کنند.",
                "میتوکندری‌ها به تنهایی برای زنده ماندن کل بدن کافی هستند و نیاز به هسته و غشا نیست.",
                "غشای پلاسمایی هیچ کنترلی بر ورود و خروج مواد ندارد و صرفاً مرز فیزیکی است."
            ],
            answer: 1,
            explanation: "از معماری دقیق غشا تا موتورهای اسکلت سلولی، پمپ‌های انرژی، سیستم‌های پستی وزیکولی و نقاط بازرسی چرخه سلولی، همه نشان می‌دهند که سلول یک کلان‌شهر فوق‌پیشرفته، منظم و به شدت سازمان‌یافته است<span class=\"hidden\"></span>."
        }
    ]
}
];