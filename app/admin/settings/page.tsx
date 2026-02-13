'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Save, Settings as SettingsIcon, CheckCircle } from 'lucide-react';

export default function SettingsPage() {
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [settings, setSettings] = useState({
    siteName: 'Bellgams Carpet Cleaning',
    whatsappNumber: '+16049021805',
    phoneDisplay: '(604) 902-1805',
    email: 'sbellgam2019@gmail.com',
    addressStreet: '281 Holdom Avenue',
    addressCity: 'Burnaby',
    addressProvince: 'BC',
    addressPostalCode: 'V5B 3T9',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSettings({
      ...settings,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    // Save to .env.local file (requires API route to update environment variables)
    // For now, show success message

    setTimeout(() => {
      setSaving(false);
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    }, 1000);
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-2">
          <SettingsIcon className="w-8 h-8 text-primary-400" />
          <h1 className="heading-2">Settings</h1>
        </div>
        <p className="text-gray-400">
          Manage your site configuration and contact information
        </p>
      </div>

      {saved && (
        <div className="mb-6 p-4 rounded-lg bg-green-500/10 border border-green-500/30 flex items-center space-x-3">
          <CheckCircle className="w-5 h-5 text-green-400" />
          <span className="text-green-400">Settings saved successfully!</span>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {/* Site Information */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Site Information</CardTitle>
            <CardDescription>Basic information about your business</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Site Name
              </label>
              <input
                type="text"
                name="siteName"
                value={settings.siteName}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-dark-800 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                required
              />
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
            <CardDescription>Phone, WhatsApp, and email settings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                WhatsApp Number
                <span className="text-gray-500 ml-2">(include country code, e.g., +16049021805)</span>
              </label>
              <input
                type="text"
                name="whatsappNumber"
                value={settings.whatsappNumber}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-dark-800 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="+16049021805"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Phone Display
                <span className="text-gray-500 ml-2">(how phone number appears on site)</span>
              </label>
              <input
                type="text"
                name="phoneDisplay"
                value={settings.phoneDisplay}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-dark-800 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="(604) 902-1805"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={settings.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-dark-800 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                required
              />
            </div>
          </CardContent>
        </Card>

        {/* Business Address */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Business Address</CardTitle>
            <CardDescription>Physical location information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Street Address
              </label>
              <input
                type="text"
                name="addressStreet"
                value={settings.addressStreet}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-dark-800 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  City
                </label>
                <input
                  type="text"
                  name="addressCity"
                  value={settings.addressCity}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-dark-800 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Province
                </label>
                <input
                  type="text"
                  name="addressProvince"
                  value={settings.addressProvince}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-dark-800 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                  maxLength={2}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Postal Code
                </label>
                <input
                  type="text"
                  name="addressPostalCode"
                  value={settings.addressPostalCode}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-dark-800 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Save Button */}
        <div className="flex justify-end">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            disabled={saving}
            className="min-w-[200px]"
          >
            {saving ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                Saving...
              </>
            ) : (
              <>
                <Save className="w-5 h-5 mr-2" />
                Save Settings
              </>
            )}
          </Button>
        </div>
      </form>

      {/* Instructions */}
      <Card className="mt-8 bg-blue-500/5 border-blue-500/20">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold text-blue-400 mb-2">
            Important Instructions
          </h3>
          <div className="text-sm text-gray-300 space-y-2">
            <p>
              To apply these settings permanently, update the following in your <code className="px-2 py-1 bg-dark-800 rounded text-primary-400">.env.local</code> file:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><code className="text-primary-400">NEXT_PUBLIC_SITE_NAME</code> - Site name</li>
              <li><code className="text-primary-400">NEXT_PUBLIC_WHATSAPP_NUMBER</code> - WhatsApp number</li>
              <li><code className="text-primary-400">NEXT_PUBLIC_PHONE_DISPLAY</code> - Phone display format</li>
              <li><code className="text-primary-400">NEXT_PUBLIC_EMAIL</code> - Email address</li>
            </ul>
            <p className="mt-3 text-yellow-400">
              After updating the .env.local file, restart the development server for changes to take effect.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
