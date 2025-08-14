import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
export function ContactSection() {
  return <section id="kontakt" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Kontakt oss</h2>
          <p className="text-xl text-muted-foreground">
            Ta kontakt for mer informasjon om ledige lokaler og fasiliteter
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          

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
                      <p className="text-muted-foreground">kontakt@wesselkvartalet.no</p>
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
                    <span className="text-sm">Lokaler + Takhage + Garderobe</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
}