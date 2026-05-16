import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { CheckCircle, X, ExternalLink, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

interface WorkBlock {
  title: string;
  description: string;
  action: string;
  type: "link" | "form";
  url?: string;
}

const workBlocks: WorkBlock[] = [
  {
    title: "Mentorship (1:1)",
    description: "Structured 1:1 work with experienced product managers operating inside complex, enterprise environments. The focus is decision quality, trade-offs, and navigating real organizational constraints — not career coaching, interview prep, or templates.",
    action: "Apply via MentorCruise",
    type: "link",
    url: "https://mentorcruise.com/mentor/alexanderkorneev/",
  },
  {
    title: "Enterprise Advisory",
    description: "Selective advisory and diagnostic work for B2B enterprise teams dealing with platform strategy, AI initiatives stuck after pilots, or governance and ownership deadlocks.",
    action: "Open contact form",
    type: "form",
  },
  {
    title: "Contact",
    description: "If you're unsure which path applies, or want to reach out about something else.",
    action: "Open contact form",
    type: "form",
  },
];

export function Contact() {
  const [showForm, setShowForm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      const json = await response.json();
      if (!json.success) {
        throw new Error(json.error || "Failed to send message");
      }
      return json;
    },
    onSuccess: () => {
      setShowSuccess(true);
      setErrorMessage(null);
      form.reset();
      setShowForm(false);
      setTimeout(() => setShowSuccess(false), 5000);
    },
    onError: (error: Error) => {
      setErrorMessage(error.message || "Failed to send message. Please try again.");
    },
  });

  const onSubmit = (data: ContactFormData) => {
    setErrorMessage(null);
    contactMutation.mutate(data);
  };

  const handleBlockAction = (block: WorkBlock) => {
    if (block.type === "link" && block.url) {
      window.open(block.url, "_blank", "noopener,noreferrer");
    } else {
      setShowForm(true);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <p
        className="text-center text-white/70 mb-12"
        data-testid="text-contact-intro"
      >
        Different ways to work together, depending on context, scope, and urgency.
      </p>

      {showSuccess && (
        <div
          className="mb-8 p-4 rounded-lg bg-green-500/10 border-l-4 border-green-400 flex items-center gap-3"
          data-testid="status-form-success"
        >
          <CheckCircle className="w-5 h-5 text-green-400" />
          <p className="text-white/90 text-sm">
            Message sent successfully! I'll get back to you soon.
          </p>
        </div>
      )}

      {errorMessage && (
        <div
          className="mb-8 p-4 rounded-lg bg-red-500/10 border-l-4 border-red-400 flex items-center gap-3"
          data-testid="status-form-error"
        >
          <X className="w-5 h-5 text-red-400" />
          <p className="text-white/90 text-sm">{errorMessage}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {workBlocks.map((block, index) => (
          <div
            key={index}
            className="p-6 rounded-xl border border-white/10 bg-white/5 flex flex-col"
            data-testid={`card-work-block-${index}`}
          >
            <h3
              className="text-lg font-medium text-white/95 mb-3"
              data-testid={`text-block-title-${index}`}
            >
              {block.title}
            </h3>
            <p
              className="text-white/70 text-sm leading-relaxed mb-6 flex-1"
              data-testid={`text-block-description-${index}`}
            >
              {block.description}
            </p>
            <Button
              variant="outline"
              onClick={() => handleBlockAction(block)}
              data-testid={`button-block-action-${index}`}
              className="w-full border-white/20 text-white/90 hover:border-white/40 hover:bg-white/5 gap-2"
            >
              {block.action}
              {block.type === "link" && <ExternalLink className="w-3.5 h-3.5" />}
            </Button>
          </div>
        ))}
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-background border border-white/15 rounded-xl p-8 max-w-md w-full relative">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-white/60 hover:text-white/90"
              data-testid="button-close-form"
            >
              <X className="w-5 h-5" />
            </button>

            <h3
              className="text-xl font-medium text-white/95 mb-6"
              data-testid="text-contact-form-heading"
            >
              Send a Message
            </h3>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase tracking-wide text-xs text-white/70">
                        Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          data-testid="input-name"
                          placeholder="Your name"
                          className="bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-white/40 rounded-lg"
                        />
                      </FormControl>
                      <FormMessage className="text-red-400 text-sm" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase tracking-wide text-xs text-white/70">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          data-testid="input-email"
                          placeholder="your@email.com"
                          className="bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-white/40 rounded-lg"
                        />
                      </FormControl>
                      <FormMessage className="text-red-400 text-sm" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase tracking-wide text-xs text-white/70">
                        Message
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          data-testid="input-message"
                          placeholder="Your message..."
                          rows={4}
                          className="bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-white/40 rounded-lg resize-none"
                        />
                      </FormControl>
                      <FormMessage className="text-red-400 text-sm" />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  size="lg"
                  data-testid="button-submit"
                  className="w-full"
                  disabled={contactMutation.isPending}
                >
                  {contactMutation.isPending ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      )}
    </div>
  );
}
