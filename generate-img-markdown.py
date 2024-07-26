#!/usr/bin/python3
import os

'''
    Helper to create markdown of images contained in source directory

'''


project_name = 'river-conditions'
source_path = './public/assets/blog/' + project_name
relative_path = '/assets/blog/' + project_name

from os import listdir
from os.path import isfile, join
filenames = [f for f in listdir(source_path) if isfile(join(source_path, f))]

# Example markdown for images
# ![alt-tag](/assets/blog/rgby-rom/RGBY-ROM-raw-nits.jpg)

for filename in filenames:        
    alt = filename.replace('-', ' ').split('.')[0]
    filepath = relative_path + '/' + filename    
    print(f'![{alt}]({filepath})')
    print()
    
    

