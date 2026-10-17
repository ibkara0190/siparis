# Sipariş Listesi – Kurulum ve Kullanım

Telefonun kamerasıyla barkod okutarak ya da elle yazılmış sipariş fişinin fotoğrafını çekerek toptan müşterileriniz için sipariş listesi hazırlayan, listeyi PDF veya Excel olarak paylaşan bir web uygulaması. Mağazaya yüklenmez, bir web adresinden açılır ve ana ekrana eklenir. Tüm veriler telefonda, PIN ile şifreli durur; fiş okuma dahil her şey telefonun içinde, internet olmadan çalışır.

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

Excel düzeni: ilk satır başlık olmalı. Beklenen sütunlar: **Stok Kodu**, **Ürün Açıklaması**, **Barkod**, **Koli İçi Adet**, **Fiyat**. Sütun adları farklı olabilir, yüklerken eşleştirirsiniz. Barkod ve Koli İçi Adet ile Fiyat isteğe bağlıdır. Barkodlar sayı ya da metin olarak kaydedilmiş olabilir, ikisi de çalışır. Yeni bir dosya yüklemek eski listenin yerine geçer; kayıtlı siparişler etkilenmez.

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

**Kayıtlı listeler:** Listeler ekranındaki karta dokunarak açın. Sağ üstteki **⋮** menüsünden listeyi kopyalayabilir (tekrar eden siparişler için), satırları temizleyebilir ya da silebilirsiniz.

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
- **Fiş okunuyor ama satırlar yanlış:** 9. bölümdeki çekim ve yazım ipuçlarına bakın; "Okunan ham metin" kutusu motorun ne gördüğünü gösterir. En isabetli sonuç için telefonun kendi metin tanımasını (iPhone "Metni Tara", Android Google Lens) ve **Metin yapıştır** yolunu kullanın.

## 9. El yazısı fiş okuma

Müşteri temsilcisi fişi elle yazar: her satırda **koli adedi, boşluk, stok kodu** (örn. `5 A-1001`). Fişin üstünde müşteri adı, kenarlarda notlar olabilir. Uygulama fotoğraftan bu yapıyı çıkarır. Üç yol vardır; hepsi aynı kontrol ekranına gelir ve hepsinde sonuç kaydedilmeden önce düzeltilebilir.

**Yol 1 – Telefonda okuma (varsayılan, ücretsiz, internetsiz):** 📄 Fiş → **Fotoğraf çek** veya **Galeriden seç**. Açık kaynak Tesseract OCR motoru telefonun içinde çalışır; fotoğraf hiçbir yere gönderilmez. Uygulama fotoğrafı önce siyah-beyaza çevirip gölgeleri temizler, sonra satırları okur, kodları ürün listesindeki en yakın kodla eşleştirir (0/O, 1/I, 5/S, 8/B gibi karışıklıkları ve eksik tireleri tolere eder). Bu motor basılı yazı için tasarlanmıştır; **düzgün, büyük harfle yazılmış** fişlerde iyi, hızlı ve bitişik el yazısında zayıf sonuç verir.

**Yol 2 – Telefonun kendi metin tanıması (ücretsiz, en isabetli):** 📄 Fiş → **Metin yapıştır**. iPhone'da metin kutusuna dokunun; klavyede çıkan **Metni Tara** (kamera simgesi) ile fişi okutun, metin kutuya yazılır. Android'de kamera veya Google Fotoğraflar'da **Google Lens** → **Metni kopyala** deyip kutuya yapıştırın (Samsung klavyedeki "Metin çıkar" da olur). Android'de daha kısa yol: Lens'te metni seçip **Paylaş** deyin ve uygulama listesinden **Sipariş**'i seçin; uygulama açılır, PIN'den sonra metin kutusu dolu gelir (ana ekrana yeni eklenen Android kurulumlarında görünür). Apple ve Google'ın tanıma motorları el yazısında Tesseract'tan çok daha iyidir ve ücretsizdir; uygulama yine satırları ayırıp kodları eşleştirir.

**Yol 3 – Bulut yapay zekâ (isteğe bağlı, varsayılan olarak kapalı):** En isabetli ve tamamen otomatik yol, ama internet ve ücretli bir Anthropic API anahtarı ister (console.anthropic.com → API Keys; fiş başına kabaca 0,05–0,15 dolar). Ayarlar → El yazısı fiş okuma → **Gelişmiş** bölümünden **Bulut seçeneğini aç** deyip anahtarı girince 📄 Fiş menüsüne "Bulut yapay zekâ ile oku" seçeneği eklenir. Açık olduğunda, yalnızca o seçenek kullanıldığında fiş fotoğrafı ve ürün kodu listesi Anthropic'e gönderilir; siparişler ve müşteriler gönderilmez. Anahtar telefonda PIN ile şifreli saklanır ve yedek dosyasına da (şifreli) girer. Bu seçeneği hiç açmazsanız uygulama hiçbir sunucuya bağlanmaz.

**Kontrol ekranı:** Yeşil "eşleşti" satırlar hazırdır. Sarı "kontrol edin" satırlarda motor emin değildir ya da kod yakın bir koda eşlendi; "Fişte okunan" bilgisini fotoğrafla karşılaştırın (küçük resme dokununca büyür). Kırmızı "listede yok" satırlarda kodu düzeltin ya da altındaki öneriye dokunun; olduğu gibi bırakırsanız satır **Excel dışı** olarak aktarılır. Koli adedi 0 olan satırlar aktarılmaz. "Okunan ham metin" kutusu motorun gördüğü metnin tamamıdır.

**Ayrıştırma kuralları:** "5 A-1001", "5x A-1001", "5 koli A-1001", "A-1001 5", "5 A 1001" (boşlukla bölünmüş kod) ve aynı satırda iki kalem ("5 A-1001 3 B-2002") tanınır; satır sonuna yazılan açıklama ("acil", "kırmızı olsun") satır notu olur. Adet ile kod ayrı satırlara düşmüşse birleştirilir. Tarih ("17.10.2026" veya "Tarih: 17.10.2026") liste tarihine, kalem olmayan diğer satırlar nota gider. "adet" yazılsa da sayı koli olarak alınır. Fiş yan durmuşsa uygulama 90° döndürüp yeniden dener.

**Daha iyi okuma için:**
- Fişi düz bir zemine koyun, tam üstten ve bütünüyle çekin; gölge ve parlama olmasın, yazı net olsun.
- Fiş düzeni: her satırda önce koli adedi, boşluk, sonra stok kodu. Temsilciler **büyük harf ve ayrık rakamlarla** yazsın; 0 ile O, 1 ile I, 5 ile S karışmasın diye kodu listedeki gibi tire ile yazmak yardımcı olur.
- Müşteri adı fişin en üstüne tek satır olarak yazılsın; notlar ayrı satırlara.
- Uzun fişlerde birden çok fotoğraf seçebilirsiniz (Galeriden seç ile çoklu seçim); satırlar sırayla birleştirilir.
- Ayarlar → OCR dili: varsayılan "Türkçe + İngilizce" testlerde kod ve rakamları en doğru okuyan ayardır. Fişte yalnızca kod ve rakam varsa "Yalnız İngilizce" biraz daha hızlıdır.
