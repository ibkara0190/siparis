# Sipariş Listesi – Kurulum ve Kullanım

Telefonun kamerasıyla barkod okutarak ya da elle yazılmış sipariş fişinin fotoğrafını çekerek toptan müşterileriniz için sipariş listesi hazırlayan, listeyi PDF veya Excel olarak paylaşan ve Mikro muhasebe programına aktarabilen bir web uygulaması. Mağazaya yüklenmez, bir web adresinden açılır ve ana ekrana eklenir. Tüm veriler telefonda, PIN ile şifreli durur; fiş okuma dahil her şey telefonun içinde, internet olmadan çalışır.

## Bu klasörde ne var

| Dosya | Görevi |
|---|---|
| `index.html` | Uygulamanın kendisi |
| `sw.js`, `manifest.webmanifest` | Ana ekrana ekleme ve çevrimdışı çalışma |
| `libs/` | Barkod okuma, Excel ve PDF kütüphaneleri (telefona bir kez iner, sonra çevrimdışı çalışır) |
| `libs/tesseract/` | El yazısı fiş okuma motoru (Tesseract OCR) ve Türkçe/İngilizce dil verisi; o da bir kez iner, çevrimdışı çalışır |
| `icons/` | Uygulama simgeleri |
| `ornek-urunler.csv` | Ürün listesi için örnek sütun düzeni |

## 1. Yayınlama (GitHub Pages, ücretsiz)

Kamera ve "ana ekrana ekle" özellikleri için uygulamanın bir **https** adresinden açılması şarttır. GitHub Pages bunu ücretsiz sağlar.

