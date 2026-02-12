import { prisma } from '@/lib/prisma';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { formatDate } from '@/lib/utils';
import { Mail, Phone, MapPin, Briefcase, MessageSquare } from 'lucide-react';

async function getContactSubmissions() {
  return await prisma.contactSubmission.findMany({
    orderBy: { createdAt: 'desc' },
  });
}

export default async function ContactsPage() {
  const contacts = await getContactSubmissions();

  const stats = {
    total: contacts.length,
    new: contacts.filter(c => c.status === 'new').length,
    contacted: contacts.filter(c => c.status === 'contacted').length,
    converted: contacts.filter(c => c.status === 'converted').length,
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold gradient-text mb-2">Contact Forms</h1>
        <p className="text-gray-400">
          View and manage contact form submissions
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-gray-400 mb-1">Total Submissions</p>
            <p className="text-3xl font-bold">{stats.total}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-gray-400 mb-1">New</p>
            <p className="text-3xl font-bold text-green-400">{stats.new}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-gray-400 mb-1">Contacted</p>
            <p className="text-3xl font-bold text-blue-400">{stats.contacted}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-gray-400 mb-1">Converted</p>
            <p className="text-3xl font-bold text-purple-400">{stats.converted}</p>
          </CardContent>
        </Card>
      </div>

      {/* Submissions */}
      <Card>
        <CardHeader>
          <CardTitle>All Submissions ({contacts.length})</CardTitle>
        </CardHeader>
        <CardContent>
          {contacts.length > 0 ? (
            <div className="space-y-4">
              {contacts.map((contact) => (
                <div
                  key={contact.id}
                  className="p-6 rounded-lg glass-card border border-white/10"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{contact.name}</h3>
                      <p className="text-sm text-gray-500">
                        {formatDate(contact.createdAt)}
                      </p>
                    </div>
                    <span
                      className={`px-3 py-1 text-xs rounded ${
                        contact.status === 'new'
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                          : contact.status === 'contacted'
                          ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                          : 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                      }`}
                    >
                      {contact.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-300">
                      <Mail className="w-4 h-4 text-gray-500" />
                      <span>{contact.email}</span>
                    </div>
                    {contact.phone && (
                      <div className="flex items-center space-x-2 text-sm text-gray-300">
                        <Phone className="w-4 h-4 text-gray-500" />
                        <span>{contact.phone}</span>
                      </div>
                    )}
                    {contact.service && (
                      <div className="flex items-center space-x-2 text-sm text-gray-300">
                        <Briefcase className="w-4 h-4 text-gray-500" />
                        <span>{contact.service}</span>
                      </div>
                    )}
                    {contact.location && (
                      <div className="flex items-center space-x-2 text-sm text-gray-300">
                        <MapPin className="w-4 h-4 text-gray-500" />
                        <span>{contact.location}</span>
                      </div>
                    )}
                  </div>

                  <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                    <div className="flex items-start space-x-2">
                      <MessageSquare className="w-4 h-4 text-gray-500 mt-1 flex-shrink-0" />
                      <p className="text-sm text-gray-300">{contact.message}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <MessageSquare className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400 mb-2">No contact submissions yet</p>
              <p className="text-sm text-gray-500">
                Contact forms will appear here when customers submit them
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
