import type { BuildingData, CityConfig, TimelineEvent, ComparisonMetric } from '../types'

export const istanbulConfig: CityConfig = {
  id: 'istanbul',
  name: 'İstanbul',
  subtitle: 'Osmanlı Başkenti',
  period: '1750–1800',
  description:
    'XVIII. yüzyılın ikinci yarısında İstanbul, dünyasının en kalabalık şehirlerinden biriydi. Boğaz kıyısına yayılmış yoğun ahşap dokusunun yarattığı yerleşim, tarihi yarımadadaki çarşılar ve camilerle iç içe geçmişti.',
  historicalNote:
    'Bu model, döneme ait tarihsel kaynaklardan esinlenerek oluşturulmuş temsili bir canlandırmadır. Birebir harita veya mimari doğruluk iddiası taşımaz.',
  earthquakeInfo:
    'İstanbul, kuzey Anadolu fay hattının yakınında konumlanmaktadır. XVIII. yüzyılda şehir, ahşap ağırlıklı yapılardan oluşan yoğun bir dokuya sahipti. Dar sokaklar ve bitişik nizam yapılaşma, olası bir deprem sonrasında tahliye ve müdahaleyi güçleştirecek nitelikteydi. Tarihi kayıtlar, bölgede zaman zaman yıkıcı depremlerin yaşandığını belgelemektedir.',
  coordinates: { lat: 41.01, lng: 28.97 },
  layers: [
    { id: 'buildings', label: 'Yapılar', color: '#c49020', visible: true },
    { id: 'streets', label: 'Sokaklar', color: '#8899aa', visible: true },
    { id: 'openSpaces', label: 'Açık Alanlar', color: '#3a7a4a', visible: true },
    { id: 'gatheringPoints', label: 'Toplanma Alanları', color: '#e06030', visible: true },
    { id: 'commercialZones', label: 'Ticaret Bölgeleri', color: '#a050c0', visible: true },
    { id: 'coastalZones', label: 'Kıyı Bölgeleri', color: '#2060c0', visible: true },
    { id: 'mainRoads', label: 'Ana Yollar', color: '#d0d0d0', visible: true },
  ],
}

