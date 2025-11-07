import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface EventCardProps {
  title: string;
  description: string;
  category: "Technical" | "Cultural" | "Literary";
  date: string;
  time: string;
  icon: LucideIcon;
}

const categoryColors = {
  Technical: "bg-primary/10 text-primary border-primary/20",
  Cultural: "bg-accent/10 text-accent border-accent/20",
  Literary: "bg-chart-2/10 text-chart-2 border-chart-2/20",
};

export default function EventCard({ title, description, category, date, time, icon: Icon }: EventCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover-elevate">
      <CardHeader>
        <div className="flex items-start justify-between gap-4 mb-2">
          <div className="p-3 rounded-lg bg-primary/10">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <Badge className={categoryColors[category]} data-testid={`badge-category-${category.toLowerCase()}`}>
            {category}
          </Badge>
        </div>
        <CardTitle className="text-xl" data-testid="text-event-title">{title}</CardTitle>
        <CardDescription data-testid="text-event-description">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 mb-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{time}</span>
          </div>
        </div>
        <Button className="w-full" variant="outline" data-testid="button-learn-more">
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
}
