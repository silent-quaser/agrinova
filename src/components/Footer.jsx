"use client";

export default function Footer() {

  return (

    <footer className="bg-green-900 text-white py-6 mt-12">

      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-3 gap-10">

        {/* Privacy */}
        <div>

          <h3 className="text-2xl font-semibold mb-4">
            Privacy
          </h3>

          <ul className="space-y-2 text-gray-200 text-sm">

            <li>
              User data is securely stored.
            </li>

            <li>
              Agricultural analytics remain private.
            </li>

            <li>
              Personal information is never shared.
            </li>

          </ul>

        </div>

        {/* Terms */}
        <div>

          <h3 className="text-2xl font-semibold mb-4">
            Terms
          </h3>

          <ul className="space-y-2 text-gray-200 text-sm">

            <li>
              Educational and demonstration purposes only.
            </li>

            <li>
              AI recommendations may vary.
            </li>

            <li>
              Verify agricultural decisions independently.
            </li>

          </ul>

        </div>

        {/* Contact */}
        <div>

          <h3 className="text-2xl font-semibold mb-4">
            Contact
          </h3>

          <p className="text-gray-200 text-sm">
            agrinova@gmail.com
          </p>

          <p className="mt-6 text-gray-300 text-xs">
            © 2026 AgriNova. All rights reserved.
          </p>

        </div>

      </div>

    </footer>

  );

}