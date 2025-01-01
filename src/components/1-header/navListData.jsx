
const NavListData = [
    {id:1, img:'mohamedElDesouki.avif', title: ' محمد الدسوقي Mohamed El Desouki', link: 'UCWX_0VvMxl0_XosvYOZ7O0g'},
    {id:2, img:'elzero.avif', title: 'Elzero Web School', link: 'UCSNkfKl4cU-55Nm-ovsvOHQ'},
    {id:3, img:'codezilla.avif', title: 'Codezilla', link: 'UCveX_0uBOHVHbpV838OGXVA'},
    {id:4, img:'uniqueCoderz.avif', title: 'Unique Coderz Academy',link: 'UCq_xgufsy1KrGsmJq7mFH-g'},
    {id:5, img:'yehiaTech.avif', title: 'يحيى تك Yehia Tech', link: 'UCGP8LgaWO1lLfFQUQ2BA7rA'},
    {id:6, img:'fathy&abusrea.avif', title: 'فتحي و أبوسريع Fathy & Abusrea', link: 'UCJu5uNExWKx1Vrv6Ah5SHfA'},
    {id:7, img:'octuCode.avif', title: 'OctuCodeOctuCode', link: 'UCvqYqoAu_Yp2v3hOBhi6qiQ'},
    {id:8, img:'aliSleem.avif', title: 'Ali Sleem | علي سليم', link: 'UCw42KxUjtJ68yRXIHi6Fe-w'},
    {id:9, img:'aliShahin.avif', title: 'Ali Shahin', link: 'UC4Y8dVfo_-aydzENDmE7wTw'},
    {id:10, img:'bebsata.avif', title: 'اتعلم ببساطة', link: 'UC5COvx1Z8fnfvVkafqL_UZg'},
    {id:11, img:'yallaCode.avif', title: 'Yallacode', link: 'UCuwTHYdMavwEPsZ6OAkXfig'},
    {id:12, img:'webSchool.avif', title: 'محمد يحيى', link: 'UC2Gl0VkJjuMZh2jUkW6GI7Q'},
    {id:13, img:'syntax.avif', title: 'Syntax', link: 'UCNMvR21W292doQIU326HQTQ'},
    {id:14, img:'simpleArab.avif', title: 'Simple Arab Code', link: 'UCdHbeembdjHbbCY5a3ZqXZw'},
    {id:15, img:'shadow.avif', title: 'Shadow Coding', link: 'UC4Hz-ntDHefICIBkutpadBA'},
    {id:16, img:'smoothBytes.avif', title: 'SmoothBytes (Ahmed Magdy)', link: 'UCiOouGMUwmtrH94zYUnlOMQ'},
    {id:17, img:'readaTech.avif', title: 'Reda Tech رضا تك', link: 'UCy_3UvdcT8Ljbz6Md-6b32w'},
    {id:18, img:'mohamedShoShan.avif', title: 'محمد شوشان', link: 'UCtOyb8800Av9Q-7i-l2mYyA'},
    {id:19, img:'mohamedElkashef.avif', title: 'Mohamed Elkashef', link: 'UCFnqbM05-W4VpmzZj36-Kog'},
    {id:20, img:'noorBoi.avif', title: 'NoorBoi Tech', link: 'UCNpJQYA7qh3PyAgMUrA4oxw'},
    {id:21, img:'minaBoules.avif', title: 'Mina Boules Fouad', link: 'UCywDxXiDYW3fDsxN1CtFvEw'},
    {id:22, img:'megaCode.avif', title: 'Mega Code', link: 'UCEwfTBslCkubj_TlTBLNyNA'},
    {id:23, img:'mazen.avif', title: 'Mazen Canada 🇨🇦', link: 'UC0bLYqDH3v-4LgqqzJp9e2Q'},
    {id:24, img:'math.avif', title: 'تراب الماث', link: 'UCuJlicMvOtLYLK8pe2d2jbQ'},
    {id:25, img:'korsat.avif', title: 'كورسات في البرمجة - Korsat X Parmaga', link: 'UCtk1PX6rwD1A4yBsfXTVCcw'},
    {id:26, img:'hassouna.avif', title: 'Hassouna Academy', link: 'UC5PbBz_roYczmUR6gg_OAxw'},
    {id:27, img:'hardCode.avif', title: 'محمود سامي Hard-Code l', link: 'UCN6CFzqrkiEfC93rjywpAhQ'},
    {id:28, img:'ghareeb.avif', title: 'غريب الشيخ || Ghareeb Elshaikh', link: 'UCnGblT_CyMwswTIH9QmJ3YQ'},
    {id:29, img:'fatma.avif', title: 'Fatma Magdy', link: 'UCoqTiDGxa7C7CSDDq8K7_7A'},
    {id:30, img:'elGammal.avif', title: 'AbdurRahman ElGammal', link: 'UCZiV7heCuc_307kI9Ze_7Mw'},
    {id:31, img:'codeZone.avif', title: 'codeZone', link: 'UChCMIwQrelEqLZT7Lt1L5Og'},
    {id:32, img:'devGeeks.avif', title: 'DevGeeks Academy', link: 'UCPpguAKsCona6eJBjWT-2Cw'},
    {id:33, img:'drCode.avif', title: 'DrCode;', link: 'UCV_YCp6YEC74RbgLn3ninag'},
    {id:34, img:'codersCamp.avif', title: 'Coders Camp - Rasha Abdeen', link: 'UCpnMFON8FKbCCHp8GTEYWHw'},
    {id:35, img:'beProgramer.avif', title: 'كن مبرمجا', link: 'UC-TeQlDX3eBHHXvzCb7DH9g'},
    {id:36, img:'abdelrahmanGamal.avif', title: 'Abdelrahman Gamal', link: 'UCbQh1yxBPVhyjB-G_blFFEQ'},
    {id:37, img:'ayaNasser.avif', title: 'Dr. Aya Nasser - د. آية ناصر', link: 'UCqzsLuqrvc-tQQ28fV5SZNQ'},
    {id:38, img:'codingMirror.avif', title: 'CodingMirror', link: 'UCUGC4ks3qfq5fLN8ElzuKhA'},
    {id:39, img:'code.avif', title: 'Code', link: 'UC3UWam15SOjWxg_zCy0tXmw'},  
    {id:40, img:'ahmedElemam.avif', title: 'Ahmed Elemam', link: 'UCYmPRHG8l6LMihiIV6xPhag'},  
    {id:41, img:'codeWithD.avif', title: 'Code With D', link: 'UCo0qWmxZdc1FhAL5emRNzcA'},
    {id:42, img:'softwareTube.avif', title: 'SoftwareTube', link: 'UC2mU-JkQ3kkkc8S6d29UlPA'},
    {id:43, img:'dataSolution.avif', title: 'Data Solutions', link: 'UC1YeuVGPjFX-gKD5aK-Wfug'},
    {id:44, img:'courses4arab.avif', title: 'Courses 4 Arab || اتعلم فى ساعة', link: 'UCs8PwUcH93uchrEZkB8ltNw'},
    {id:45, img:'putcodes.avif', title: 'putcodes', link: 'UC3_wZsZVPqBH04GTwqZHmkQ'},
    {id:46, img:'amrMohamed.avif', title: 'Amr Mohamed', link: 'UCrKr6aiLvFxj1csAUfekiuw'},
    {id:47, img:'ahmedMohamady.avif', title: 'ahmed mohamady', link: 'UCh-Wyi7aWSkvGujc-5FKc4w'},
    {id:48, img:'arabDev.avif', title: 'Arab Developers', link: 'UCGn0UnpR7wbIzSXaKARH2dA'},
    {id:49, img:'mohamedEbrahim.avif', title: 'Mohamed Ebrahim Saad', link: 'UCGbrg29FWhK503HN0KsPkjA'},
    {id:50, img:'codeYehya.jpg', title: 'كَوّدْ مع يحيى', link: 'UC3Gj_7Zaa2pq8TIGPtzRKgQ'},
    {id:51, img:'codeZetta.jpg', title: 'code zetta', link: 'UCTTVfSvYZq4H_MjOsnDDWyA'},
    {id:52, img:'eyad.jpg', title: 'Eyad Alsherif', link: 'UCEPJ5HK6iYLA357Lza8znXA'},
    {id:53, img:'kimzCodes.jpg', title: 'kimz codes', link: 'UC-MNF_TXywelItd7M8d-uHA'},
    {id:54, img:'mo-elrefaey.jpg', title: 'Mahmoud Elrefaey', link: 'UCxqhxQEZBEzsNYiLbE7P5kA'},
    {id:55, img:'mo-mostafa.jpg', title: 'Mohamed Mostafa', link: 'UCTGfjBfJjpbjTv5096uGoKw'},
    {id:56, img:'mo-sharaf.jpg', title: 'mohamed sharaf', link: 'UCipGHaOCcqpEG-kVxClkPxw'},
    {id:57, img:'mona.jpg', title: 'Mona Kandoz', link: 'UCFGib2Krj-I0MYVm7fd8ffQ'},
    {id:58, img:'shababElMostakbal.jpg', title: 'شباب المستقبل للالعاب و التقنية', link: 'UCusjFTtAtkfcR394B1acEXw'},
]

export default NavListData