1. [github.com](https://github.com) adresinde ücretsiz bir hesap açın.
2. Sağ üstteki **+** işaretine basın, **New repository** seçin. Ad olarak `siparis` yazın, **Public** bırakın, **Create repository** deyin.
3. Açılan sayfada **uploading an existing file** bağlantısına tıklayın. Bu klasördeki her şeyi (`libs` ve `icons` klasörleri dahil) sürükleyip bırakın. Altta **Commit changes** deyin.
4. Deponun **Settings** sekmesine girin, soldan **Pages** seçin. **Source** kısmında **Deploy from a branch**, **Branch** kısmında `main` ve `/ (root)` seçip **Save** deyin.
5. Bir iki dakika sonra adresiniz hazırdır: `https://KULLANICIADINIZ.github.io/siparis/`

Depo "Public" olmak zorundadır, ancak depoda yalnızca uygulamanın kodu bulunur. Ürünleriniz, müşterileriniz ve siparişleriniz hiçbir zaman buraya yüklenmez. Adresi bulan biri yalnızca boş bir uygulama ve PIN ekranı görür.

Alternatif: Netlify veya Cloudflare Pages'e aynı klasörü sürükleyip bırakarak da yayınlayabilirsiniz. Her ikisi de ücretsiz hesap ister.

## 2. Telefona ekleme

- **iPhone:** Adresi **Safari** ile açın. Alttaki **Paylaş** simgesine basın, **Ana Ekrana Ekle** seçin. Chrome ile değil, Safari ile yapın.
- **Android:** Adresi **Chrome** ile açın. Sağ üstteki **⋮** menüsünden **Ana ekrana ekle** veya **Uygulamayı yükle** seçin.

İlk açılışta kütüphaneler indirilir (yaklaşık 13 MB; barkod, Excel, PDF ve fiş okuma motoru). Sonrasında internet olmadan da çalışır.

Her telefon kendi PIN'ini belirler ve kendi verisini tutar. Ekip arkadaşlarınıza aynı adresi verin; onlar da aynı Excel'i yükler. Siparişler telefonlar arasında otomatik paylaşılmaz, PDF veya Excel olarak gönderilir.

## 3. İlk açılış

1. Firma adı (PDF başlığında görünür) ve en az 4 karakterlik bir PIN belirleyin.
2. Alttaki **Ürünler** sekmesinden **Excel yükle** deyin ve dosyanızı seçin.
3. Sütun eşleştirme ekranı açılır. Uygulama sütunları adlarından tahmin eder; kontrol edip **İçe aktar** deyin.
4. "Excel'deki fiyat" seçeneğini ayarlayın: fiyatlar adet fiyatıysa **Adet fiyatı** (tutar = koli × koli içi adet × fiyat), koli fiyatıysa **Koli fiyatı**.

Excel düzeni: ilk satır başlık olmalı. Beklenen sütunlar: **Stok Kodu**, **Ürün Açıklaması**, **Barkod**, **Koli İçi Adet**, **Fiyat** ve isteğe bağlı **Stok sayımı** (Stok Miktarı, Mevcut, Bakiye gibi bir başlık kendiliğinden tanınır; 10. bölüme bakın). Sütun adları farklı olabilir, yüklerken eşleştirirsiniz. Barkod, Koli İçi Adet, Fiyat ve Stok sayımı isteğe bağlıdır. Barkodlar sayı ya da metin olarak kaydedilmiş olabilir, ikisi de çalışır. Yeni bir dosya yüklemek eski listenin yerine geçer; kayıtlı siparişler ve stok sayımları etkilenmez.

## 4. Günlük kullanım

**Yeni liste:** Listeler sekmesinde **+ Yeni liste**. Müşteri adını yazın; daha önce yazdığınız müşteriler öneri olarak çıkar.

**Barkod okutma:** **Tara** düğmesi kamerayı açar. Her okuma 1 koli ekler. Alttaki kutudan **+** ve **−** ile koli sayısını ayarlayın; aynı barkodu tekrar okutmak da artırır. Barkod Excel'de yoksa uygulama durur, **Elle ekle** veya **Devam** seçersiniz. **Bitti** ile kameradan çıkın.

**Yazarak ekleme:** Arama kutusuna stok kodu ya da ürün adının bir parçasını yazın, listeden seçin. Tam stok kodunu yazıp Enter'a basmak ürünü doğrudan ekler.

**El yazısı fiş:** Listeler ekranındaki **📄 Fiş** düğmesi fişten yeni liste açar; liste düzenleme ekranındaki **📄 Fiş** düğmesi satırları açık listeye ekler. Fotoğrafı çekin (ya da galeriden seçin); telefon fişi kendi içinde okur, satırları "koli adedi + stok kodu" olarak çıkarır, kodları ürün listesiyle eşleştirir, kalan yazıları nota koyar. Açılan **Fişi kontrol et** ekranında her satırı düzeltebilir, öneriye dokunabilir, satır silip ekleyebilir, müşteri adını ve notu değiştirebilirsiniz; en sonda **Listeye aktar**. Ayrıntı ve ipuçları için 9. bölüme bakın.

**Excel'de olmayan ürün:** Yazdığınız şey bulunamazsa onay penceresi açılır. Onaylarsanız satır sarı şeritli ve **Excel dışı** etiketli olarak eklenir. PDF ve Excel çıktısında da yıldız (*) ile işaretlenir. Satırın adına dokunarak düzeltebilirsiniz.

**Not:** Her listenin altında not alanı vardır; teslimat günü, ödeme, özel istek gibi bilgiler için.

**Kaydetme:** Yazdıklarınız anında telefona kaydedilir. **Kaydet** düğmesi listeyi kapatıp Listeler ekranına döner.

**Fiyat ve iskonto:** Varsayılan görünümde yalnızca stok kodu, ürün açıklaması, koli içi adet ve sipariş (koli) bulunur. **Fiyatları göster** açıldığında birim fiyat, satır tutarı, iskonto yüzdesi ve genel toplam görünür. Bu ayar listeye kaydedilir; kayıtlı bir listeyi sonradan açıp fiyatlı hale getirebilirsiniz. Fiyatı olmayan satırlar toplama girmez.

**PDF ve Excel:** Alttaki **PDF** veya **Excel** düğmesi dosyayı hazırlar. **Paylaş** ile WhatsApp, e-posta ya da başka bir uygulamaya gönderirsiniz; **İndir** ile telefona kaydedersiniz. Fiyatlar yalnızca "Fiyatları göster" açıkken çıktıya girer.

**Mikro'ya aktarım:** Alttaki **Mikro** düğmesi, Mikro muhasebe programının okuyabildiği bir metin dosyası (.txt) hazırlar. Dosyayı **Paylaş** ile Mikro'nun kurulu olduğu bilgisayara gönderin (WhatsApp Web, e-posta) ve bir klasöre kaydedin. Mikro'da yeni bir **Alınan Sipariş Fişi** açın, müşteriyi seçin, satırlara gelip **Ctrl+N** tuşlarına basın; açılan pencerede dosyayı seçip Enter'a basın. Satırlar stok kodu ve miktarla dolar, fiyatlar Mikro'daki fiyat listesinden gelir. Dosyada her satır `Stok kodu;Miktar` biçimindedir (Mikro'nun Ctrl+N penceresinde yazan yapı; fiyat ve diğer alanlar boş bırakılır). Miktarın adet mi koli mi yazılacağı **Ayarlar → Mikro'ya aktarım** bölümünden seçilir; varsayılan adettir (koli × koli içi adet). Stok kodu olmayan satırlar aktarılmaz; dosya hazırlanınca uyarı listesinde gösterilir.