// Historical Istanbul buildings — procedural positions, representative of 18th century Ottoman city
export const istanbulHistoricalBuildings: BuildingData[] = [
  // === Camiler ===
  {
    id: 'ist-h-mosque-1',
    type: 'mosque',
    position: [0, 0, 0],
    size: [4.5, 3.5, 4.5],
    floors: 1,
    material: 'Kesme taş ve kurşun kaplama kubbe',
    color: '#c8b89a',
    roofColor: '#607070',
    label: 'Büyük Cami',
    description: 'Tarihi yarımadadaki büyük külliye camisi.',
    historicalContext:
      'Osmanlı dönemi büyük camileri, çevresiyle birlikte birer külliye oluşturur; medrese, imaret ve çeşme gibi yapıları da barındırırdı.',
    planningNote:
      'Geniş avlusu, çevre yoğun yapılaşmaya karşın sınırlı da olsa bir açık alan sağlamaktadır.',
    riskNote:
      'Taş ve tuğla yapısı, ahşap konutlara kıyasla depreme karşı görece daha dayanıklıdır; ancak çevresindeki yoğun ahşap doku yangın ve enkaz riskini artırmaktadır.',
    layer: 'buildings',
  },
  {
    id: 'ist-h-mosque-2',
    type: 'mosque',
    position: [12, 0, -8],
    size: [3.5, 2.8, 3.5],
    floors: 1,
    material: 'Kesme taş, kurşun kubbe',
    color: '#bfae96',
    roofColor: '#607070',
    label: 'Mahalle Camii',
    description: 'Yoğun bir konut mahallesine hizmet eden orta ölçekli cami.',
    historicalContext:
      'İstanbul mahallelerinde her birkaç sokakta bir küçük ya da orta büyüklükte bir cami bulunurdu.',
    planningNote:
      'Mahalle camileri sosyal yaşamın merkeziydi; ancak çevrelerindeki dar sokaklar ulaşımı sınırlıyordu.',
    riskNote:
      'Taş yapı direnç açısından avantajlıdır; fakat çevresini saran ahşap konut dokusu ciddi yangın tehlikesi barındırmaktadır.',
    layer: 'buildings',
  },
  {
    id: 'ist-h-mosque-3',
    type: 'mosque',
    position: [-10, 0, 15],
    size: [3, 2.5, 3],
    floors: 1,
    material: 'Taş ve tuğla',
    color: '#b8a888',
    roofColor: '#507060',
    label: 'Küçük Mescit',
    description: 'Dar sokaklara yerleşmiş küçük bir mahalle mescidi.',
    historicalContext:
      'Küçük mescitler İstanbul mahalleleri için son derece yaygındı; birkaç yüz hanenin ihtiyacına yetecek boyutlardaydı.',
    planningNote: 'Avlusu dar; acil tahliyede toplanma alanı sağlama kapasitesi oldukça sınırlıdır.',
    riskNote: 'Taş yapı ahşaptan dayanıklıdır; dar konumu ise erişimi güçleştirmektedir.',
    layer: 'buildings',
  },

  // === Konutlar ===
  {
    id: 'ist-h-res-1',
    type: 'residence',
    position: [5, 0, 7],
    size: [1.8, 3.2, 1.8],
    floors: 2,
    material: 'Ahşap çatkı ve kerpiç dolgu',
    color: '#c8a060',
    roofColor: '#7a4030',
    label: 'Ahşap Konut',
    description: 'Birbirine bitişik düzende iki katlı ahşap Osmanlı konutu.',
    historicalContext:
      'XVIII. yüzyılda İstanbul konutlarının büyük çoğunluğu ahşap çatkı sistemli yapılar olup çoğunlukla bitişik nizam inşa edilirdi.',
    planningNote:
      'Bitişik nizam yapılaşma, açık alan ve tahliye yollarını ciddi biçimde kısıtlamaktadır.',
    riskNote:
      'Ahşap çatkı sistemi, zemin hareketine karşı belirli bir esneklik sağlar; ancak yangın riski son derece yüksektir. Bitişik düzen yangının hızla yayılmasına zemin hazırlar.',
    layer: 'buildings',
  },
  {
    id: 'ist-h-res-2',
    type: 'residence',
    position: [7, 0, 10],
    size: [1.6, 2.8, 1.6],
    floors: 2,
    material: 'Ahşap çatkı',
    color: '#be9850',
    roofColor: '#7a3828',
    label: 'Ahşap Konut',
    description: 'Yoğun mahalleye yerleşmiş tipik bir konut.',
    historicalContext: 'Çoğu İstanbul mahallesi bu denli sıkışık ahşap konutlardan oluşmaktaydı.',
    planningNote: 'Yoğun yapılaşma, olası bir kriz anında tahliye güçlüğü yaratmaktadır.',
    riskNote: 'Ahşap yapı, güçlü bir sarsıntıda hasar görme riskini barındırmaktadır.',
    layer: 'buildings',
  },
  {
    id: 'ist-h-res-3',
    type: 'residence',
    position: [-3, 0, 8],
    size: [1.9, 3.5, 1.7],
    floors: 3,
    material: 'Ahşap çatkı, üst katlar çıkmalı',
    color: '#d4a850',
    roofColor: '#803828',
    label: 'Çıkmalı Konut',
    description: 'Üst katı sokağa doğru taşan geleneksel Osmanlı konağı.',
    historicalContext:
      'Çıkmalı üst katlar İstanbul konutlarına özgü bir mimari özellikti; bu sayede zemin kat daha az yer kaplar, üst kat ise daha fazla alan kazanırdı.',
    planningNote: 'Çıkmalı yapılar sokakları daraltarak gün ışığını ve hava sirkülasyonunu azaltmaktaydı.',
    riskNote: 'Çıkmalı üst katlar, deprem veya yangın sırasında sokağa dökülme tehlikesi taşımaktaydı.',
    layer: 'buildings',
  },
  {
    id: 'ist-h-res-4',
    type: 'residence',
    position: [-5, 0, 2],
    size: [2, 2.8, 2],
    floors: 2,
    material: 'Ahşap çatkı ve tuğla',
    color: '#c09040',
    roofColor: '#703020',
    label: 'Ahşap Konut',
    description: 'Merkezi bir mahalledeki iki katlı konut.',
    historicalContext:
      'Ahşap konutlar İstanbul nüfusunun büyük bölümünü barındırırdı; oldukça dar bir alanda yoğunlaşmış durumdaydılar.',
    planningNote: 'Yoğun mahallelerde açık alan son derece kısıtlıydı.',
    riskNote: 'Ahşap yapının yangın ve deprem açısından ciddi kırılganlıkları mevcuttur.',
    layer: 'buildings',
  },
  {
    id: 'ist-h-res-5',
    type: 'residence',
    position: [3, 0, -5],
    size: [2.2, 3.8, 2],
    floors: 3,
    material: 'Ahşap çatkı, taş zemin kat',
    color: '#d0a848',
    roofColor: '#7a3818',
    label: 'Yüksek Ahşap Konut',
    description: 'Zemin katı taş, üst katları ahşap yapılan üç katlı konut.',
    historicalContext:
      'Varlıklı konutlarda zemin kat taştan, üst katlar ise ahşaptan inşa edilirdi. Zemin kat su ve nem gibi etkenlerden daha iyi korunmuş olurdu.',
    planningNote: 'Üç katlı yapılar mahallelerde belirgin yoğunluğa yol açmaktaydı.',
    riskNote: 'Üst ahşap katlar çökmeden sonra sokakları kapatabilirdi.',
    layer: 'buildings',
  },
  {
    id: 'ist-h-res-6',
    type: 'residence',
    position: [-8, 0, -3],
    size: [1.7, 2.5, 1.7],
    floors: 2,
    material: 'Ahşap çatkı',
    color: '#b89040',
    roofColor: '#6a3020',
    label: 'Küçük Ahşap Ev',
    description: 'Skorkişilerin barındığı küçük ölçekli konut.',
    historicalContext:
      'Şehrin yoğun bölgelerinde küçük konutlar kalabalık aileler tarafından paylaşılırdı.',
    planningNote: 'Bu tür küçük birimler son derece yoğun bir şehir dokusu oluştururdu.',
    riskNote: 'Küçük ahşap konutlar deprem ve yangına karşı en savunmasız yapı tipiydi.',
    layer: 'buildings',
  },

  // === Çarşılar ve Hanlar ===
  {
    id: 'ist-h-market-1',
    type: 'market',
    position: [-2, 0, -2],
    size: [5, 2, 7],
    floors: 1,
    material: 'Taş kemer ve tonoz',
    color: '#a89070',
    roofColor: '#706050',
    label: 'Kapalı Çarşı Bölümü',
    description: 'Tarihi çarşının taş tonozlu ticaret bölümü.',
    historicalContext:
      'İstanbul\'un kapalı çarşıları, tonozlu taş yapılar içinde organize ticaret hayatının merkeziydi.',
    planningNote: 'Çarşı yapıları iş ve sosyal yaşamı bir arada barındırırdı.',
    riskNote: 'Taş tonozlar dayanıklıdır; ancak geniş çatı alanı yük taşıma kapasitesi açısından risk içermektedir.',
    layer: 'commercialZones',
  },
  {
    id: 'ist-h-inn-1',
    type: 'inn',
    position: [15, 0, 5],
    size: [4, 2.5, 4],
    floors: 2,
    material: 'Taş ve ahşap',
    color: '#9a8870',
    roofColor: '#605040',
    label: 'Han',
    description: 'Yolcular ve tüccarlar için kullanılan han yapısı.',
    historicalContext:
      'Hanlar, İstanbul\'un ticaret ağı içinde hem konaklama hem de depo işlevi görürdü.',
    planningNote: 'Hanlar genellikle büyük avlular içerirdi; bu avlular çevre için sınırlı da olsa bir açık alan sağlardı.',
    riskNote: 'Taş ve ahşap karma yapı sistemi orta düzeyde direnç sunmaktadır.',
    layer: 'commercialZones',
  },

  // === Limanlar ===
  {
    id: 'ist-h-harbor-1',
    type: 'harbor',
    position: [0, 0, -20],
    size: [8, 1.5, 3],
    floors: 1,
    material: 'Taş iskele ve ahşap yapılar',
    color: '#808878',
    roofColor: '#505850',
    label: 'Liman İskelesi',
    description: 'Boğaz kıyısındaki ticaret limanının ana iskelesi.',
    historicalContext:
      'İstanbul limanı, Osmanlı deniz ticaretinin en kritik noktalarından biriydi ve sürekli yoğun bir trafiğe ev sahipliği yapardı.',
    planningNote: 'Liman bölgesi, kalabalık yapısıyla tahliye güçlüğü yaratabilecek bir alandı.',
    riskNote: 'Kıyı yapıları, deprem kaynaklı tsunami ve dalga riskiyle karşı karşıyadır.',
    layer: 'coastalZones',
  },

  // === Saray ve Önemli Yapılar ===
  {
    id: 'ist-h-palace-1',
    type: 'palace',
    position: [5, 0, -15],
    size: [6, 3, 5],
    floors: 2,
    material: 'Taş, mermer ve ahşap',
    color: '#d4c090',
    roofColor: '#a08040',
    label: 'Saray Yapısı',
    description: 'Sahilsaraylar bölgesindeki temsili saray yapısı.',
    historicalContext:
      'Osmanlı sarayları çeşitli köşk ve pavyonlardan oluşan büyük komplekslerdi; ahşap ve taş yapıları bir arada barındırırdı.',
    planningNote: 'Saray kompleksleri büyük açık alanlarıyla çevrenin en düzenli bölgelerini oluşturuyordu.',
    riskNote: 'Karma yapı sistemi, yapının bölümüne göre farklı direnç düzeyleri sergilemektedir.',
    layer: 'buildings',
  },

  // === Kule ===
  {
    id: 'ist-h-tower-1',
    type: 'tower',
    position: [-18, 0, -5],
    size: [2, 8, 2],
    floors: 4,
    material: 'Kesme taş',
    color: '#b0a090',
    roofColor: '#706050',
    label: 'Yangın Kulesi',
    description: 'Şehir genelini gözetlemek amacıyla kullanılan yangın gözetleme kulesi.',
    historicalContext:
      'İstanbul\'da yangın sık yaşanan bir tehlikeydi; bu nedenle şehrin stratejik noktalarına gözetleme kuleleri inşa edilmişti.',
    planningNote: 'Yangın kuleleri erken uyarı sağlardı; ancak daralan şehir dokusu müdahaleyi güçleştirmekteydi.',
    riskNote: 'Taş kule sağlamdır; ancak işlev gördüğü ortam (ahşap dokulu şehir) yüksek risk taşımaktadır.',
    layer: 'buildings',
  },

  // === Meydanlar ===
  {
    id: 'ist-h-square-1',
    type: 'square',
    position: [0, 0, 5],
    size: [5, 0.1, 5],
    floors: 0,
    material: 'Taş döşeme',
    color: '#a09080',
    roofColor: '#a09080',
    label: 'Cami Avlusu',
    description: 'Büyük caminin taş döşemeli dış avlusu.',
    historicalContext:
      'Cami avluları, kalabalık şehirde sınırlı açık alanlardandı; Cuma ve bayram namazlarında kalabalıkları barındırırdı.',
    planningNote: 'Avlu, çevresindeki yoğun doku içinde önemli bir nefes alanı işlevi görmekteydi.',
    riskNote: 'Açık avlular, acil durum toplanma için değerlidir; ancak doğrudan sahiplenilmemişlerdir.',
    layer: 'openSpaces',
  },

  // Daha fazla konut kümesi — mahalleleri doldurmak için
  ...generateIstanbulResidentialCluster(-15, 10, 'ist-h-cluster-a'),
  ...generateIstanbulResidentialCluster(10, 12, 'ist-h-cluster-b'),
  ...generateIstanbulResidentialCluster(-6, -10, 'ist-h-cluster-c'),
  ...generateIstanbulResidentialCluster(18, -5, 'ist-h-cluster-d'),
]

