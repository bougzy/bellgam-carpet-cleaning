import { prisma } from '@/lib/prisma';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Plus, Edit, Trash2, FileText, Eye, EyeOff, Calendar } from 'lucide-react';
import { BlogActions } from '@/components/admin/blog-actions';

async function getBlogPosts() {
  return await prisma.blogPost.findMany({
    orderBy: { createdAt: 'desc' },
  });
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold gradient-text mb-2">Blog Posts</h1>
          <p className="text-gray-400">
            Manage blog articles and content
          </p>
        </div>
        <Link href="/admin/blog/new">
          <Button variant="primary">
            <Plus className="w-4 h-4 mr-2" />
            New Post
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Posts ({posts.length})</CardTitle>
        </CardHeader>
        <CardContent>
          {posts.length > 0 ? (
            <div className="space-y-4">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="p-6 rounded-lg glass-card border border-white/10 hover:border-white/20 transition-all"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <FileText className="w-5 h-5 text-primary-400" />
                        <h3 className="text-lg font-semibold">{post.title}</h3>
                      </div>
                      {post.excerpt && (
                        <p className="text-sm text-gray-400 mb-2">{post.excerpt}</p>
                      )}
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        {post.category && (
                          <span className="text-blue-400">📁 {post.category}</span>
                        )}
                        {post.publishedAt && (
                          <span className="flex items-center">
                            <Calendar className="w-3 h-3 mr-1" />
                            {new Date(post.publishedAt).toLocaleDateString()}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 ml-4">
                      <Link href={`/admin/blog/${post.id}`}>
                        <Button variant="ghost" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                      </Link>
                      <BlogActions postId={post.id} />
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    {post.published ? (
                      <span className="px-2 py-1 text-xs rounded bg-green-500/20 text-green-400 border border-green-500/30 flex items-center">
                        <Eye className="w-3 h-3 mr-1" />
                        Published
                      </span>
                    ) : (
                      <span className="px-2 py-1 text-xs rounded bg-gray-500/20 text-gray-400 border border-gray-500/30 flex items-center">
                        <EyeOff className="w-3 h-3 mr-1" />
                        Draft
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-400 mb-4">No blog posts found</p>
              <Link href="/admin/blog/new">
                <Button variant="primary">
                  <Plus className="w-4 h-4 mr-2" />
                  Create Your First Post
                </Button>
              </Link>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
