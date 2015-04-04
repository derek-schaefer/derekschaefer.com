require 'rake'

task :build do
  system 'bundle exec middleman build'
end

task :deploy => :build do
  system 'bundle exec middleman s3_sync'
end
