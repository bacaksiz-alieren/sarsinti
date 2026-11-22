import type { BuildingData, CityConfig, TimelineEvent, ComparisonMetric } from '../types'

export const lisbonConfig: CityConfig = {
  id: 'lisbon',
  name: 'Lizbon',
  subtitle: 'Portekiz Başkenti',
  period: '1750–1800',
  description:
    '1755 depremi öncesinde Lizbon, zengin bir ticaret şehri olarak Tejo Nehri kıyısına kurulmuştu. 1 Kasım 1755 sabahı yaşanan yıkıcı deprem ve ardından gelen tsunami, kentin büyük bölümünü yerle bir etti. Pombal Markisi önderliğinde yürütülen yeniden yapılanma, modern şehir planlaması anlayışının en önemli öncüllerinden biri sayılmaktadır.',
  historicalNote:
    'Bu model, 1755 öncesi ve 1755 sonrası Lizbon hakkındaki tarihsel kayıtlardan esinlenerek oluşturulmuş temsili bir canlandırmadır. Birebir harita veya mimari doğruluk iddiası taşımaz.',
  earthquakeInfo:
    '1 Kasım 1755\'te gerçekleşen deprem ve ardından gelen tsunami, Lizbon tarihinin en yıkıcı doğal afetlerinden biri olarak kayıtlara geçmiştir. Şehrin büyük bölümü yerle bir oldu; ardından çıkan yangınlar günlerce sürdü ve on binlerce kişi hayatını kaybetti. Yoğun yapılaşma ile dar sokaklar hem yapısal tahribatı hem de can kayıplarını önemli ölçüde artırdı. Bu felaket, modern şehir planlamasına yönelik yeniden düşünme sürecini tetikledi.',
  coordinates: { lat: 38.72, lng: -9.14 },
  layers: [
    { id: 'buildings', label: 'Yapılar', color: '#c06030', visible: true },
    { id: 'streets', label: 'Sokaklar', color: '#8899aa', visible: true },
    { id: 'openSpaces', label: 'Açık Alanlar', color: '#3a7a4a', visible: true },
    { id: 'gatheringPoints', label: 'Toplanma Alanları', color: '#e06030', visible: true },
    { id: 'commercialZones', label: 'Ticaret Bölgeleri', color: '#a050c0', visible: true },
    { id: 'coastalZones', label: 'Kıyı Bölgeleri', color: '#2060c0', visible: true },
    { id: 'mainRoads', label: 'Ana Yollar', color: '#d0d0d0', visible: true },
  ],
}

