export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Santha Sarker. All rights reserved.</p>
        <p>Built with Next.js </p>
      </div>
    </footer>
  );
}