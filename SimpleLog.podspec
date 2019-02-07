
  Pod::Spec.new do |s|
    s.name = 'SimpleLog'
    s.version = '0.0.1'
    s.summary = 'A simple loggin plugin'
    s.license = 'MIT'
    s.homepage = 'https://github.com/isubasinghe/simple_log.git'
    s.author = 'Isitha Subasinghe'
    s.source = { :git => 'https://github.com/isubasinghe/simple_log.git', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
  end