const VideoSection = () => {
  return <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Wesselkvartalet i bevegelse
          </h2>
          
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl bg-black">
            <video controls className="w-full h-full object-cover" poster="/lovable-uploads/76eb514d-787b-4ebe-94a0-8561b43d914d.png">
              <source src="https://www.flytas.no/wp-content/uploads/2023/03/Wesselkvartalet-redigert.mov" type="video/quicktime" />
              Din nettleser støtter ikke video-elementet.
            </video>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-sm text-muted-foreground">
              Video produsert av{" "}
              <a href="https://www.flytas.no/referanser/wesselkvartalet/" target="_blank" rel="noopener noreferrer" className="font-semibold text-foreground hover:text-primary transition-colors">
                Flyt
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default VideoSection;