**Kayıtlı listeler:** Listeler ekranındaki karta dokunarak açın. Sağ üstteki **⋮** menüsünden listeyi kopyalayabilir (tekrar eden siparişler için), satırları temizleyebilir ya da silebilirsiniz.

**Stok takibi:** Ürünler sekmesinin altındaki **Stok takibi** kartı, kayıtlı listelerden kimin ne aldığını, bir ürünü en son kimlerin aldığını ve kalan stoku gösterir; **Excel oluştur** ile hepsini paylaşılabilir bir Excel dosyasına döker. Ayrıntı 10. bölümde.

## 5. Gizlilik ve güvenlik

- Sunucu yoktur. Ürünler, müşteriler ve siparişler yalnızca telefonda durur ve PIN'den türetilen anahtarla AES-256 ile şifrelenir.
- Uygulama kodu tarayıcıya kendi adresi dışında hiçbir yere bağlanmamasını söyler (Content-Security-Policy). Veri sızdıracak bir bağlantı kurulamaz. Tek istisna, varsayılan olarak **kapalı** gelen bulut yapay zekâ seçeneğidir (9. bölüm): yalnızca siz Ayarlar'dan açıp kendi anahtarınızı girerseniz ve o seçeneği kullanırsanız fiş fotoğrafı Anthropic'e gider; başka hiçbir veri gitmez.
- El yazısı fiş okuma telefonun içinde çalışır; fotoğraf telefondan çıkmaz, kaydedilmez.
- Uygulama arka plana alınınca belirlediğiniz süre sonra kendini kilitler (Ayarlar).
- PIN unutulursa veriler kurtarılamaz; ürün listesi Excel'den yeniden yüklenir. Bu yüzden düzenli **yedek** alın.
- Paylaştığınız PDF ve Excel dosyaları gönderdiğiniz uygulamaya (örneğin WhatsApp) gider. Bu sizin kontrolünüzdedir.

## 6. Yedek

**Ayarlar → Yedek al** PIN ile şifreli bir dosya üretir. Bunu telefona indirin ya da kendinize gönderin. **Yedeği geri yükle** ile başka bir telefona taşıyabilir veya silinen verileri geri getirebilirsiniz; yedeğin alındığı andaki PIN sorulur.

## 7. Güncelleme

Uygulamada değişiklik yapıldığında yeni dosyaları GitHub'daki depoya tekrar yükleyin. `sw.js` içindeki `VERSION` değeri her güncellemede artırılmalıdır; telefonlar bir sonraki açılışta yeni sürümü alır ve "Yeni sürüm indirildi" uyarısı gösterir.

## 8. Sorun giderme

