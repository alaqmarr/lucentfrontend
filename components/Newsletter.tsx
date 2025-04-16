'use client';

import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { toast } from "react-hot-toast"

export default function Newsletter() {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = (data: { email: string }) => {
    toast.success('Thank you for subscribing!')
    reset();
  };

  return (
    <section className="py-12 bg-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold mb-2">Stay Updated</h2>
            <p className="text-indigo-100">
              Subscribe to our newsletter for the latest products, offers, and news.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col sm:flex-row gap-2"
            >
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white/10 border-white/20 text-white placeholder-indigo-200 focus:ring-white focus:border-white"
                {...register('email', { required: true })}
              />
              <Button type="submit" variant="secondary">
                Subscribe
              </Button>
            </form>
            <p className="text-xs text-indigo-200 mt-2">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}