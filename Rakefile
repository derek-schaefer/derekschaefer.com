require 'rake'

task :build do
  system 'bundle exec middleman build'
end

task :deploy => :build do
  ENV['BUCKET'] = 'www.derekschaefer.com'
  system 'bundle exec middleman s3_sync'
end