function generateIstanbulResidentialCluster(
  baseX: number,
  baseZ: number,
  prefix: string,
): BuildingData[] {
  const positions: [number, number, number][] = [
    [0, 0, 0], [2.2, 0, 0], [4.4, 0, 0],
    [0, 0, 2.2], [2.2, 0, 2.2],
    [0, 0, 4.4], [2.2, 0, 4.4], [4.4, 0, 4.4],
    [4.4, 0, 2.2],
  ]
  const heights = [2.8, 3.2, 2.5, 3.0, 2.8, 3.5, 2.6, 3.1, 2.9]
  const colors = ['#c8a060', '#be9850', '#d4a850', '#c09040', '#b89040', '#d0a848', '#c09848', '#be9040', '#c8a858']

  return positions.map((pos, i) => ({
    id: `${prefix}-${i}`,
    type: 'residence' as const,
    position: [baseX + pos[0] + (Math.sin(i * 1.3) * 0.4), 0, baseZ + pos[2] + (Math.cos(i * 1.7) * 0.3)],
    size: [1.8 + (i % 3) * 0.2, heights[i], 1.8 + (i % 2) * 0.2],
    floors: Math.floor(heights[i] / 1.4),
    material: 'Ahşap çatkı ve kerpiç dolgu',
    color: colors[i],
    roofColor: '#7a3828',
    label: 'Ahşap Konut',
    description: 'Osmanlı dönemi yoğun konut mahallesinden tipik bir ev.',
    historicalContext: 'Bu tür konutlar İstanbul\'un büyük bölümünü kaplamaktaydı.',
    planningNote: 'Yoğun ve düzensiz yerleşim, acil müdahaleyi güçleştirmektedir.',
    riskNote: 'Ahşap yapı ve bitişik düzen, hem deprem hem yangın açısından yüksek risk oluşturmaktadır.',
    layer: 'buildings' as const,
  }))
}