// 1755 öncesi Lizbon — yoğun ve düzensiz ortaçağ dokusu
export const lisbonHistoricalBuildings: BuildingData[] = [
  // === Kiliseler ===
  {
    id: 'lis-h-church-1',
    type: 'church',
    position: [0, 0, 0],
    size: [4, 5, 7],
    floors: 2,
    material: 'Taş, Barok süsleme',
    color: '#c8b490',
    roofColor: '#706050',
    label: 'Büyük Kilise',
    description: 'Şehir merkezindeki kilise yapısı.',
    historicalContext:
      'Lizbon\'da çok sayıda büyük kilise bulunmaktaydı; bu yapılar şehrin en önemli simgeleri arasındaydı. 1755 depremi bu yapıların büyük bölümünü tahrip etti ya da tamamen yıktı.',
    planningNote:
      'Kilise ve çevresindeki geniş meydanlar, kalabalık mahallelerde sınırlı açık alanlar sağlıyordu.',
    riskNote:
      'Ağır taş kule ve cephe sistemleri, ciddi bir sarsıntıda çökme tehlikesi taşımaktaydı; nitekim 1755\'te bu endişe gerçeğe dönüştü.',
    layer: 'buildings',
  },
  {
    id: 'lis-h-church-2',
    type: 'church',
    position: [12, 0, 8],
    size: [3, 4, 5],
    floors: 2,
    material: 'Taş ve kireç sıva',
    color: '#c0aa88',
    roofColor: '#685848',
    label: 'Mahalle Kilisesi',
    description: 'Yoğun bir mahalleye hizmet eden küçük mahalle kilisesi.',
    historicalContext:
      'Küçük mahalle kiliseleri, 1755 öncesinde Lizbon dokusunda yaygın bir unsurdu.',
    planningNote: 'Mahalle kiliseleri sosyal yaşamın merkeziydi; ancak çevrelerini sıklıkla yoğun konut dokusu sarmaktaydı.',
    riskNote: 'Yoğun çevre yapılar, yapısal hasar ve yangın yayılma riskini önemli ölçüde artırmaktaydı.',
    layer: 'buildings',
  },

  // === Konutlar ===
  {
    id: 'lis-h-res-1',
    type: 'residence',
    position: [4, 0, 5],
    size: [1.8, 4.2, 1.6],
    floors: 3,
    material: 'Taş ve kireç sıva, ahşap döşemeler',
    color: '#d4a870',
    roofColor: '#784030',
    label: 'Şehir Evi',
    description: 'Lizbon\'un kalabalık şehir merkezinden üç katlı geleneksel konut.',
    historicalContext:
      'Lizbon konutları genellikle üç ila beş katlı yapılardı; birbirine oldukça yakın, kimi zaman ortak duvar paylaşacak biçimde yan yana yükselirdi.',
    planningNote: 'Yüksek yapı yoğunluğu ve dar sokaklar, ulaşımı ve tahliyeyi ciddi biçimde kısıtlıyordu.',
    riskNote: 'Çok katlı yapılar, üst katlardan düşen enkaz nedeniyle daha geniş bir tehlike alanı oluşturuyordu.',
    layer: 'buildings',
  },
  {
    id: 'lis-h-res-2',
    type: 'residence',
    position: [6.2, 0, 5],
    size: [1.8, 4.5, 1.6],
    floors: 3,
    material: 'Taş ve kireç sıva',
    color: '#c89860',
    roofColor: '#6a3828',
    label: 'Şehir Evi',
    description: 'Bitişik nizam yapılaşmaya katılan tipik konut.',
    historicalContext: 'Bitişik yapılar Lizbon\'un konut dokusunda hâkimdi.',
    planningNote: 'Bitişik nizam yapılar, hem hasar hem de yangın yayılmasını hızlandıran bir faktördü.',
    riskNote: 'Ortak duvarlar, komşu yapıların birbirini etkileyerek hasar görmesine zemin hazırlamaktaydı.',
    layer: 'buildings',
  },
  {
    id: 'lis-h-res-3',
    type: 'residence',
    position: [4, 0, 7.4],
    size: [1.8, 3.8, 1.6],
    floors: 3,
    material: 'Taş ve kireç sıva',
    color: '#d09060',
    roofColor: '#703020',
    label: 'Dar Şehir Evi',
    description: 'Tarihi dokunun dar ve uzun parsel yapısına uygun tipik bir ev.',
    historicalContext:
      'Lizbon\'un dar parselleri, benzer genişlikte uzun yapıların yan yana sıralanmasıyla oluşan bir kentsel doku yaratıyordu.',
    planningNote: 'Dar cepheli yapılar, her taşınmazın sınırlı yol cephesine sahip olmasına yol açıyordu.',
    riskNote: 'Uzun ve dar yapılar, enine sismik kuvvetlere karşı yapısal açıdan daha kırılgandı.',
    layer: 'buildings',
  },
  ...generateLisbonResidentialCluster(-8, 5, 'lis-h-cluster-a'),
  ...generateLisbonResidentialCluster(8, -5, 'lis-h-cluster-b'),
  ...generateLisbonResidentialCluster(-5, -8, 'lis-h-cluster-c'),
  ...generateLisbonResidentialCluster(15, 5, 'lis-h-cluster-d'),

  // === Liman ===
  {
    id: 'lis-h-harbor-1',
    type: 'harbor',
    position: [0, 0, -20],
    size: [10, 1.5, 4],
    floors: 1,
    material: 'Taş iskele, ahşap depo yapıları',
    color: '#909080',
    roofColor: '#605848',
    label: 'Tejo Limanı',
    description: 'Portekiz ticaret imparatorluğunun ana limanı.',
    historicalContext:
      'Tejo Nehri kıyısındaki Lizbon limanı, Portekiz\'in deniz aşırı ticaret ağının merkezi olarak döneminin en işlek limanlarından biriydi.',
    planningNote: 'Yoğun liman trafiği, kalabalık ve sıkışık bir kıyı bölgesi yaratıyordu.',
    riskNote: '1755 tsunamisi, bu kıyı bölgesinde son derece yıkıcı hasara yol açtı.',
    layer: 'coastalZones',
  },

  // === Hükümet Yapıları ===
  {
    id: 'lis-h-govt-1',
    type: 'government',
    position: [3, 0, -12],
    size: [6, 3, 5],
    floors: 2,
    material: 'Taş, Barok mimari',
    color: '#d4c090',
    roofColor: '#a08040',
    label: 'Hükümet Binası',
    description: 'Şehir yönetiminin faaliyetlerini yürüttüğü idari yapı.',
    historicalContext:
      'Lizbon\'daki önemli hükümet binaları, liman yakınında ve şehrin merkezi konumundaki alanlarda yer almaktaydı.',
    planningNote:
      'İdari yapılar, çevrelerinde belirli ölçüde açık alan bırakacak şekilde inşa edilmişti.',
    riskNote: 'Ağır Barok taş yapılar, liman konumlarıyla birlikte ciddi sismik ve tsunami riski altındaydı.',
    layer: 'buildings',
  },

  // === Çarşı / Ticaret ===
  {
    id: 'lis-h-market-1',
    type: 'market',
    position: [-5, 0, -5],
    size: [4, 2, 6],
    floors: 1,
    material: 'Taş kemer',
    color: '#a89070',
    roofColor: '#706050',
    label: 'Ticaret Çarşısı',
    description: 'Yabancı tüccarların da rağbet ettiği ticaret alanı.',
    historicalContext:
      'Lizbon\'un ticaret çarşıları liman yakınında konumlanmış; hem yerli hem yabancı tüccarlara hizmet sunmaktaydı.',
    planningNote: 'Çarşı bölgesi her zaman kalabalık ve gürültülüydü.',
    riskNote: 'Yoğun kalabalık + taş yapılar kombinasyonu, 1755\'teki can kayıplarında belirleyici bir etken oldu.',
    layer: 'commercialZones',
  },

  // === Kule ===
  {
    id: 'lis-h-tower-1',
    type: 'tower',
    position: [-15, 0, -15],
    size: [3, 7, 3],
    floors: 4,
    material: 'Kesme taş',
    color: '#a09080',
    roofColor: '#706050',
    label: 'Kıyı Kulesi',
    description: 'Liman girişini gözeten ve koruyan kıyı savunma kulesi.',
    historicalContext:
      'Lizbon limanının korunmasında kule ve kaleler kritik bir rol üstlenmekteydi.',
    planningNote: 'Kule, kıyı güvenliği açısından stratejik bir konum tutmaktaydı.',
    riskNote: 'Kıyı konumlama, tsunami riski açısından son derece tehlikeliydi.',
    layer: 'coastalZones',
  },
]

