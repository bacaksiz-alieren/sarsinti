import type { EducationTopic } from '../types'

export const educationTopics: EducationTopic[] = [
  {
    id: 'urban-planning-role',
    title: 'Şehir Planlamasının Rolü',
    icon: '🏙️',
    content: [
      'Şehir planlaması, bir kentin deprem gibi doğal afetlere karşı direncini belirleyen en kritik etkenlerden biridir.',
      'Yapıların konumlanma biçimi, sokakların genişliği, açık alanların dağılımı ve ulaşım ağının düzeni; afet sırasında hem can kaybını hem de altyapı hasarını doğrudan etkiler.',
      '18. yüzyılda bu anlayış henüz sistematik bir çerçeveye kavuşmamıştı. Lizbon\'un 1755 sonrasında yeniden inşası, planlı bir şehir tasarımının afet direncine somut katkısını gösteren dönüm noktası niteliğinde bir örnek sunar.',
    ],
  },
  {
    id: 'wide-roads',
    title: 'Geniş Yolların Önemi',
    icon: '🛣️',
    content: [
      'Geniş yollar, bina çökmelerinde kaçış güzergâhlarının açık kalmasını sağlar. Dar sokaklarda, karşılıklı binaların çökmesiyle oluşan enkaz, bu güzergâhları tamamen kapatabilir.',
      'Geniş caddeler, kurtarma ekiplerine ve acil yardım araçlarına gerekli manevra alanı tanır.',
      'Yangın durumunda geniş caddeler, ateşin bir yakasından diğerine geçmesini zorlaştırarak ilerlemeyi yavaşlatır.',
      '18. yüzyılda İstanbul ve 1755 öncesi Lizbon\'daki pek çok sokak yalnızca birkaç metre genişliğindeydi; bu durum, afet anındaki erişim imkânlarını ciddi biçimde kısıtlıyordu.',
    ],
  },
  {
    id: 'open-spaces',
    title: 'Açık Alanların Önemi',
    icon: '🌳',
    content: [
      'Meydanlar, parklar ve açık avlular, afet anında insanların tehlikeden uzaklaşabileceği güvenli toplanma noktaları işlevi görür.',
      'Açık alanlar yangın koridoru oluşmasını engeller; böylece yangının bitişik yapılar üzerinden yayılmasını önler.',
      'İyi dağıtılmış açık alanlar, olası bir kriz sonrasında halkın bulunduğu yerde barınmasına olanak tanır.',
      '18. yüzyılda büyük cami avluları ya da merkezi meydanlar, genellikle bir şehirdeki tek anlamlı açık alanlardı.',
    ],
  },
  {
    id: 'density',
    title: 'Yapı Yoğunluğu',
    icon: '🏘️',
    content: [
      'Yüksek yapı yoğunluğu, binaların birbirine çok yakın ya da bitişik olması anlamına gelir; bu durum afet riskini katlamalı biçimde artırır.',
      'Bitişik yapılarda birinin çökmesi komşu yapıları da tehdit edebilir.',
      'Yoğun yerleşimde yangın son derece hızlı yayılır.',
      'Yüksek yoğunluk, dar ve kıvrımlı sokak dokusuyla el ele gider; bu ise tahliyeyi ve kurtarma operasyonlarını ağırlaştırır.',
      'Yapılar arasına yeterli mesafe bırakmak, bireysel yapı performansı kadar belirleyici bir güvenlik faktörüdür.',
    ],
  },
  {
    id: 'historical-techniques',
    title: 'Tarihsel Yapı Teknikleri',
    icon: '🔨',
    content: [
      'Farklı yapı malzemeleri ve teknikleri, sismik güçlere karşı farklı davranışlar sergiler.',
      'Ahşap çatkı sistemleri belirli bir esnekliğe sahiptir ve düşük ile orta yoğunluktaki sarsıntılarda taş yapılara kıyasla daha iyi direnç gösterebilir; ancak yangına karşı son derece kırılgandır.',
      'Ağır taş ve tuğla yapılar sağlamdır; fakat güçlü bir sarsıntıda çökerek tehlikeli enkaz yığınları oluşturabilir.',
      'Lizbon\'un 1755 sonrasında geliştirilen "gaiola" (kafes) yapı sistemi, duvarlara yerleştirilen bir ahşap iskelet çerçevesine dayanıyordu. Bu sistem, hem esneklik hem de yapısal bütünlük sağlayarak ahşap ile taşın avantajlarını bir arada sunmaya çalışıyordu.',
      'Bu teknikler günümüzün modern mühendislik çözümlerinden bağımsız olarak ele alınmalıdır; 18. yüzyıl bilgi ve teknolojisiyle ulaşılmış başarıları temsil etmektedir.',
    ],
  },
  {
    id: 'lisbon-1755',
    title: '1755 Lizbon Depremi',
    icon: '🌊',
    content: [
      '1 Kasım 1755 sabahı gerçekleşen deprem, tahminlere göre Richter ölçeğinde 8,5 ile 9,0 büyüklüğüne ulaşmıştır.',
      'Deprem, günümüz Portekizce adıyla Tüm Azizler Günü\'nde sabah saat 09:40 civarında meydana geldi; halkın büyük çoğunluğu o saatte kilisedeydi.',
      'İlk sarsıntıların ardından yaklaşık 40 dakika sonra Tejo Nehri\'nden dev dalgalar şehre ulaştı.',
      'Deprem, tsunami ve üç gün boyunca süren yangınların birleşimi Lizbon\'un büyük bölümünü yerle bir etti. Tahminlere göre 10.000 ile 100.000 arasında kişi hayatını kaybetti.',
      'Yoğun ve düzensiz kent dokusu ile dar sokaklar, hem can kaybının hem de maddi hasarın bu denli büyük boyutlara ulaşmasında belirleyici bir rol oynadı.',
      'Bu deprem, Avrupa\'da modern afet yönetiminin ve sistematik şehir planlamasının öncüsü sayılan Pombaline yeniden yapılanmasını tetikledi.',
    ],
  },
  {
    id: 'istanbul-history',
    title: 'İstanbul\'un Tarihsel Deprem Deneyimi',
    icon: '⚡',
    content: [
      'İstanbul, kuzey Anadolu fay hattının yakınında yer almaktadır. Bu nedenle şehir, tarihi boyunca önemli depremlerin merkezi ya da etki alanı olmuştur.',
      '1509 depremi, dönemin kaynakları tarafından "Küçük Kıyamet" olarak nitelendirilerek yaşadığı yıkım kaydedilmiştir.',
      '1766 depremi başta büyük camiler olmak üzere pek çok tarihi yapıya ciddi hasar verdi.',
      '18. yüzyılda İstanbul\'un yoğun ahşap konut dokusu, yapısal açıdan kırılgandı. Üstelik sık yaşanan büyük yangınlar, deprem kadar ağır tahribat bırakmaktaydı.',
      'Şehrin topografik yapısı ve onu çevreleyen su kütleleri, bölgenin sismik karakterini daha da karmaşık bir hale getirmekteydi.',
    ],
  },
  {
    id: 'reconstruction',
    title: 'Deprem Sonrası Yeniden Yapılanma',
    icon: '🔄',
    content: [
      'Lizbon 1755\'in ardından yürütülen yeniden yapılanma sürecine Pombal Markisi önderlik etti. Bu süreç, kapsamlı ve koordineli bir kurtarma ve yeniden inşa planlamasının önemini tüm dünyaya kanıtladı.',
      'Pombal\'ın yaklaşımı; düzenli sokak planları, yapı yüksekliği sınırlamaları ve özel ahşap iskelet sistemine sahip standart yapı tasarımlarını kapsıyordu.',
      'Yeniden yapılanma süreçleri, o günden bugüne şehir tasarımı üzerine yürütülen tartışmaları derinden şekillendirmiştir.',
      'İstanbul\'da da tarihsel afetle yüzleşmeler benzer tartışmaları beraberinde getirmiş; ancak İmparatorluğun karmaşık siyasi ve ekonomik dinamikleri nedeniyle kapsamlı şehir planlama reformları ancak çok daha sonraki dönemlerde hayata geçirilebilmiştir.',
    ],
  },
  {
    id: '18th-century-planning',
    title: '18. Yüzyıl Şehir Planlaması',
    icon: '📜',
    content: [
      '18. yüzyıl Avrupası\'nda ve Osmanlı dünyasında şehirler, çoğunlukla birkaç yüzyıl boyunca organik büyüme ve gelişigüzel eklemelerle şekillenmişti.',
      'Bu dönemde "afete dayanıklı şehir tasarımı" kavramı henüz belirli bir çerçeveye kavuşmamıştı; yine de pek çok fikir, pratik gözlem ve yerel geleneklerden filizlenmeye başlamıştı.',
      'Lizbon\'un 1755 sonrasındaki yeniden yapılanması, olası sismik riskleri açıkça göz önünde bulunduran ilk büyük ölçekli kentsel tasarım deneyimi olarak tarihe geçti.',
      'Osmanlı şehirciliğinde düzen ve estetik ön planda tutulurdu; ancak doğal afet güvenliğini temel alan sistematik bir planlama yaklaşımı, dönemin kamu yönetimi anlayışında henüz belirgin bir yer edinmemişti.',
      'Bu uygulamadaki görselleştirmeler, kavramsal ve eğitim amaçlı olup dönemin bilgi birikiminden ilham almaktadır. Gerçek mühendislik hesabı ya da tarihi doğruluk iddiası taşımamaktadır.',
    ],
  },
]
