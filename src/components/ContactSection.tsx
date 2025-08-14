import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export function ContactSection() {
  return (
    <section id="kontakt" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Kontakt oss</h2>
          <p className="text-xl text-muted-foreground">
            Ta kontakt for mer informasjon om ledige lokaler og fasiliteter
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="property-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6">Send oss en melding</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstname">Fornavn</Label>
                    <Input id="firstname" placeholder="Ditt fornavn" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastname">Etternavn</Label>
                    <Input id="lastname" placeholder="Ditt etternavn" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-post</Label>
                  <Input id="email" type="email" placeholder="din@epost.no" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefon</Label>
                  <Input id="phone" type="tel" placeholder="+47 xxx xx xxx" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Emne</Label>
                  <Input id="subject" placeholder="Hva gjelder henvendelsen?" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Melding</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Beskriv ditt behov eller still ditt spørsmål..."
                    rows={5}
                  />
                </div>
                <Button className="w-full primary-gradient border-0 text-lg py-6">
                  Send melding
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="property-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Kontaktinformasjon</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">E-post</h4>
                      <p className="text-muted-foreground">perwesselnore@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Telefon</h4>
                      <p className="text-muted-foreground">+47 99 58 94 33</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Adresse</h4>
                      <p className="text-muted-foreground">
                        Wesselkvartalet<br />
                        Asker sentrum<br />
                        1383 Asker
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Åpningstider</h4>
                      <p className="text-muted-foreground">
                        Mandag - Søndag: 00:00 - 24:00<br />
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="property-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Spesialtilbud</h3>
                <p className="text-muted-foreground mb-6">
                  Interessert i flere tjenester? Vi tilbyr pakkeløsninger for bedrifter som trenger kombinerte løsninger.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Kontor + Parkering</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Lager + Datarom</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Takhage + Garderobe</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}