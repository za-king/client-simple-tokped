import Image from "next/image";
import tokpedLogo from "../asset/bg-login-tokped.png";
import playStore from "../asset/play-store.png";
import appStore from "../asset/app-store.png";

const Footer = () => {
  return (
    <div className="bg-white left-0 right-0 border-t-2">
      <div className=" grid grid-cols-5 container my-12 text-gray-500 text-sm">
        <div>
          <div>
            <h2 className="text-gray-800 text-lg font-semibold">Tokopedia</h2>
            <ul className="grid grid-rows-9 gap-2">
              <li>Tentang Tokopedia</li>
              <li>Hak Kekayaan Intelektual</li>
              <li>Karir</li>
              <li>Blog</li>
              <li>Bridestory</li>
              <li>Tokopedia Parents</li>
              <li>Mitra Blog</li>
              <li>Tokopedia Affiliate Program</li>
              <li>Tokopedia B2B Digital</li>
            </ul>
          </div>
          <div>
            <h2 className="text-gray-800 text-lg font-semibold">Beli</h2>
            <ul className="grid grid-rows-3 gap-2">
              <li>Tagihan & Top Up</li>
              <li>Tukar Tambah Handphone</li>
              <li>Tokopedia COD</li>
            </ul>
          </div>
        </div>

        <div>
          <div>
            <h2 className="text-gray-800 text-lg font-semibold">Jual</h2>
            <ul className="grid grid-rows-3 gap-2">
              <li>Pusat Edukasi Seller</li>
              <li>Mitra Toppers</li>
              <li>Daftar Official Store</li>
            </ul>
          </div>
          <div>
            <h2 className="text-gray-800 text-lg font-semibold">
              Bantuan dan Panduan
            </h2>
            <ul className="grid grid-rows-4 gap-2">
              <li>Tokopedia Care</li>
              <li>Syarat dan Ketentuan</li>
              <li>Kebijakan Privasi</li>
              <li>Mitra</li>
            </ul>
          </div>
          <div>
            <h2 className="text-gray-800 text-lg font-semibold">
              Keamanan & Privasi
            </h2>
          </div>
        </div>
        <div>
          <div>
            <h2 className="text-gray-800 text-lg font-semibold">Ikuti Kami</h2>
          </div>
        </div>
        <div className="col-span-2">
          <div>
            <Image src={tokpedLogo} alt="Picture of the author" width={400}  className="m-auto" />
          </div>
          <div className="grid grid-cols-2 ">
          <Image src={playStore} alt="Picture of the author" width={150} className="m-auto"/>
          <Image src={appStore} alt="Picture of the author"  width={120} className="m-auto"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
