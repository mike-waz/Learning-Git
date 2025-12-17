#!/bin/bash

# Docker Cleanup Script
# This script removes all Docker-related files and configurations from your system

echo "========================================"
echo "Docker Complete Removal Script"
echo "========================================"
echo ""
echo "This script will remove the following:"
echo ""
echo "BROKEN SYMLINKS (pointing to deleted Docker.app):"
echo "  - /usr/local/bin/docker"
echo "  - /usr/local/bin/docker-compose"
echo "  - /usr/local/bin/docker-credential-desktop"
echo "  - /usr/local/bin/docker-credential-osxkeychain"
echo "  - /usr/local/bin/docker-index"
echo "  - /usr/local/bin/kubectl.docker"
echo ""
echo "CONFIGURATION FILES:"
echo "  - ~/.docker/ directory (24KB)"
echo ""
echo "APPLICATION FILES:"
echo "  - ~/Library/Application Scripts/group.com.docker"
echo ""
echo "Checking for additional Docker files..."

# Check for Group Containers
if [ -d "$HOME/Library/Group Containers/group.com.docker" ]; then
    echo "  - ~/Library/Group Containers/group.com.docker"
    HAS_GROUP_CONTAINER=true
fi

# Check for Containers
if [ -d "$HOME/Library/Containers/com.docker.docker" ]; then
    echo "  - ~/Library/Containers/com.docker.docker"
    HAS_CONTAINER=true
fi

# Check for Application Support
if [ -d "$HOME/Library/Application Support/Docker Desktop" ]; then
    echo "  - ~/Library/Application Support/Docker Desktop"
    HAS_APP_SUPPORT=true
fi

echo ""
echo "========================================"
read -p "Do you want to proceed with removal? (yes/no): " confirmation

if [ "$confirmation" != "yes" ]; then
    echo "Cancelled. No files were removed."
    exit 0
fi

echo ""
echo "Removing Docker files..."

# Remove symlinks
echo "Removing symlinks from /usr/local/bin..."
rm -f /usr/local/bin/docker
rm -f /usr/local/bin/docker-compose
rm -f /usr/local/bin/docker-credential-desktop
rm -f /usr/local/bin/docker-credential-osxkeychain
rm -f /usr/local/bin/docker-index
rm -f /usr/local/bin/kubectl.docker
echo "  ✓ Symlinks removed"

# Remove .docker directory
echo "Removing ~/.docker directory..."
rm -rf "$HOME/.docker"
echo "  ✓ ~/.docker removed"

# Remove Application Scripts
echo "Removing Application Scripts..."
rm -rf "$HOME/Library/Application Scripts/group.com.docker"
echo "  ✓ Application Scripts removed"

# Remove Group Containers if exists
if [ "$HAS_GROUP_CONTAINER" = true ]; then
    echo "Removing Group Containers..."
    rm -rf "$HOME/Library/Group Containers/group.com.docker"
    echo "  ✓ Group Containers removed"
fi

# Remove Containers if exists
if [ "$HAS_CONTAINER" = true ]; then
    echo "Removing Containers..."
    rm -rf "$HOME/Library/Containers/com.docker.docker"
    echo "  ✓ Containers removed"
fi

# Remove Application Support if exists
if [ "$HAS_APP_SUPPORT" = true ]; then
    echo "Removing Application Support..."
    rm -rf "$HOME/Library/Application Support/Docker Desktop"
    echo "  ✓ Application Support removed"
fi

echo ""
echo "========================================"
echo "✓ Docker removal complete!"
echo "========================================"
echo ""
echo "All Docker files have been removed from your system."
echo "VS Code should no longer detect Docker after restarting."
echo ""