function generateLisbonResidentialCluster(
  baseX: number,
  baseZ: number,
  prefix: string,
): BuildingData[] {
  const positions: [number, number, number][] = [
    [0, 0, 0], [1.9, 0, 0], [3.8, 0, 0], [5.7, 0, 0],
    [0, 0, 2.2], [1.9, 0, 2.2], [3.8, 0, 2.2],
    [0, 0, 4.4], [1.9, 0, 4.4], [3.8, 0, 4.4],
  ]
  const heights = [3.8, 4.2, 3.6, 4.0, 3.9, 4.1, 3.7, 4.3, 3.5, 4.0]
  const colors = ['#d4a870', '#c89860', '#d09060', '#c89050', '#d09870', '#c88850', '#d4a060', '#cc9460', '#d0a068', '#c89458']

  return positions.map((pos, i) => ({
    id: `${prefix}-${i}`,
    type: 'residence' as const,
    position: [baseX + pos[0] + (Math.sin(i * 0.9) * 0.3), 0, baseZ + pos[2] + (Math.cos(i * 1.1) * 0.3)],
    size: [1.7 + (i % 3) * 0.1, heights[i], 1.6 + (i % 2) * 0.15],
    floors: Math.floor(heights[i] / 1.4),
    material: 'Taş ve kireç sıva, ahşap döşemeler',
    color: colors[i],
    roofColor: '#784030',
    label: 'Şehir Evi',
    description: '1755 öncesi Lizbon\'dan tipik bir konut.',
    historicalContext: 'Bu tür yapılar 1755 depreminde ağır hasar gördü.',
    planningNote: 'Yoğun ve düzensiz yerleşim, hem tahribatı hem de can kaybını artırdı.',
    riskNote: 'Çok katlı taş yapılar sarsıntıda çökerek dar sokakları kapattı.',
    layer: 'buildings' as const,
  }))
}

