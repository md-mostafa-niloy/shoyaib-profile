export default function Footer() {
  return (
    <footer className="text-center text-sm text-slate-400 pt-8 pb-0 flex flex-col items-center">
      <div className="flex items-center justify-center space-x-6 text-slate-400 order-1 mb-4">
        <a href="#" target="_blank" className="hover:text-blue-600 transition-transform hover:-translate-y-1" title="YouTube">
            <i className="fab fa-youtube fa-lg"></i>
        </a>
        <a href="#" target="_blank" className="hover:text-blue-600 transition-transform hover:-translate-y-1" title="Instagram">
            <i className="fab fa-instagram fa-lg"></i>
        </a>
        <a href="#" target="_blank" className="hover:text-blue-600 transition-transform hover:-translate-y-1" title="Twitter/X">
            <i className="fab fa-twitter fa-lg"></i>
        </a>
        <a href="#" target="_blank" className="hover:text-blue-600 transition-transform hover:-translate-y-1" title="Twitch">
            <i className="fab fa-twitch fa-lg"></i>
        </a>
        <a href="#" target="_blank" className="hover:text-blue-600 transition-transform hover:-translate-y-1" title="Discord">
            <i className="fab fa-discord fa-lg"></i>
        </a>
      </div>

      <div className="order-2">
        &copy; 2025 - 2026 <a href="#" className="font-semibold text-blue-500 hover:underline">Shoyaib YT</a>. All Rights Reserved.
      </div>

      <div className="order-3 mt-2 text-slate-400">
        Development By <a href="https://visernic.com" target="_blank" className="font-semibold text-blue-500 hover:underline">Visernic Limited</a>
      </div>
    </footer>
  );
}
