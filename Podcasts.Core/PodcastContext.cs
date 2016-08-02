using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;

using Podcasts.Core.Entities;

namespace Podcasts.Core
{
    public class PodcastContext : DbContext
    {
        public DbSet<Podcast> Podcasts { get; set; }
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.HasDefaultSchema("podcast");

            modelBuilder.Entity<Podcast>()
                .HasKey(p => p.PodcastId)
                .Property(p => p.PodcastId)
                .HasDatabaseGeneratedOption(DatabaseGeneratedOption.Identity);

            modelBuilder.Entity<Podcast>()
                .Property(p => p.DownloadUrl)
                .IsRequired();
        }

        public override int SaveChanges()
        {
            var changed = ChangeTracker.Entries<Podcast>()
                .Where(e => e.State == EntityState.Added)
                .Select(e => e.Entity);
            SetDates(changed);

            return base.SaveChanges();
        }

        public override Task<int> SaveChangesAsync()
        {
            var changed = ChangeTracker.Entries<Podcast>()
                .Where(e => e.State == EntityState.Added)
                .Select(e => e.Entity);
            SetDates(changed);

            return base.SaveChangesAsync();
        }

        private static void SetDates(IEnumerable<Podcast> podcasts)
        {
            foreach (var p in podcasts)
            {
                p.AddedAt = DateTime.UtcNow;
            }
        }
    }
}