// Pombal'ın yeniden inşa planından esinlenen ama özgün bir alternatif plan
export const lisbonResilientBuildings: BuildingData[] = [
  // === Izgara Sistemi ===
  ...generateLisbonGridCluster(-12, -12, 'lis-r-grid-a'),
  ...generateLisbonGridCluster(-12, 2, 'lis-r-grid-b'),
  ...generateLisbonGridCluster(2, -12, 'lis-r-grid-c'),
  ...generateLisbonGridCluster(2, 2, 'lis-r-grid-d'),
  ...generateLisbonGridCluster(-12, 16, 'lis-r-grid-e'),
  ...generateLisbonGridCluster(2, 16, 'lis-r-grid-f'),

  // === Merkezi Meydan ===
  {
    id: 'lis-r-square-1',
    type: 'square',
    position: [-2, 0, -2],
    size: [8, 0.1, 8],
    floors: 0,
    material: 'Taş döşeme, açık kamu meydanı',
    color: '#90b080',
    roofColor: '#90b080',
    label: 'Merkezi Meydan (Praça Principal)',
    description: 'Şehir merkezini düzenleyen büyük açık meydan.',
    historicalContext:
      'Pombal\'ın yeniden inşa planı, Terreiro do Paço\'yu kentin odak noktası olarak belirledi. Benzer bir merkezi meydan, bizim alternatif planımızın da temel unsurudur.',
    planningNote: 'Büyük merkezi meydan hem şehrin yönlenmesine hem de acil toplanmaya hizmet eder.',
    riskNote: 'Açık meydanlar, şehir bütününde en güvenli alanlar olarak öne çıkmaktadır.',
    layer: 'openSpaces',
  },

  // === Mahalle Toplanma Alanları ===
  {
    id: 'lis-r-gather-1',
    type: 'square',
    position: [-12, 0, -2],
    size: [4, 0.1, 4],
    floors: 0,
    material: 'Taş döşeme',
    color: '#7aaa70',
    roofColor: '#7aaa70',
    label: 'Mahalle Meydanı',
    description: 'Batı mahallesi için planlı toplanma noktası.',
    historicalContext: 'Önerilen planda her mahalleye ayrı bir toplanma noktası belirlenmiştir.',
    planningNote: 'Stratejik konumlandırılmış meydanlar, güvenli tahliyeyi kolaylaştırmaktadır.',
    riskNote: 'Açık alanlar, yapısal çöküş tehlikesinin en düşük olduğu noktalardır.',
    layer: 'gatheringPoints',
  },
  {
    id: 'lis-r-gather-2',
    type: 'square',
    position: [12, 0, -2],
    size: [4, 0.1, 4],
    floors: 0,
    material: 'Taş döşeme',
    color: '#7aaa70',
    roofColor: '#7aaa70',
    label: 'Mahalle Meydanı',
    description: 'Doğu mahallesi için planlı toplanma noktası.',
    historicalContext: 'Toplanma noktaları şehrin tamamına dengeli biçimde dağıtılmıştır.',
    planningNote: 'Birden fazla toplanma noktası, herhangi bir alanın tıkanmasını önler.',
    riskNote: 'Meydanlara erişimi sağlayan geniş yollar, kaçış güzergâhlarını açık tutmaktadır.',
    layer: 'gatheringPoints',
  },

  // === Güçlendirilmiş Liman ===
  {
    id: 'lis-r-harbor-1',
    type: 'harbor',
    position: [0, 0, -20],
    size: [10, 1.5, 4],
    floors: 1,
    material: 'Güçlendirilmiş taş iskele, kademeli kıyı yapılaşması',
    color: '#a0a890',
    roofColor: '#707860',
    label: 'Planlı Liman Bölgesi',
    description: 'Tsunami ve kıyı riskleri dikkate alınarak yapılandırılmış liman.',
    historicalContext:
      'Pombal\'ın liman yaklaşımı, kıyı güçlendirmesini ve yaşamsal tesislerin konumlandırılmasını ön plana çıkardı.',
    planningNote: 'Liman yapıları geliştirilmiş erişim ve acil durum güzergâhlarıyla planlanmıştır.',
    riskNote: 'Yükseltilmiş depo yapıları ve güçlendirilmiş iskeleler, kıyı riskine karşı direnci artırmaktadır.',
    layer: 'coastalZones',
  },

  // === Meydana Bakan Hükümet Yapıları ===
  {
    id: 'lis-r-govt-1',
    type: 'government',
    position: [-3, 0, -13],
    size: [6, 3, 5],
    floors: 2,
    material: 'Taş, 18. yüzyıl yapı teknikleriyle sağlamlaştırılmış',
    color: '#d4c090',
    roofColor: '#a08040',
    label: 'Planlı Hükümet Binası',
    description: 'Merkezi meydanla bütünleşik olarak konumlandırılmış idari yapı.',
    historicalContext:
      'Pombal\'ın planında devlet binaları meydana göre simetrik biçimde düzenlendi. Bizim planımız bu ilkeden esinlenmektedir.',
    planningNote: 'Meydana açılan hükümet binaları, güvenli erişim ve kamu görünürlüğü sağlamaktadır.',
    riskNote: 'Merkezi meydan konumu, acil dönemlerde yönetim koordinasyonunu kolaylaştırmaktadır.',
    layer: 'buildings',
  },

  // === Kiliseler — Daha Güvenli Tasarım ===
  {
    id: 'lis-r-church-1',
    type: 'church',
    position: [0, 0, 10],
    size: [4, 4.5, 6],
    floors: 2,
    material: 'Taş, daha düşük cephe profiline sahip tasarım',
    color: '#c8b488',
    roofColor: '#7a6050',
    label: 'Yeniden Tasarlanan Kilise',
    description: 'Daha güvenli bir yapı anlayışıyla yeniden inşa edilen kilise.',
    historicalContext:
      'Lizbon\'un yeniden yapılanmasında bazı kiliseler daha alçak ve sağlam olacak biçimde yeniden inşa edildi.',
    planningNote: 'Planlı yerleşim, kilisenin çevresinde yeterli açık alan bırakmaktadır.',
    riskNote: 'Daha alçak cephe profili, çevre alanlara yönelik enkaz riskini azaltmaktadır.',
    layer: 'buildings',
  },

  // === Ticaret Bölgesi ===
  {
    id: 'lis-r-market-1',
    type: 'market',
    position: [-5, 0, -15],
    size: [5, 2.5, 5],
    floors: 2,
    material: 'Taş, düzenli cephe düzeni',
    color: '#c09870',
    roofColor: '#806050',
    label: 'Planlı Ticaret Çarşısı',
    description: 'Merkezi meydana yakın konumlandırılmış ticaret bölgesi.',
    historicalContext:
      'Pombal\'ın planında ticaret bölgesi meydanın yakınına alındı ve yeniden düzenlendi.',
    planningNote: 'Planlı ticaret bölgesi, liman ve şehir merkezi arasındaki bağlantıyı güçlendirmektedir.',
    riskNote: 'Düzenli yapılaşma ve geniş erişim yolları, tahliye sürecini önemli ölçüde iyileştirmektedir.',
    layer: 'commercialZones',
  },
]