// Resilient Istanbul buildings — alternative plan with wider streets, open spaces, more robust construction
export const istanbulResilientBuildings: BuildingData[] = [
  // === Güçlendirilmiş Camiler ===
  {
    id: 'ist-r-mosque-1',
    type: 'mosque',
    position: [0, 0, 0],
    size: [4.5, 3.5, 4.5],
    floors: 1,
    material: 'Kesme taş, geniş avlu',
    color: '#c8b89a',
    roofColor: '#607070',
    label: 'Merkez Cami',
    description: 'Geniş avlu ve yeterli çevre mesafesiyle planlanan cami.',
    historicalContext: 'Önerilen planda camiler toplanma alanlarının merkezine yerleştirilmiştir.',
    planningNote: 'Genişletilmiş avlu, hem ibadet hem de acil toplanma işlevi görmektedir.',
    riskNote: 'Çevresindeki açık alanlar yangın yayılma riskini önemli ölçüde azaltmaktadır.',
    layer: 'buildings',
  },

  // === Dayanıklı Konutlar ===
  {
    id: 'ist-r-res-1',
    type: 'resilient_residence',
    position: [7, 0, 7],
    size: [2.2, 2.8, 2.2],
    floors: 2,
    material: 'Ahşap çatkı, taş zemin kat, düzenli aralıklı yerleşim',
    color: '#d4b870',
    roofColor: '#805840',
    label: 'Planlı Konut Birimi',
    description: 'Daha geniş parseller ve yapılar arası belirlenen minimum mesafeler dahilinde inşa edilmiş konut.',
    historicalContext:
      'Bu yaklaşım, 18. yüzyıl yapı teknikleri korunarak yapılar arasına tahliye ve yangın koridorları bırakılmasını esas almaktadır.',
    planningNote: 'Yapılar arasındaki mesafeler hava sirkülasyonunu artırır ve yangın yayılmasını yavaşlatır.',
    riskNote: 'Bitişik nizam yerine aralıklı yerleşim, enkaz kapsamını ve yangın transferini önemli ölçüde azaltmaktadır.',
    layer: 'buildings',
  },
  {
    id: 'ist-r-res-2',
    type: 'resilient_residence',
    position: [10, 0, 7],
    size: [2.2, 3, 2.2],
    floors: 2,
    material: 'Ahşap çatkı, güçlendirilmiş köşe bağlantıları',
    color: '#d8bc78',
    roofColor: '#7a5438',
    label: 'Güçlendirilmiş Ahşap Konut',
    description: 'Daha sağlam çatkı bağlantılarıyla inşa edilen konut.',
    historicalContext:
      'Çağın ustalarının bilgi birikimi ile geliştirilen çatkı teknikleri, yapısal bütünlüğü artırmaktaydı.',
    planningNote: 'Düzenli parsel düzeni erişim güzergâhlarını belirgin kılmaktadır.',
    riskNote: 'İyileştirilmiş bağlantılar sarsıntı direncini artırır.',
    layer: 'buildings',
  },
  {
    id: 'ist-r-res-3',
    type: 'resilient_residence',
    position: [7, 0, 10.5],
    size: [2.2, 2.8, 2.2],
    floors: 2,
    material: 'Ahşap ve taş karma yapı',
    color: '#cca860',
    roofColor: '#7a4c30',
    label: 'Planlı Konut',
    description: 'Yangın koridoru mesafeleri gözetilerek inşa edilmiş konut.',
    historicalContext: 'Şehir planlamacıları, yangın yayılma riskinin azaltılması için bu mesafelerin önemine dikkat çekmişlerdir.',
    planningNote: 'Konut kümeleri, aralarda bırakılan açık alanlarla bölünmüştür.',
    riskNote: 'Açık aralıklar yangın ve enkaz yayılmasına karşı koruyucu bariyer işlevi görür.',
    layer: 'buildings',
  },
  ...generateIstanbulResilientCluster(13, 7, 'ist-r-cluster-a'),
  ...generateIstanbulResilientCluster(-10, 7, 'ist-r-cluster-b'),
  ...generateIstanbulResilientCluster(-10, -8, 'ist-r-cluster-c'),
  ...generateIstanbulResilientCluster(13, -8, 'ist-r-cluster-d'),

  // === Toplanma Alanları ===
  {
    id: 'ist-r-gather-1',
    type: 'square',
    position: [0, 0, 8],
    size: [6, 0.1, 6],
    floors: 0,
    material: 'Taş döşeme, açık kamu alanı',
    color: '#8aaa70',
    roofColor: '#8aaa70',
    label: 'Mahalle Toplanma Meydanı',
    description: 'Acil durum toplanma için tasarlanmış planlanmış açık alan.',
    historicalContext:
      'Önerilen planda her mahalle, belirli toplanma noktalarına kavuşacak şekilde düzenlenmiştir.',
    planningNote: 'Planlı toplanma alanları, kriz anında düzenli tahliyeyi mümkün kılmaktadır.',
    riskNote: 'Toplanma alanları, enkaz riskinin bulunmadığı güvenli bölgelerdir.',
    layer: 'gatheringPoints',
  },
  {
    id: 'ist-r-gather-2',
    type: 'square',
    position: [-12, 0, 0],
    size: [5, 0.1, 5],
    floors: 0,
    material: 'Taş döşeme',
    color: '#7a9a60',
    roofColor: '#7a9a60',
    label: 'Açık Meydan',
    description: 'Yoğun konut bölgesi içinde yer alan planlanmış açık meydan.',
    historicalContext:
      'Osmanlı şehirciliğinde meydanlar, sosyal yaşam için elzem görülmekteydi; önerilen plan bu geleneği güçlendirmektedir.',
    planningNote: 'Stratejik konumlandırılmış meydanlar kalabalıkların güvenli dağılımını sağlar.',
    riskNote: 'Açık meydanlar, bina çöküşlerinden kaynaklanan tehlikeleri en aza indirger.',
    layer: 'openSpaces',
  },
  {
    id: 'ist-r-gather-3',
    type: 'square',
    position: [12, 0, -8],
    size: [4, 0.1, 4],
    floors: 0,
    material: 'Taş ve toprak döşeme',
    color: '#7a9460',
    roofColor: '#7a9460',
    label: 'Liman Önü Açık Alanı',
    description: 'Liman bölgesi yakınında bırakılan planlı açık alan.',
    historicalContext:
      'Liman yakınındaki açık alanlar hem ticaret hem tahliye için değerli güzergâhlar sunar.',
    planningNote: 'Limanla bağlantılı açık alanlar, acil deniz tahliyesini kolaylaştırmaktadır.',
    riskNote: 'Kıyı açık alanları, sismik etkinlik sonrasında toplanma mekânı işlevi görebilir.',
    layer: 'gatheringPoints',
  },

  // === Güçlendirilmiş Liman ===
  {
    id: 'ist-r-harbor-1',
    type: 'harbor',
    position: [0, 0, -20],
    size: [8, 1.5, 3],
    floors: 1,
    material: 'Taş iskele, güçlendirilmiş yapılar',
    color: '#909888',
    roofColor: '#606858',
    label: 'Planlı Liman İskelesi',
    description: 'Olası kıyı riskleri dikkate alınarak yapılandırılmış liman.',
    historicalContext:
      'Limanın güvenli ve işlevsel kalması, olası bir afetten sonraki lojistik destek açısından kritik önem taşımaktadır.',
    planningNote: 'Erişim yolları, acil durum operasyonlarına olanak tanıyacak biçimde geniş tutulmuştur.',
    riskNote: 'Liman yapıları, dayanım güçlendirmeleriyle kıyı risklerine karşı daha hazırlıklı hale getirilmiştir.',
    layer: 'coastalZones',
  },

  // === Çarşı - Planlı ===
  {
    id: 'ist-r-market-1',
    type: 'market',
    position: [-2, 0, -2],
    size: [5, 2, 7],
    floors: 1,
    material: 'Taş, geniş çarşı aralarına sahip tasarım',
    color: '#b09878',
    roofColor: '#706858',
    label: 'Planlı Ticaret Çarşısı',
    description: 'Acil çıkışlar ve daha geniş aralar gözetilerek düzenlenmiş çarşı.',
    historicalContext:
      'Mevcut çarşı yapısı korunmakla birlikte geniş çarşı arası yollarla iyileştirilmiştir.',
    planningNote: 'Genişletilmiş çarşı aralarına tahliye için de başvurulabilir.',
    riskNote: 'Daha geniş aralıklar yangın yayılmasını yavaşlatır ve tahliyeyi hızlandırır.',
    layer: 'commercialZones',
  },
]

