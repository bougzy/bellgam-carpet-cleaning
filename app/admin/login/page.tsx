'use client';

import { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { FadeIn } from '@/components/animations/fade-in';
import { verifyCredentials, createSessionToken, setSessionCookie } from '@/lib/auth-simple';
import { Shield, Lock, Mail } from 'lucide-react';

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get('redirect') || '/admin';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulate network delay for better UX
    await new Promise(resolve => setTimeout(resolve, 500));

    const isValid = verifyCredentials(email, password);

    if (isValid) {
      // Create session token and set cookie
      const token = createSessionToken(email);
      setSessionCookie(token);

      // Redirect to admin dashboard
      router.push(redirectTo);
      router.refresh();
    } else {
      setError('Invalid email or password');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <FadeIn className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full glass-card">
            <Shield className="w-8 h-8 text-primary-400" />
          </div>
          <h1 className="text-3xl font-bold gradient-text mb-2">
            Admin Dashboard
          </h1>
          <p className="text-gray-400">
            Sign in to manage your carpet cleaning website
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-center">Sign In</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                  {error}
                </div>
              )}

              <Input
                label="Email Address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@bellgam.com"
                required
                disabled={isLoading}
                autoComplete="email"
              />

              <Input
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                disabled={isLoading}
                autoComplete="current-password"
              />

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                isLoading={isLoading}
              >
                {isLoading ? 'Signing In...' : 'Sign In'}
              </Button>
            </form>

            <div className="mt-6 p-4 rounded-lg bg-blue-500/10 border border-blue-500/30">
              <p className="text-sm text-blue-400 font-medium mb-2">
                🔐 Demo Credentials
              </p>
              <p className="text-xs text-gray-400">
                Email: admin@bellgam.com<br />
                Password: admin123
              </p>
            </div>
          </CardContent>
        </Card>

        <p className="text-center text-gray-500 text-sm mt-6">
          © 2024 Bellgam Carpet Cleaning. All rights reserved.
        </p>
      </FadeIn>
    </div>
  );
}

export default function AdminLoginPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full glass-card">
              <Shield className="w-8 h-8 text-primary-400 animate-pulse" />
            </div>
            <h1 className="text-3xl font-bold gradient-text mb-2">
              Admin Dashboard
            </h1>
            <p className="text-gray-400">
              Loading...
            </p>
          </div>
        </div>
      </div>
    }>
      <LoginForm />
    </Suspense>
  );
}