function generateLisbonGridCluster(
  baseX: number,
  baseZ: number,
  prefix: string,
): BuildingData[] {
  // Daha küçük boyutlu, düzenli ızgara planı; aralarında boşluklar bırakılmış
  const gridPositions: [number, number, number][] = [
    [0, 0, 0], [4, 0, 0], [8, 0, 0],
    [0, 0, 4], [4, 0, 4], [8, 0, 4],
    [0, 0, 8], [4, 0, 8], [8, 0, 8],
  ]
  const heights = [3.2, 3.5, 3.2, 3.5, 3.0, 3.5, 3.2, 3.5, 3.2]
  const colors = ['#d4a870', '#c8a070', '#d0aa78', '#cca068', '#d4a870', '#c89860', '#cca070', '#d0a868', '#c8a060']

  return gridPositions.map((pos, i) => ({
    id: `${prefix}-${i}`,
    type: 'resilient_residence' as const,
    position: [baseX + pos[0], 0, baseZ + pos[2]],
    size: [3.2, heights[i], 3.2],
    floors: 2,
    material: 'Taş, güçlendirilmiş ahşap iç destek sistemi, kademeli kat yükseklikleri',
    color: colors[i],
    roofColor: '#7a5040',
    label: 'Planlı Konut Birimi',
    description: 'Dayanıklı şehir planında ızgara düzeninde inşa edilmiş konut.',
    historicalContext:
      'Pombal dönemi yeniden inşa planından esinlenen bu yaklaşım, daha dayanıklı bir yapı sistemi ve daha iyi bir konum-düzen ilişkisi sunmaktadır.',
    planningNote: 'Izgara sistemi, hem yönlenmeyi hem de güzergâh erişimini kolaylaştırmaktadır.',
    riskNote: 'Ahşap iç destek sistemi, güçlü bir sarsıntı sırasında belirli bir esneklik sağlamaktadır.',
    layer: 'buildings' as const,
  }))
}