function generateIstanbulResilientCluster(
  baseX: number,
  baseZ: number,
  prefix: string,
): BuildingData[] {
  // Daha düzenli ızgara planı; aralarında boşluklar bırakılmış
  const positions: [number, number, number][] = [
    [0, 0, 0], [3, 0, 0], [6, 0, 0],
    [0, 0, 3], [3, 0, 3], [6, 0, 3],
    [0, 0, 6], [3, 0, 6],
  ]
  const heights = [2.8, 3.0, 2.8, 3.2, 2.8, 3.0, 2.8, 3.0]
  const colors = ['#d4b870', '#d8bc78', '#cca860', '#d0b468', '#d8b870', '#ccb060', '#d4bc78', '#c8a858']

  return positions.map((pos, i) => ({
    id: `${prefix}-${i}`,
    type: 'resilient_residence' as const,
    position: [baseX + pos[0], 0, baseZ + pos[2]],
    size: [2.2, heights[i], 2.2],
    floors: 2,
    material: 'Ahşap çatkı, taş zemin kat, düzenli aralıklı yerleşim',
    color: colors[i],
    roofColor: '#7a5440',
    label: 'Planlı Konut',
    description: 'Dayanıklı şehir planında düzenli parsel düzeniyle oluşturulan konut.',
    historicalContext: 'Önerilen planda yapılar arası boşluklar sistematik biçimde planlanmıştır.',
    planningNote: 'Düzenli ızgara sistemi, erişimi ve yönlenmeyi kolaylaştırmaktadır.',
    riskNote: 'Yapılar arası boşluklar enkaz kapsamını ve yangın yayılmasını sınırlamaktadır.',
    layer: 'buildings' as const,
  }))
}

