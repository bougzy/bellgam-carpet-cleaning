import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🔍 Checking for tile & grout service...');

  // First, list all services
  const allServices = await prisma.service.findMany({
    select: {
      id: true,
      slug: true,
      title: true,
    },
  });

  console.log('\n📋 Current services in database:');
  allServices.forEach(s => console.log(`   - ${s.title} (${s.slug})`));

  // Find tile & grout services
  const tileGroutServices = allServices.filter(s =>
    s.slug.toLowerCase().includes('tile') ||
    s.slug.toLowerCase().includes('grout') ||
    s.title.toLowerCase().includes('tile') ||
    s.title.toLowerCase().includes('grout')
  );

  if (tileGroutServices.length === 0) {
    console.log('\n✅ No tile & grout services found. Database is clean!');
    return;
  }

  console.log(`\n🧹 Found ${tileGroutServices.length} tile & grout service(s) to remove:`);
  tileGroutServices.forEach(s => console.log(`   - ${s.title}`));

  // Delete them
  const deleted = await prisma.service.deleteMany({
    where: {
      id: {
        in: tileGroutServices.map(s => s.id),
      },
    },
  });

  console.log(`\n✅ Successfully removed ${deleted.count} tile & grout service(s)`);
}

main()
  .catch((e) => {
    console.error('❌ Error:', e.message);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