- **Kamera açılmıyor:** Adresin `https://` ile başladığından emin olun. İzin penceresine "İzin ver" deyin. iPhone'da Safari, Android'de Chrome kullanın. Daha önce reddettiyseniz tarayıcı ayarlarından site için kamera iznini açın.
- **"Paylaş" düğmesi yok:** Tarayıcı dosya paylaşımını desteklemiyordur. **İndir** ile kaydedip dosyayı elle gönderin.
- **Barkod okunmuyor:** Barkodu çerçevenin içine, 10-20 cm mesafeden tutun. Karanlıkta fener simgesini kullanın. EAN-13, EAN-8, UPC, Code 128, Code 39, ITF ve QR desteklenir.
- **iPhone'da veriler kayboldu:** Safari, uzun süre (7 gün ve üzeri) açılmayan sitelerin verisini silebilir. Ana ekrana eklenmiş uygulamada bu olmaz; yine de düzenli yedek alın.
- **Excel'den ürün okunmadı:** Sütun eşleştirmede stok kodu ve açıklama sütunlarının doğru seçildiğini, ilk satırın başlık olduğunu kontrol edin.
- **Fiş okuma "OCR motoru yükleniyor"da takılıyor:** İlk kullanımda motor (yaklaşık 6 MB) bir kez indirilir; internet açıkken bir kez deneyin, sonra çevrimdışı çalışır. Çok eski telefonlarda yükleme bir dakikayı bulabilir.
- **İnternetle okuma "kota" hatası veriyor:** Hata penceresinin altında Google'ın kendi mesajı görünür. "limit: 0" ya da faturalandırma geçiyorsa seçili model ücretsiz katmanda değildir (Gemini 4 Argon, 3.1 Pro) ya da projede ücretsiz kota yoktur: Ayarlar'dan Gemini 3.8 Flash seçin ya da AI Studio'da faturalandırmayı açın. Dakikalık/günlük sınır dolduysa biraz bekleyin. Ürün listesi çok büyükse uygulama ilk denemede kota hatası alınca listeyi göndermeden bir kez daha dener; kodlar o zaman telefonda eşleştirilir.
- **Fiş okunuyor ama satırlar yanlış:** 9. bölümdeki çekim ve yazım ipuçlarına bakın; "Okunan ham metin" kutusu motorun ne gördüğünü gösterir. En isabetli sonuç için telefonun kendi metin tanımasını (iPhone "Metni Tara", Android Google Lens) ve **Metin yapıştır** yolunu kullanın.
- **Kalan stok yanlış görünüyor:** Kalan, sayım değerinden yalnızca sayım tarihinden *sonra yazılan* listelerdeki koliler düşülerek bulunur; sayımdan önce yazılmış listeler düşülmez. Sayım eksiye düştüyse ya da mal geldiyse ürünü açıp **Sayım gir** ile yeni sayımı yazın (ya da gelen mal için **Stok ekle**). Eski tarihli bir sayım giriyorsanız sayım tarihini o güne çekin; o gün ve sonrasında yazılan listeler düşülür.

## 9. El yazısı fiş okuma

Müşteri temsilcisi fişi elle yazar: her satırda **koli adedi, boşluk, stok kodu** (örn. `5 A-1001` veya `5 43797`); adet çoğu zaman daire içine alınır. Fiş matbu bir "Sipariş Fişi" formu olabilir: üstte İsim/Adres alanına müşteri adı, altındaki tabloya kalemler yazılır; tablo iki sütun grubu olarak da kullanılabilir (solda Adet + Malın Cinsi, sağda Fiyat + Yekün sütunlarına yine adet + kod). Matbu etiketler, imza ve karalamalar yok sayılır; kalem ve müşteri adı dışındaki her yazı nota gider. Üç yol vardır; hepsi aynı kontrol ekranına gelir ve hepsinde sonuç kaydedilmeden önce düzeltilebilir.

**Yol 1 – Telefonda okuma (ücretsiz, internetsiz):** 📄 Fiş → **Fotoğraf çek** veya **Galeriden seç**. Açık kaynak Tesseract OCR motoru telefonun içinde çalışır; fotoğraf hiçbir yere gönderilmez. Uygulama fotoğrafı önce düzeltir (eğriliği giderir, siyah-beyaza çevirir, tablo çizgilerini, noktalı satırları, imza karalamasını ve adetlerin etrafındaki daireleri temizler), matbu formlarda sütunları bulup hücreleri tek tek okur, kodları ürün listesindeki en yakın kodla eşleştirir (0/O, 1/I, 4/L, 5/S, 8/B gibi karışıklıkları ve eksik tireleri tolere eder). Bu motor basılı yazı için tasarlanmıştır: **düzgün, büyük harfle yazılmış** fişlerde iyi, serbest el yazısı rakamlarda (4'ün L gibi, 7'nin üstü çizgili yazıldığı yazılar) zayıf sonuç verir. Gerçek fişlerle yapılan testte bu yol çoğu kodu okuyamadı; böyle yazılar için Yol 2 veya Yol 3 gerekir.