export const istanbulTimeline: TimelineEvent[] = [
  {
    year: '1453',
    title: 'İstanbul\'un Fethi',
    description:
      'Osmanlılar İstanbul\'u fethedip başkent yaptı. Şehir yeniden inşa ve imar sürecine girdi; büyük camiler, hanlar ve çarşılar inşa edilmeye başlandı.',
    type: 'construction',
  },
  {
    year: '1509',
    title: '1509 Depremi (Küçük Kıyamet)',
    description:
      'Büyük İstanbul Depremi olarak da bilinen bu afet, önemli hasara yol açtı. Binlerce yapı yıkıldı; bu felaket şehrin sismik açıdan kırılgan yapısını gözler önüne serdi.',
    type: 'earthquake',
  },
  {
    year: '1700ler',
    title: 'XVIII. Yüzyılda Şehirleşme',
    description:
      'İstanbul büyümeyi sürdürdü. Yoğun ahşap konut bölgeleri neredeyse tüm tarihi yarımadayı kapladı. Dar sokaklar ve bitişik nizam yapılaşma norm haline geldi.',
    type: 'construction',
  },
  {
    year: '1754',
    title: 'İstanbul Büyük Yangını',
    description:
      'Yoğun ahşap dokulu şehir, pek çok büyük yangını devri yaşadı. Bu yangınlar, dar sokaklar ve bitişik yapılaşmanın nelere yol açabileceğini somut biçimde ortaya koydu.',
    type: 'disaster',
  },
  {
    year: '1766',
    title: '1766 Depremi',
    description:
      'İstanbul\'u derinden etkileyen bir deprem; büyük cami ve tarihi yapılar dahil pek çok önemli bina zarar gördü. Ahşap yapı stoğu özellikle ciddi hasar aldı.',
    type: 'earthquake',
  },
  {
    year: '1800ler',
    title: 'Şehir Planlama Fikirleri',
    description:
      'XIX. yüzyılda İstanbul\'da yeniden yapılanma ve daha düzenli şehir dokusu tartışmaları gündeme geldi; ancak kapsamlı bir planlamanın hayata geçirilmesi zaman aldı.',
    type: 'planning',
  },
]

