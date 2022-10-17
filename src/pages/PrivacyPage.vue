<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md">
      <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="turkish" label="Gizlilik Politikasi" />
          <q-tab name="english" label="Privacy Policy" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated keep-alive>
          <q-tab-panel name="turkish">
            <q-page-container>
              <q-page padding>
                <div class="text_align_left">
                  <h4>Gizlilik Politikası</h4>
                  <p>Son güncellenme: 15/10/2022</p>
                  <p>
                    Güvenliğiniz bizim için önemli. Bu sebeple bizimle
                    paylaşacağınız kişisel verileriz hassasiyetle korunmaktadır.
                  </p>
                  <p>
                    Biz, TetherYo!, veri sorumlusu olarak, bu gizlilik ve
                    kişisel verilerin korunması politikası ile, hangi kişisel
                    verilerinizin hangi amaçla işleneceği, işlenen verilerin
                    kimlerle ve neden paylaşılabileceği, veri işleme yöntemimiz
                    ve hukuki sebeplerimiz ile; işlenen verilerinize ilişkin
                    haklarınızın neler olduğu hususunda sizleri aydınlatmayı
                    amaçlıyoruz.
                  </p>
                  <h4>
                    Toplanan Kişisel Verileriniz, Toplanma Yöntemi ve Hukuki
                    Sebebi
                  </h4>
                  <p>
                    Kimlik, (isim, soy isim, doğum tarihi gibi) iletişim,
                    (adres, e-posta adresi, telefon, IP, konum gibi) özlük,
                    sosyal medya, finans bilgileriniz ile görsel ve işitsel
                    kayıtlarınız tarafımızca, çerezler (cookies) vb.
                    teknolojiler vasıtasıyla, otomatik veya otomatik olmayan
                    yöntemlerle ve bazen de analitik sağlayıcılar, reklam
                    ağları, arama bilgi sağlayıcıları, teknoloji sağlayıcıları
                    gibi üçüncü taraflardan elde edilerek, kaydedilerek,
                    depolanarak ve güncellenerek, aramızdaki hizmet ve sözleşme
                    ilişkisi çerçevesinde ve süresince, meşru menfaat işleme
                    şartına dayanılarak işlenecektir.
                  </p>
                  <h4>Kişisel Verilerinizin İşlenme Amacı</h4>
                  <p>
                    Bizimle paylaştığınız kişisel verileriniz; hizmetlerimizden
                    faydalanabilmeniz amacıyla sizlerle sözleşmeler kurabilmek,
                    sunduğumuz hizmetlerin gerekliliklerini en iyi şekilde ve
                    aramızdaki sözleşmelere uygun olarak yerine getirebilmek, bu
                    sözleşmelerden doğan haklarınızın tarafınızca kullanılmasını
                    sağlayabilmek, ürün ve hizmetlerimizi, ihtiyaçlarınız
                    doğrultusunda geliştirebilmek ve bu gelişmelerden sizleri
                    haberdar edebilmek, ayrıca sizleri daha geniş kapsamlı
                    hizmet sağlayıcıları ile yasal çerçeveler içerisinde
                    buluşturabilmek ve kanundan doğan zorunlulukların (kişisel
                    verilerin talep halinde adli ve idari makamlarla
                    paylaşılması) yerine getirilebilmesi amacıyla, sözleşme ve
                    hizmet süresince, amacına uygun ve ölçülü bir şekilde
                    işlenecek ve güncellenecektir.
                  </p>
                  <h4>
                    Toplanan Kişisel Verilerin Kimlere ve Hangi Amaçlarla
                    Aktarılabileceği
                  </h4>
                  <p>
                    Bizimle paylaştığınız kişisel verileriniz; faaliyetlerimizi
                    yürütmek üzere hizmet aldığımız ve/veya verdiğimiz,
                    sözleşmesel ilişki içerisinde bulunduğumuz, iş birliği
                    yaptığımız, yurt içi ve yurt dışındaki 3. şahıslar ile kurum
                    ve kuruluşlara ve talep halinde adli ve idari makamlara,
                    gerekli teknik ve idari önlemler alınması koşulu ile
                    aktarılabilecektir.
                  </p>
                  <h4>Kişisel Verileri İşlenen Kişi Olarak Haklarınız</h4>
                  <p>
                    KVKK madde 11 uyarınca herkes, veri sorumlusuna başvurarak
                    aşağıdaki haklarını kullanabilir:
                  </p>
                  <ol type="a">
                    <li>Kişisel veri işlenip işlenmediğini öğrenme,</li>
                    <li>
                      Kişisel verileri işlenmişse buna ilişkin bilgi talep etme,
                    </li>
                    <li>
                      Kişisel verilerin işlenme amacını ve bunların amacına
                      uygun kullanılıp kullanılmadığını öğrenme,
                    </li>
                    <li>
                      Yurt içinde veya yurt dışında kişisel verilerin
                      aktarıldığı üçüncü kişileri bilme,
                    </li>
                    <li>
                      Kişisel verilerin eksik veya yanlış işlenmiş olması
                      hâlinde bunların düzeltilmesini isteme,
                    </li>
                    <li>
                      Kişisel verilerin silinmesini veya yok edilmesini isteme,
                    </li>
                    <li>
                      (e) ve (f) bentleri uyarınca yapılan işlemlerin, kişisel
                      verilerin aktarıldığı üçüncü kişilere bildirilmesini
                      isteme,
                    </li>
                    <li>
                      İşlenen verilerin münhasıran otomatik sistemler
                      vasıtasıyla analiz edilmesi suretiyle kişinin kendisi
                      aleyhine bir sonucun ortaya çıkmasına itiraz etme,
                    </li>
                    <li>
                      Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle
                      zarara uğraması hâlinde zararın giderilmesini talep etme,
                      haklarına sahiptir.
                    </li>
                  </ol>
                  <p>
                    Yukarıda sayılan haklarınızı kullanmak üzere
                    tetheryo@gmail.com üzerinden bizimle iletişime
                    geçebilirsiniz.
                  </p>
                  <h4>İletişim</h4>
                  <p>
                    Sizlere talepleriniz doğrultusunda hizmet sunabilmek
                    amacıyla, sadece gerekli olan kişisel verilerinizin, işbu
                    gizlilik ve kişisel verilerin işlenmesi politikası uyarınca
                    işlenmesini, kabul edip etmemek hususunda tamamen
                    özgürsünüz. Uygulamayı kullanmaya devam ettiğiniz takdirde,
                    kabul etmiş olduğunuz tarafımızca varsayılacaktır. Şayet
                    kabul etmiyorsanız, lütfen uygulamayı tüm cihazlarınızdan
                    kaldırınız. Ayrıntılı bilgi için bizimle tetheryo@gmail.com
                    e-mail adresi üzerinden iletişime geçmekten lütfen
                    çekinmeyiniz.
                  </p>
                  <h4>Kullanım Koşulları</h4>
                  <p>Son güncellenme: 15/10/2022</p>
                  <p>
                    Sevgili ziyaretçimiz, lütfen www.tetheryo.com web sitemizi
                    ziyaret etmeden önce işbu kullanım koşulları sözleşmesini
                    dikkatlice okuyunuz. Siteye erişiminiz tamamen bu sözleşmeyi
                    kabulünüze ve bu sözleşme ile belirlenen şartlara uymanıza
                    bağlıdır. Şayet bu sözleşmede yazan herhangi bir koşulu
                    kabul etmiyorsanız, lütfen siteye erişiminizi sonlandırınız.
                    Siteye erişiminizi sürdürdüğünüz takdirde, koşulsuz ve
                    kısıtlamasız olarak, işbu sözleşme metninin tamamını kabul
                    ettiğinizin, tarafımızca varsayılacağını lütfen unutmayınız.
                  </p>
                  <p>
                    www.tetheryo.com web sitesi TetherYo! tarafından
                    yönetilmekte olup, bundan sonra SİTE olarak anılacaktır.
                    İşbu siteye ilişkin Kullanım Koşulları, yayınlanmakla
                    yürürlüğe girer. Değişiklik yapma hakkı, tek taraflı olarak
                    SİTE'ye aittir ve SİTE üzerinden güncel olarak paylaşılacak
                    olan bu değişiklikleri, tüm kullanıcılarımız baştan kabul
                    etmiş sayılır.
                  </p>
                  <h4>Gizlilik</h4>
                  <p>
                    Gizlilik, ayrı bir sayfada, kişisel verilerinizin
                    tarafımızca işlenmesinin esaslarını düzenlemek üzere
                    mevcuttur. SİTE'yi kullandığınız takdirde, bu verilerin
                    işlenmesinin gizlilik politikasına uygun olarak
                    gerçekleştiğini kabul edersiniz.
                  </p>
                  <h4>Hizmet Kapsamı</h4>
                  <p>
                    TetherYo! olarak, sunacağımız hizmetlerin kapsamını ve
                    niteliğini, yasalar çerçevesinde belirlemekte tamamen
                    serbest olup; hizmetlere ilişkin yapacağımız değişiklikler,
                    SİTE'de yayınlanmakla yürürlüğe girmiş sayılacaktır.
                  </p>
                  <h4>Telif Hakları</h4>
                  <p>
                    SİTE'de yayınlanan tüm metin, kod, grafikler, logolar,
                    resimler, ses dosyaları ve kullanılan yazılımın sahibi
                    (bundan böyle ve daha sonra "içerik" olarak anılacaktır)
                    TetherYo! olup, tüm hakları saklıdır. Yazılı izin olmaksızın
                    site içeriğinin çoğaltılması veya kopyalanması kesinlikle
                    yasaktır.
                  </p>
                  <h4>Genel Hükümler</h4>
                  <ul>
                    <li>
                      Kullanıcıların tamamı, SİTE'yi yalnızca hukuka uygun ve
                      şahsi amaçlarla kullanacaklarını ve üçüncü kişinin
                      haklarına tecavüz teşkil edecek nitelikteki herhangi bir
                      faaliyette bulunmayacağını taahhüt eder. SİTE dâhilinde
                      yaptıkları işlem ve eylemlerindeki, hukuki ve cezai
                      sorumlulukları kendilerine aittir. İşbu iş ve eylemler
                      sebebiyle, üçüncü kişilerin uğradıkları veya
                      uğrayabilecekleri zararlardan dolayı SİTE'nin doğrudan
                      ve/veya dolaylı hiçbir sorumluluğu yoktur.
                    </li>
                    <li>
                      SİTE'de mevcut bilgilerin doğruluk ve güncelliğini
                      sağlamak için elimizden geleni yapmaktayız. Lakin
                      gösterdiğimiz çabaya rağmen, bu bilgiler, fiili
                      değişikliklerin gerisinde kalabilir, birtakım farklılıklar
                      olabilir. Bu sebeple, site içerisinde yer alan bilgilerin
                      doğruluğu ve güncelliği ile ilgili tarafımızca, açık veya
                      zımni, herhangi bir garanti verilmemekte, hiçbir taahhütte
                      bulunulmamaktadır.
                    </li>
                    <li>
                      SİTE'de üçüncü şahıslar tarafından işletilen ve içerikleri
                      tarafımızca bilinmeyen diğer web sitelerine, uygulamalara
                      ve platformlara köprüler (hyperlink) bulunabilir. SİTE,
                      işlevsellik yalnızca bu sitelere ulaşımı sağlamakta olup,
                      içerikleri ile ilgili hiçbir sorumluluk kabul
                      etmemekteyiz.
                    </li>
                    <li>
                      SİTE'yi virüslerden temizlenmiş tutmak konusunda elimizden
                      geleni yapsak da, virüslerin tamamen bulunmadığı
                      garantisini vermemekteyiz. Bu nedenle veri indirirken,
                      virüslere karşı gerekli önlemi almak, kullanıcıların
                      sorumluluğundadır. Virüs vb. kötü amaçlı programlar,
                      kodlar veya materyallerin sebep olabileceği zararlardan
                      dolayı sorumluluk kabul etmemekteyiz.
                    </li>
                    <li>
                      SİTE'de sunulan hizmetlerde, kusur veya hata olmayacağına
                      ya da kesintisiz hizmet verileceğine dair garanti
                      vermemekteyiz. SİTE'ye ve sitenin hizmetlerine veya
                      herhangi bir bölümüne olan erişiminizi önceden
                      bildirmeksizin herhangi bir zamanda sonlandırabiliriz.
                    </li>
                  </ul>
                  <h4>Sorumluluğun Sınırlandırılması</h4>
                  <p>
                    SİTE'nin kullanımından doğan zararlara ilişkin
                    sorumluluğumuz, kast ve ağır ihmal ile sınırlıdır.
                    Sözleşmenin ihlalinden doğan zararlarda, talep edilebilecek
                    toplam tazminat, öngörülebilir hasarlar ile sınırlıdır.
                    Yukarıda bahsedilen sorumluluk sınırlamaları aynı zamanda
                    insan hayatına, bedeni yaralanmaya veya bir kişinin
                    sağlığına gelebilecek zararlar durumunda geçerli değildir.
                    Hukuken mücbir sebep sayılan tüm durumlarda, gecikme, ifa
                    etmeme veya temerrütten dolayı, herhangi bir tazminat
                    yükümlülüğümüz doğmayacaktır.
                  </p>
                  <p>
                    Uyuşmazlık Çözümü: İşbu Sözleşme'nin uygulanmasından veya
                    yorumlanmasından doğacak her türlü uyuşmazlığın çözümünde,
                    Türkiye Cumhuriyeti yasaları uygulanır; Istanbul Adliyesi
                    Mahkemeleri ve İcra Daireleri yetkilidir.
                  </p>
                </div>

                <!-- place QPageScroller at end of page -->
                <q-page-scroller
                  position="bottom-right"
                  :scroll-offset="150"
                  :offset="[18, 18]"
                >
                  <q-btn fab icon="keyboard_arrow_up" color="accent" />
                </q-page-scroller>
              </q-page>
            </q-page-container>
          </q-tab-panel>

          <q-tab-panel name="english">
            <q-page-container>
              <q-page padding>
                <div class="text_align_left">
                  <p>
                    Tetheryo! Dev Team built the Tetheryo app as a Free app.
                    This SERVICE is provided by Tetheryo! Dev Team at no cost
                    and is intended for use as is.
                  </p>
                  <p>
                    This page is used to inform visitors regarding my policies
                    with the collection, use, and disclosure of Personal
                    Information if anyone decided to use my Service.
                  </p>
                  <p>
                    If you choose to use my Service, then you agree to the
                    collection and use of information in relation to this
                    policy. The Personal Information that I collect is used for
                    providing and improving the Service. I will not use or share
                    your information with anyone except as described in this
                    Privacy Policy.
                  </p>
                  <p>
                    The terms used in this Privacy Policy have the same meanings
                    as in our Terms and Conditions, which are accessible at
                    Tetheryo unless otherwise defined in this Privacy Policy.
                  </p>
                  <h4>Information Collection and Use</h4>
                  <p>
                    For a better experience, while using our Service, I may
                    require you to provide us with certain personally
                    identifiable information. The information that I request
                    will be retained on your device and is not collected by me
                    in any way.
                  </p>
                  <div>
                    <p>
                      The app does use third-party services that may collect
                      information used to identify you.
                    </p>
                    <p>
                      Link to the privacy policy of third-party service
                      providers used by the app
                    </p>
                    <ul>
                      <li>
                        <a
                          href="https://www.google.com/policies/privacy/"
                          rel="noopener noreferrer"
                          target="_blank"
                          >Google Play Services</a
                        >
                      </li>
                      <!-- --><!-- --><!-- --><!-- --><!-- --><!-- --><!-- --><!-- --><!-- --><!-- --><!-- --><!-- --><!-- --><!-- --><!-- --><!-- --><!-- --><!-- --><!-- --><!-- --><!-- --><!-- --><!-- --><!-- --><!-- --><!-- --><!-- -->
                    </ul>
                  </div>
                  <h4>Log Data</h4>
                  <p>
                    I want to inform you that whenever you use my Service, in a
                    case of an error in the app I collect data and information
                    (through third-party products) on your phone called Log
                    Data. This Log Data may include information such as your
                    device Internet Protocol (“IP”) address, device name,
                    operating system version, the configuration of the app when
                    utilizing my Service, the time and date of your use of the
                    Service, and other statistics.
                  </p>
                  <h4>Cookies</h4>
                  <p>
                    Cookies are files with a small amount of data that are
                    commonly used as anonymous unique identifiers. These are
                    sent to your browser from the websites that you visit and
                    are stored on your device's internal memory.
                  </p>
                  <p>
                    This Service does not use these “cookies” explicitly.
                    However, the app may use third-party code and libraries that
                    use “cookies” to collect information and improve their
                    services. You have the option to either accept or refuse
                    these cookies and know when a cookie is being sent to your
                    device. If you choose to refuse our cookies, you may not be
                    able to use some portions of this Service.
                  </p>
                  <h4>Service Providers</h4>
                  <p>
                    I may employ third-party companies and individuals due to
                    the following reasons:
                  </p>
                  <ul>
                    <li>To facilitate our Service;</li>
                    <li>To provide the Service on our behalf;</li>
                    <li>To perform Service-related services; or</li>
                    <li>To assist us in analyzing how our Service is used.</li>
                  </ul>
                  <p>
                    I want to inform users of this Service that these third
                    parties have access to their Personal Information. The
                    reason is to perform the tasks assigned to them on our
                    behalf. However, they are obligated not to disclose or use
                    the information for any other purpose.
                  </p>
                  <h4>Security</h4>
                  <p>
                    I value your trust in providing us your Personal
                    Information, thus we are striving to use commercially
                    acceptable means of protecting it. But remember that no
                    method of transmission over the internet, or method of
                    electronic storage is 100% secure and reliable, and I cannot
                    guarantee its absolute security.
                  </p>
                  <h4>Links to Other Sites</h4>
                  <p>
                    This Service may contain links to other sites. If you click
                    on a third-party link, you will be directed to that site.
                    Note that these external sites are not operated by me.
                    Therefore, I h4ly advise you to review the Privacy Policy of
                    these websites. I have no control over and assume no
                    responsibility for the content, privacy policies, or
                    practices of any third-party sites or services.
                  </p>
                  <h4>Children’s Privacy</h4>
                  <div>
                    <p>
                      These Services do not address anyone under the age of 13.
                      I do not knowingly collect personally identifiable
                      information from children under 13 years of age. In the
                      case I discover that a child under 13 has provided me with
                      personal information, I immediately delete this from our
                      servers. If you are a parent or guardian and you are aware
                      that your child has provided us with personal information,
                      please contact me so that I will be able to do the
                      necessary actions.
                    </p>
                  </div>
                  <!-- -->
                  <h4>Changes to This Privacy Policy</h4>
                  <p>
                    I may update our Privacy Policy from time to time. Thus, you
                    are advised to review this page periodically for any
                    changes. I will notify you of any changes by posting the new
                    Privacy Policy on this page.
                  </p>
                  <p>This policy is effective as of 2022-10-13</p>
                  <h4>Contact Us</h4>
                  <p>
                    If you have any questions or suggestions about my Privacy
                    Policy, do not hesitate to contact me at
                    tetheryo@gmaili.com.
                  </p>
                </div>
                <!-- place QPageScroller at end of page -->
                <q-page-scroller
                  position="bottom-right"
                  :scroll-offset="150"
                  :offset="[18, 18]"
                >
                  <q-btn fab icon="keyboard_arrow_up" color="accent" />
                </q-page-scroller>
              </q-page>
            </q-page-container>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PrivacyPage",
  data() {
    return {
      tab: "turkish",
    };
  },
  components: {},
});
</script>