**Yol 2 – Telefonun kendi metin tanıması (ücretsiz, en isabetli):** 📄 Fiş → **Metin yapıştır**. iPhone'da metin kutusuna dokunun; klavyede çıkan **Metni Tara** (kamera simgesi) ile fişi okutun, metin kutuya yazılır. Android'de kamera veya Google Fotoğraflar'da **Google Lens** → **Metni kopyala** deyip kutuya yapıştırın (Samsung klavyedeki "Metin çıkar" da olur). Android'de daha kısa yol: Lens'te metni seçip **Paylaş** deyin ve uygulama listesinden **Sipariş**'i seçin; uygulama açılır, PIN'den sonra metin kutusu dolu gelir (ana ekrana yeni eklenen Android kurulumlarında görünür). Apple ve Google'ın tanıma motorları el yazısında Tesseract'tan çok daha iyidir ve ücretsizdir; uygulama yine satırları ayırıp kodları eşleştirir.

**Yol 3 – İnternetle okuma (en isabetli; Google Gemini ile ücretsiz):** Fotoğraf bir yapay zekâ servisine gönderilir; el yazısını, daire içindeki adetleri, iki sütunlu matbu formları ve imzayı doğru ayırt eder. Kurulum, bir kez:
1. Bilgisayar veya telefonda **aistudio.google.com** adresini açın, Google hesabınızla girin, **Get API key → Create API key** deyin. Kart istenmez; ücretsiz katman günlük yüzlerce fiş için yeterlidir (sınır dolarsa uygulama "kota doldu" der, bir süre sonra yeniden çalışır). Not: ücretsiz katmanda Google gönderilen içeriği ürünlerini geliştirmek için kullanabilir.
2. Uygulamada Ayarlar → El yazısı fiş okuma → **İnternetle okuma** bölümünü açın, **İnternetle okumayı aç** işaretleyin, Servis olarak **Google Gemini** seçili kalsın, anahtarı yapıştırın, **Bağlantıyı test et** deyin. Model listesinde ücretsiz katmanda çalışanlar (3.8 Flash önerilen) ve AI Studio'da faturalandırma açıksa kullanılabilen ücretli modeller (Gemini 4 Argon, 3.1 Pro) vardır; ücretli bir modeli faturalandırma açık değilken seçerseniz "yetkisi yok" ya da "kota" hatası alırsınız.
3. Artık 📄 Fiş menüsünün üstünde **İnternetle / Telefonda** seçimi çıkar; İnternetle seçiliyken fotoğraf çekin. İnternet yoksa seçim kendiliğinden Telefonda'ya düşer.
Alternatif servis Anthropic Claude'dur (ücretli; console.anthropic.com). Hangi servis seçilirse seçilsin fotoğraf ve ürün kodu listesi yalnızca "İnternetle" seçiliyken o servise gider; siparişler ve müşteriler gönderilmez. Anahtar telefonda PIN ile şifreli saklanır ve yedek dosyasına da (şifreli) girer. Bu bölümü hiç açmazsanız uygulama hiçbir sunucuya bağlanmaz.

**Kontrol ekranı:** Yeşil "eşleşti" satırlar hazırdır. Sarı "kontrol edin" satırlarda motor emin değildir ya da kod yakın bir koda eşlendi; "Fişte okunan" bilgisini fotoğrafla karşılaştırın (küçük resme dokununca büyür). Kırmızı "listede yok" satırlarda kodu düzeltin ya da altındaki öneriye dokunun; olduğu gibi bırakırsanız satır **Excel dışı** olarak aktarılır. Koli adedi 0 olan satırlar aktarılmaz. "Okunan ham metin" kutusu motorun gördüğü metnin tamamıdır.

**Ayrıştırma kuralları:** "5 A-1001", "5x A-1001", "5 koli A-1001", "A-1001 5", "5 A 1001" (boşlukla bölünmüş kod) ve aynı satırda iki kalem ("5 A-1001 3 B-2002") tanınır; satır sonuna yazılan açıklama ("acil", "kırmızı olsun") satır notu olur. Adet ile kod ayrı satırlara düşmüşse birleştirilir. Tarih ("17.10.2026" veya "Tarih: 17.10.2026") liste tarihine, kalem olmayan diğer satırlar nota gider. "adet" yazılsa da sayı koli olarak alınır. Fiş yan durmuşsa uygulama 90° döndürüp yeniden dener.

