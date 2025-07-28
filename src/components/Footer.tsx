const Footer = () => {
  return (
    <footer className="mt-auto pt-12 pb-6">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Abhijith Neelamchalil. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer; 