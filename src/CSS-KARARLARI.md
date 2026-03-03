1. Responsive Strateji

Projede mobile-first yaklaşımı tercih edilmiştir.
Temel stiller mobil için yazılmış, daha büyük ekranlar için min-width media query kullanılmıştır.

Breakpoint değerleri:

0–639px → Mobil

640px ve üzeri → Tablet

1024px ve üzeri → Masaüstü

Bu değerler modern cihaz genişlikleri dikkate alınarak seçilmiştir.

2. Flexbox Kullanım Kararı

Flexbox şu alanlarda tercih edilmiştir:

Header ve navigasyon düzeni

Skill etiketleri

Hakkımda bölümünün yatay dizilimi

Flexbox seçilme nedeni:

Tek boyutlu (satır veya sütun) hizalamalarda daha esnektir.

Küçük ekranlarda kolon, büyük ekranlarda satır düzenine kolay geçiş sağlar.

3. Grid Kullanım Kararı

Projeler bölümü için CSS Grid kullanılmıştır.

Sebep:

Kart yapıları iki boyutlu düzen gerektirir.

repeat(auto-fit, minmax()) ile dinamik sütun sayısı sağlanmıştır.

Masaüstünde 3 sütun olacak şekilde düzen optimize edilmiştir.

4. Design Tokens Kullanımı

Tasarım değişkenleri :root altında tanımlanmıştır:

Renk paleti

Spacing sistemi

Font boyutları (clamp ile akışkan tipografi)

Border radius

Shadow ve transition değerleri

Bu yapı sayesinde:

Tasarım tutarlılığı sağlanmıştır.

Dark mode gibi değişiklikler merkezi olarak yapılabilir.

Kod tekrarları azaltılmıştır.

5. Fluid Typography

Font boyutları clamp() fonksiyonu ile tanımlanmıştır.

Bu yöntem sayesinde:

Küçük ekranlarda okunabilirlik korunur.

Büyük ekranlarda metin orantılı şekilde büyür.

Ekstra media query yazmaya gerek kalmaz.

6. Erişilebilirlik Kararları

Skip link kullanılmıştır.

aria-label ile navigasyon açıklanmıştır.

Form alanlarında label-for eşleştirmesi yapılmıştır.

Hover ve focus durumları belirginleştirilmiştir.

7. Genel Yaklaşım

Kod yapısı:

Semantik HTML

Ayrılmış CSS katmanı

Mobil öncelikli tasarım

Ölçeklenebilir değişken sistemi

Amaç:
Temiz, sürdürülebilir ve genişletilebilir bir responsive yapı oluşturmak.
