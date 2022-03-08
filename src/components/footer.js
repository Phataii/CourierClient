export default function Footer() {
  return (
    <div className="bg-gray-700 h-96">
      <div className="grid md:grid-cols-2">
        <div className=" text-center">
          <h2 className="uppercase text-2xl text-white font-bold">
            Contact Info
          </h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12743676.870959492!2d26.17828512682506!3d38.757987158997516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b0155c964f2671%3A0x40d9dbd42a625f2a!2sTurkey!5e0!3m2!1sen!2sng!4v1646205357966!5m2!1sen!2sng"
            width="400"
            height="300"
            style={{ border: 0, padding: 10 }}
            title="Safeway Delivery Service"
            className="md:ml-28"
          ></iframe>
        </div>
        <div className=" text-center">
          <h2 className="uppercase text-2xl text-white font-bold">
            Quick Links
          </h2>
        </div>
      </div>
      <hr />
      <p className="text-white text-center">
        Copyright &copy; 2022 All rights reserved | Desgin by Phataii
      </p>
    </div>
  );
}