**Daha iyi okuma için:**
- Fişi düz bir zemine koyun, tam üstten ve bütünüyle çekin; gölge ve parlama olmasın, yazı net olsun.
- Fiş düzeni: her satırda önce koli adedi, boşluk, sonra stok kodu. Temsilciler **büyük harf ve ayrık rakamlarla** yazsın; 0 ile O, 1 ile I, 5 ile S karışmasın diye kodu listedeki gibi tire ile yazmak yardımcı olur.
- Müşteri adı fişin en üstüne tek satır olarak yazılsın; notlar ayrı satırlara.
- Uzun fişlerde birden çok fotoğraf seçebilirsiniz (Galeriden seç ile çoklu seçim); satırlar sırayla birleştirilir.
- Ayarlar → OCR dili: varsayılan "Türkçe + İngilizce" testlerde kod ve rakamları en doğru okuyan ayardır. Fişte yalnızca kod ve rakam varsa "Yalnız İngilizce" biraz daha hızlıdır.

## 10. Stok takibi

**Ne yapar:** Ürünler sekmesinin altındaki **Stok takibi** kartı üç sekmeden oluşur:
- **Ürün sor:** Stok kodu ya da ürün adı yazıp seçin. Kalan koli, sayım bilgisi ve ürünü **en son kimlerin aldığı** (en yeniden eskiye: tarih, müşteri, koli) görünür. Buradan **Sayım gir** (sayılan stoku yazarsınız), **Stok ekle** (gelen mal) ve **Takibi bırak** yapılır. Excel'de olmayan ama listelere yazılmış kodlar da aranabilir.
- **Azalan:** Kalanı eşik (varsayılan 10 koli) ve altında olan ürünler, kaç koli kaldığıyla. Sipariş yazılmış ürünler üstte (en son yazılan en üstte), hiç sipariş yazılmamış olanlar altta. Eşiği yanındaki kutudan değiştirirsiniz; eksiye düşenler kırmızı görünür. Satıra dokununca ürün açılır.
- **Kim ne almış:** Tüm listelerdeki kalemler en yeni üstte (müşteri, tarih, ürün, koli). Üstteki kutuyla müşteri adına, stok koduna ya da ürün adına göre süzün; satıra dokununca o ürünün sayfası açılır.

**Sayım nereden gelir:** İki yol vardır. (1) Ürün Excel'inde bir stok sütunu varsa (Stok Miktarı, Mevcut, Bakiye gibi bir başlık; yüklerken **Stok sayımı** alanından seçilir) her ürünün sayımı oradan alınır, sayım tarihi yükleme anı olur. Stok adet olarak yazılmışsa **Adet** seçin, koli içi adede bölünür. Boş hücreler eski sayımı korur. (2) Ürün sor sekmesinde ürünü açıp **Sayım gir** ile elle yazın.

**Kalan nasıl hesaplanır:** Kalan = sayım − sayım tarihinden sonra yazılan listelerdeki koliler. Sayımdan önce yazılmış listeler düşülmez. Mal gelince **Stok ekle** ile gelen koliyi yazın; uygulama o anki kalana ekleyip yeni bir sayım kaydeder. Sayım eski bir güne aitse sayım tarihini o güne çekin; o gün ve sonrasında yazılan listeler düşülür. Kalan eksiye düşebilir ama **sipariş yazmayı hiçbir zaman engellemez**; liste yazarken öneri satırında ve Künye'de yalnızca bilgi olarak "kalan X koli" görünür.

**Excel oluştur:** Kartın sağ üstündeki düğme, o anki listelerden şu sayfaları içeren bir Excel hazırlar ve **Paylaş** (WhatsApp, e-posta) ya da **İndir** seçeneği sunar: **Azalan stok** (eşik ve altı, uygulamadaki sırayla), **Stok durumu** (sayımı olan tüm ürünler: kalan, sayım, sayım tarihi, sayımdan sonra ve toplam sipariş, son alan müşteri), **Kim ne almış** (tüm hareketler, en yeni üstte), **Ürün bazında alanlar** (her ürün için en son alandan başlayarak müşteriler), **Müşteri bazında** (her müşterinin aldıkları) ve **Özet**. Sayfalarda süzme (filtre) açık gelir. Dosya yalnızca siz düğmeye bastığınızda oluşturulur, kendiliğinden hiçbir yere gönderilmez.

**Yedek:** Stok sayımları yedek dosyasına girer ve geri yüklemede gelir. Ürün listesini silmek ya da yeni Excel yüklemek sayımları silmez.
