export function Footer() {
  return (
    <footer className="border-t border-black/5 bg-black/02">
      <div className="section-container flex flex-col items-center gap-2 py-8 text-center">
        <p className="text-sm text-black/40">
          &copy; {new Date().getFullYear()} Klyfithon Paulo. Todos os direitos reservados.
        </p>
        <p className="text-xs text-black/30">
          Feito com React, TypeScript e Tailwind CSS
        </p>
      </div>
    </footer>
  )
}