export const lisbonTimeline: TimelineEvent[] = [
  {
    year: '1147',
    title: 'Lizbon\'un Fethi',
    description:
      'Portekiz\'in Moorların elinden geri aldığı Lizbon, ülkenin başkenti ilan edildi. Ortaçağdan miras kalan yoğun ve düzensiz şehir dokusu ilerleyen yüzyıllarda da büyük ölçüde korundu.',
    type: 'construction',
  },
  {
    year: '1500ler',
    title: 'Deniz Ticaretinin Zirvesi',
    description:
      'Lizbon, Portekiz\'in deniz aşırı ticaret imparatorluğunun merkezi olarak dünya ölçeğinde en büyük ve en zengin şehirlerden biri haline geldi. Liman ve çevre konut alanları hızla yoğunlaştı.',
    type: 'construction',
  },
  {
    year: '1755',
    title: '1 Kasım 1755 — Büyük Deprem',
    description:
      'Tüm Azizler Günü\'nde sabah saatlerinde, halkın büyük bölümünün kilisede olduğu bir anda güçlü bir deprem şehri sarstı. Birkaç kez tekrarlayan sarsıntıların ardından gelen tsunami ve günlerce süren yangınlar, Lizbon\'un büyük bölümünü yerle bir etti. On binlerce kişi hayatını kaybetti.',
    type: 'earthquake',
  },
  {
    year: '1755–1756',
    title: 'Pombal\'ın Müdahalesi',
    description:
      'I. José\'nin baş danışmanı Pombal Markisi Sebastião de Melo, hızlı ve disiplinli bir müdahaleyle şehrin yeniden inşasını yönlendirdi. Paniğe kapılmak yerine "Ölüleri defnedin, dirilere bakın" ilkesiyle hareket etti.',
    type: 'reform',
  },
  {
    year: '1756–1775',
    title: 'Pombaline Yeniden Yapılanma',
    description:
      'Pombal Markisi yeni bir şehir planı hayata geçirdi: geniş yollar, düzenli ızgara sistemi ve titizlikle çizilmiş meydanlar. Bu yaklaşım, günümüz afet sonrası şehir planlamasının öncüsü sayılmaktadır.',
    type: 'planning',
  },
  {
    year: '1775',
    title: 'Yeni Lizbon\'un Tamamlanması',
    description:
      'Pombaline tarzında yeniden inşa edilen Baixa (alçak şehir) büyük ölçüde tamamlandı. Yeni şehir dokusu, Pombaline Baixa adıyla tarihsel belleğe ve mimari mirasa kazındı.',
    type: 'construction',
  },
  {
    year: '1800',
    title: 'Modern Şehir Planlaması Mirası',
    description:
      'Lizbon\'un yeniden inşası, 18. yüzyılın en kapsamlı şehircilik deneyimlerinden biri olarak plancılara ve araştırmacılara ilham vermeyi sürdürmektedir.',
    type: 'planning',
  },
]

export const lisbonComparison: ComparisonMetric[] = [
  { label: 'Sokak Sistemi', historical: 'Ortaçağdan miras düzensiz ağ', resilient: 'Planlı ızgara sistemi, birbirine dik yollar' },
  { label: 'Cadde Genişliği', historical: 'Çoğu sokak 2–4 m', resilient: 'Ana caddeler 10–14 m, ara yollar 6–8 m' },
  { label: 'Yapı Yoğunluğu', historical: 'Son derece yüksek, bitişik nizam', resilient: 'Orta düzey; yapılar arası planlı boşluklar' },
  { label: 'Meydan Sistemi', historical: 'Küçük kilise meydanları, kısıtlı açık alan', resilient: 'Merkezi büyük meydan + mahalle meydanları' },
  { label: 'Yapı Yüksekliği', historical: 'Denetlenmemiş 3–5 katlı yapılar', resilient: '2–3 katlı yapılar, denetlenen yükseklik sınırı' },
  { label: 'Ahşap Kullanımı', historical: 'Üst katlarda yaygın, denetlenmemiş', resilient: 'İç destek sistemine entegre ahşap (gaiola)' },
  { label: 'Kıyı Planlaması', historical: 'Liman kenarına kadar yoğun yapılaşma', resilient: 'Kıyı açık alanı + güçlendirilmiş yapılar' },
]
