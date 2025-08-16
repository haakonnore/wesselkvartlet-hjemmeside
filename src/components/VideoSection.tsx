const VideoSection = () => {
  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Wesselkvartalet i bevegelse
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Se prosjektet komme til live i denne flotte videoen
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl bg-black">
            <video 
              controls 
              className="w-full h-full object-cover"
              poster="/lovable-uploads/76eb514d-787b-4ebe-94a0-8561b43d914d.png"
            >
              <source src="/wesselkvartalet-video.mov" type="video/quicktime" />
              <source src="/wesselkvartalet-video.mp4" type="video/mp4" />
              Din nettleser støtter ikke video-elementet.
            </video>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-sm text-muted-foreground">
              Video produsert av{" "}
              <span className="font-semibold text-foreground">Flyt</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;