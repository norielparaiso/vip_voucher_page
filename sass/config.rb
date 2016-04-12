#======================
# sass config by nparaiso
# Install compass SASS - http://compass-style.org/
# 'compass clean'
# then 'compass watch'
#======================

# Require any additional compass plugins here.
# add_import_path "bower_components/foundation/scss"
# add_import_path "foundation/scss"

# Set this to the root of your project when deployed:
http_path = "/"
sass_dir = "/"
css_dir = "../css"
images_dir = "../images"
javascripts_dir = "../js"
fonts_dir = "../fonts"

#paths to specific css
css_dir = "../css"
#css_dir = "../widgets/[]/css"

# You can select your preferred output style here (can be overridden via the command line):
# output_style = :expanded or :nested or :compact or :compressed
output_style = :expanded

# To enable relative paths to assets via compass helper functions. Uncomment:
# relative_assets = true
relative_assets = true

# To disable debugging comments that display the original location of your selectors. Uncomment:
# line_comments = false
line_comments = false


# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass sass scss && rm -rf sass && mv scss sass


#http://sasscast.tumblr.com/post/38673939456/sass-and-media-queries
#https://github.com/aaronjensen/sass-media_query_combiner
require 'sass-media_query_combiner'