export const istanbulComparison: ComparisonMetric[] = [
  { label: 'Sokak Genişliği', historical: 'Çoğunlukla 2–4 m (dar ve kıvrımlı)', resilient: 'Ana yollar 8–12 m, mahalle sokakları 5–6 m' },
  { label: 'Yapı Yoğunluğu', historical: 'Çok yüksek, bitişik nizam', resilient: 'Orta düzey, yapılar arası planlı boşluklar' },
  { label: 'Açık Alan Oranı', historical: 'Çok az; yalnızca cami avluları', resilient: 'Her mahallede tanımlanmış toplanma alanları' },
  { label: 'Yapı Malzemesi', historical: 'Ağırlıklı olarak ahşap çatkı', resilient: 'Ahşap çatkı + taş zemin kat kombinasyonu' },
  { label: 'Ana Yollar', historical: 'Belirsiz ve süreklilikten yoksun', resilient: 'Şehri kesen düzenli ana güzergâhlar' },
  { label: 'Yangın Koridorları', historical: 'Yok; yapılar doğrudan bitişik', resilient: 'Planlı yapı araları ve yangın mesafeleri' },
  { label: 'Toplanma Noktaları', historical: 'Sadece büyük cami avluları', resilient: 'Her mahallede planlanmış toplanma alanları' },
]
