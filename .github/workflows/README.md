# GitHub Actions Workflows

This directory contains optimized GitHub Actions workflows for automated dependency management and maintenance.

## 📋 Workflows Overview

### 1. Safe Daily Dependency Update (`main.yml`)

**Purpose:** Automatically updates dependencies daily with comprehensive error handling and validation.

**Features:**
- 🕐 **Scheduled Execution:** Runs daily at 10PM UTC
- 🔄 **Manual Trigger:** Can be triggered manually via workflow_dispatch
- 🛡️ **Concurrency Control:** Prevents overlapping runs
- ⏱️ **Timeout Protection:** 30-minute timeout to prevent hanging jobs
- 🔒 **Security:** Disabled audit/funding messages during CI

#### Error Mitigation Strategies

**Dependency Installation:**
1. `npm ci` (fastest, most reliable)
2. `npm install` (fallback)
3. `npm install --legacy-peer-deps` (compatibility fallback)

**Dependency Updates:**
1. Standard `npm update`
2. `npm update --legacy-peer-deps`
3. `npm-check-updates` with minor version targeting

**Build & Test:**
- Memory optimization with `--max-old-space-size=4096`
- Timeout protection (10min build, 5min tests)
- Retry mechanism with increased memory
- Graceful failure handling

**Validation Steps:**
- ✅ Package lock file integrity verification
- 🔒 Security audit (moderate level)
- 🔍 Linting checks
- 🏗️ Build validation
- 🧪 Test execution

### 2. Cleanup Failed Dependency Updates (`cleanup.yml`)

**Purpose:** Automatically cleans up failed workflow runs and notifies about failures.

**Features:**
- 🧹 **Branch Cleanup:** Removes failed PR branches
- 📢 **Failure Notification:** Creates issues for failed workflows
- 🔄 **Automatic Trigger:** Runs when main workflow fails

## 🚀 Key Improvements

### Error Prevention
- **Concurrency Control:** Prevents multiple runs from interfering
- **Timeout Protection:** Stops hanging processes
- **Backup & Restore:** Safeguards package files during updates
- **Comprehensive Fallbacks:** Multiple strategies for each operation

### Security Enhancements
- **Token Usage:** Proper GitHub token configuration
- **Audit Integration:** Security vulnerability scanning
- **Environment Isolation:** Clean environment variables

### Reliability Features
- **Cache Optimization:** Better npm cache configuration
- **Memory Management:** Optimized Node.js memory settings
- **Retry Logic:** Automatic retry with different strategies
- **Graceful Degradation:** Continues with warnings instead of failing

### Monitoring & Debugging
- **Detailed Logging:** Comprehensive step-by-step logging
- **PR Metadata:** Rich pull request descriptions with context
- **Failure Tracking:** Automatic issue creation for failures
- **Branch Management:** Cleanup of failed branches

## 📊 Workflow Outputs

### Successful Updates
- Creates detailed PR with update information
- Includes build/test validation results
- Provides rollback instructions
- Assigns reviewers automatically

### Failed Updates
- Creates issues with failure details
- Cleans up temporary branches
- Provides troubleshooting guidance
- Maintains repository hygiene

## 🔧 Configuration

### Environment Variables
```yaml
NODE_OPTIONS: --max-old-space-size=4096
NPM_CONFIG_AUDIT: false
NPM_CONFIG_FUND: false
CI: true
```

### Cache Configuration
- **npm cache:** Based on package-lock.json hash
- **Node.js:** Version 18 with optimized settings

### Timeout Settings
- **Job timeout:** 30 minutes
- **Build timeout:** 10 minutes
- **Test timeout:** 5 minutes

## 🛠️ Troubleshooting

### Common Issues

1. **Dependency Conflicts**
   - Workflow tries multiple update strategies
   - Check PR description for strategy used
   - Review package.json changes manually

2. **Build Failures**
   - Automatic retry with increased memory
   - Check build logs for specific errors
   - Verify Node.js version compatibility

3. **Test Failures**
   - Tests run with `--passWithNoTests` flag
   - Coverage and verbose output enabled
   - Review test results in PR

4. **Permission Issues**
   - Verify repository permissions
   - Check GitHub token configuration
   - Ensure workflow has write access

### Manual Intervention

If the workflow fails repeatedly:

1. **Check Issues:** Look for auto-generated failure issues
2. **Review Logs:** Examine workflow run logs
3. **Manual Update:** Run `npm update` locally
4. **Test Locally:** Verify build and tests pass
5. **Re-run Workflow:** Trigger manually if needed

## 📈 Best Practices

1. **Regular Monitoring:** Check workflow runs weekly
2. **Review PRs:** Always review dependency update PRs
3. **Test Locally:** Verify changes work in your environment
4. **Update Dependencies:** Keep workflow actions updated
5. **Monitor Security:** Review security audit results

## 🔄 Maintenance

### Updating Workflow Actions
```yaml
# Current versions (update periodically)
actions/checkout@v4
actions/setup-node@v4
peter-evans/create-pull-request@v5
actions/github-script@v7
```

### Monitoring Workflow Health
- Check workflow success rate in GitHub Actions
- Review failure patterns and common issues
- Update timeout values based on project size
- Adjust memory settings for larger projects

---

**Note:** These workflows are designed for Node.js/npm projects. For other package managers, modify the commands accordingly. 