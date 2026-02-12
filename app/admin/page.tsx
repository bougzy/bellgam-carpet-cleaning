import { prisma } from '@/lib/prisma';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  Briefcase,
  MapPin,
  Star,
  FileText,
  Image,
  MessageSquare,
  TrendingUp,
  Users,
} from 'lucide-react';

async function getDashboardStats() {
  const [
    servicesCount,
    locationsCount,
    reviewsCount,
    blogPostsCount,
    galleryImagesCount,
    contactSubmissionsCount,
  ] = await Promise.all([
    prisma.service.count(),
    prisma.location.count(),
    prisma.review.count(),
    prisma.blogPost.count(),
    prisma.galleryImage.count(),
    prisma.contactSubmission.count(),
  ]);

  return {
    services: servicesCount,
    locations: locationsCount,
    reviews: reviewsCount,
    blogPosts: blogPostsCount,
    galleryImages: galleryImagesCount,
    contactSubmissions: contactSubmissionsCount,
  };
}

async function getRecentActivity() {
  const [recentReviews, recentContacts, recentPosts] = await Promise.all([
    prisma.review.findMany({
      take: 3,
      orderBy: { createdAt: 'desc' },
    }),
    prisma.contactSubmission.findMany({
      take: 3,
      orderBy: { createdAt: 'desc' },
    }),
    prisma.blogPost.findMany({
      take: 3,
      orderBy: { createdAt: 'desc' },
    }),
  ]);

  return { recentReviews, recentContacts, recentPosts };
}

export default async function AdminDashboardPage() {
  const stats = await getDashboardStats();
  const activity = await getRecentActivity();

  const statCards = [
    {
      title: 'Services',
      value: stats.services,
      icon: Briefcase,
      href: '/admin/services',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
    },
    {
      title: 'Locations',
      value: stats.locations,
      icon: MapPin,
      href: '/admin/locations',
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
    },
    {
      title: 'Reviews',
      value: stats.reviews,
      icon: Star,
      href: '/admin/reviews',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10',
    },
    {
      title: 'Blog Posts',
      value: stats.blogPosts,
      icon: FileText,
      href: '/admin/blog',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
    },
    {
      title: 'Gallery Images',
      value: stats.galleryImages,
      icon: Image,
      href: '/admin/gallery',
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/10',
    },
    {
      title: 'Contact Forms',
      value: stats.contactSubmissions,
      icon: MessageSquare,
      href: '/admin/contacts',
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold gradient-text mb-2">
          Dashboard Overview
        </h1>
        <p className="text-gray-400">
          Welcome to your carpet cleaning website admin panel
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {statCards.map((stat) => {
          const Icon = stat.icon;
          return (
            <Link key={stat.title} href={stat.href}>
              <Card hover className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-400 mb-1">{stat.title}</p>
                      <p className="text-3xl font-bold">{stat.value}</p>
                    </div>
                    <div className={`${stat.bgColor} p-3 rounded-lg`}>
                      <Icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/admin/services/new">
              <Button variant="glass" className="w-full justify-start">
                <Briefcase className="w-4 h-4 mr-2" />
                Add Service
              </Button>
            </Link>
            <Link href="/admin/locations/new">
              <Button variant="glass" className="w-full justify-start">
                <MapPin className="w-4 h-4 mr-2" />
                Add Location
              </Button>
            </Link>
            <Link href="/admin/blog/new">
              <Button variant="glass" className="w-full justify-start">
                <FileText className="w-4 h-4 mr-2" />
                New Blog Post
              </Button>
            </Link>
            <Link href="/admin/gallery/upload">
              <Button variant="glass" className="w-full justify-start">
                <Image className="w-4 h-4 mr-2" />
                Upload Image
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Contact Forms */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Recent Contact Forms</CardTitle>
              <Link href="/admin/contacts">
                <Button variant="ghost" size="sm">
                  View All
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activity.recentContacts.length > 0 ? (
                activity.recentContacts.map((contact) => (
                  <div
                    key={contact.id}
                    className="p-4 rounded-lg bg-white/5 border border-white/10"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <p className="font-medium">{contact.name}</p>
                      <span
                        className={`px-2 py-1 text-xs rounded ${
                          contact.status === 'new'
                            ? 'bg-green-500/20 text-green-400'
                            : 'bg-gray-500/20 text-gray-400'
                        }`}
                      >
                        {contact.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400 line-clamp-2">
                      {contact.message}
                    </p>
                    <p className="text-xs text-gray-500 mt-2">
                      {new Date(contact.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-gray-400 text-center py-8">
                  No contact forms yet
                </p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Recent Reviews */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Recent Reviews</CardTitle>
              <Link href="/admin/reviews">
                <Button variant="ghost" size="sm">
                  View All
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activity.recentReviews.length > 0 ? (
                activity.recentReviews.map((review) => (
                  <div
                    key={review.id}
                    className="p-4 rounded-lg bg-white/5 border border-white/10"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <p className="font-medium">{review.customerName}</p>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        <span className="ml-1 text-sm">{review.rating}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-400 line-clamp-2">
                      {review.content}
                    </p>
                    <p className="text-xs text-gray-500 mt-2">
                      {new Date(review.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-gray-400 text-center py-8">
                  No reviews yet
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
